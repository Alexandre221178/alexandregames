# lang_checker.py
# Programa para verificar traduções em arquivos de localização de Hero Wars Alliance e Dominion Era
# E verificar heróis multilingues na pasta characters-guide

import json
import os
import re
from collections import defaultdict
from difflib import get_close_matches, SequenceMatcher

# Caminhos para os arquivos de localização
DATA_DIR = 'hero-wars-alliance/data'
HWDE_DATA_DIR = 'hero-wars-dominion-era/data'
CHARACTERS_DIR = 'hero-wars-alliance/characters-guide'

# Idiomas suportados
LANGUAGES = ['en', 'de', 'es', 'fr', 'pt', 'ja']

# Dados de localização carregados
heroes_data = {}
titans_data = {}
terms_data = {}

def load_js_file(filepath):
    """Carrega um arquivo JS e extrai o objeto JSON."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    # Encontrar a posição do { após const ... =
    start = content.find('{')
    if start == -1:
        return None
    # Encontrar a última }
    end = content.rfind('}')
    if end == -1:
        return None
    json_str = content[start:end+1]
    return json.loads(json_str)

def load_json_file(filepath):
    """Carrega um arquivo JSON."""
    with open(filepath, 'r', encoding='utf-8-sig') as f:
        return json.load(f)

def load_localization_data():
    """Carrega os dados de localização."""
    global heroes_data, titans_data, terms_data
    try:
        heroes_data = load_js_file(os.path.join(DATA_DIR, 'hwa-heroes-localization.js'))
    except:
        heroes_data = {}
    try:
        titans_data = load_js_file(os.path.join(DATA_DIR, 'hwa-titans-localization.js'))
    except:
        titans_data = {}
    try:
        terms_data = load_json_file(os.path.join(DATA_DIR, 'terms-localization.json'))
    except:
        terms_data = {}

def check_characters_multilingual(fix_teams=False, fixes=None):
    """Verifica heróis multilingues na pasta characters-guide."""
    if fixes is None:
        fixes = defaultdict(list)
    issues = []
    if not os.path.exists(CHARACTERS_DIR):
        issues.append(f"Diretório não encontrado: {CHARACTERS_DIR}")
        return issues
    
    hero_langs = defaultdict(set)
    for filename in os.listdir(CHARACTERS_DIR):
        if filename.endswith('.html'):
            # Exemplo: artemis-en.html -> hero='artemis', lang='en'
            match = re.match(r'(.+)-(\w+)\.html$', filename)
            if match:
                hero, lang = match.groups()
                if lang in LANGUAGES:
                    hero_langs[hero].add(lang)
    
    for hero, langs in hero_langs.items():
        langs_list = sorted(langs)
        if langs_list == ['en', 'pt']:
            # Ignorar
            continue
        elif set(langs_list) == set(LANGUAGES):
            # Completo, verificar títulos
            for lang in LANGUAGES:
                filepath = os.path.join(CHARACTERS_DIR, f"{hero}-{lang}.html")
                if os.path.exists(filepath):
                    issues.extend(check_html_title(filepath, hero, lang, fix_teams, fixes))
        else:
            missing = set(LANGUAGES) - set(langs_list)
            issues.append(f"Herói '{hero}' incompleto: faltam idiomas {sorted(missing)} (tem: {langs_list})")
    
    return issues

def check_html_title(filepath, hero, lang, fix_teams=False, fixes=None):
    """Verifica se o HTML contém as traduções corretas em várias seções."""
    issues = []
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Obter traduções
        hero_trans = get_translation(heroes_data, hero, lang)
        game_trans1 = get_translation(terms_data, "Hero Wars Alliance", lang)
        game_trans2 = get_translation(terms_data, "Hero Wars (Mobile)", lang)
        game_trans3 = get_translation(terms_data, "Hero Wars: Alliance", lang)
        
        # Verificar <title>
        title_match = re.search(r'<title>(.*?)</title>', content, re.IGNORECASE | re.DOTALL)
        if title_match:
            title = title_match.group(1)
            if hero_trans and hero_trans not in title:
                issues.append(f"{filepath}: <title> não contém nome do herói '{hero_trans}' em {lang}")
            if game_trans1 and game_trans1 not in title and game_trans2 and game_trans2 not in title and game_trans3 and game_trans3 not in title:
                issues.append(f"{filepath}: <title> não contém nome do jogo '{game_trans1}', '{game_trans2}' ou '{game_trans3}' em {lang}")
        
        # Verificar <meta name="description">
        # Removido: não verificar nome do jogo aqui
        
        # Verificar <h1>
        h1_match = re.search(r'<h1[^>]*>(.*?)</h1>', content, re.IGNORECASE | re.DOTALL)
        if h1_match:
            h1 = h1_match.group(1)
            if hero_trans and hero_trans not in h1:
                issues.append(f"{filepath}: <h1> não contém nome do herói '{hero_trans}' em {lang}")
            if game_trans1 and game_trans1 not in h1 and game_trans2 and game_trans2 not in h1 and game_trans3 and game_trans3 not in h1:
                issues.append(f"{filepath}: <h1> não contém nome do jogo '{game_trans1}', '{game_trans2}' ou '{game_trans3}' em {lang}")
        
        # Verificar <h2> (removido: não verificar nome do jogo aqui)
        # Para h2, só verificar se contiver o nome do jogo e estiver errado, mas se não tiver, ignorar
        h2_matches = re.findall(r'<h2[^>]*>(.*?)</h2>', content, re.IGNORECASE | re.DOTALL)
        for h2 in h2_matches:
            # Se contiver "Hero Wars", verificar se tem a tradução correta
            if 'hero wars' in h2.lower():
                if game_trans1 and game_trans1 not in h2 and game_trans2 and game_trans2 not in h2 and game_trans3 and game_trans3 not in h2:
                    issues.append(f"{filepath}: <h2> '{h2[:50]}...' menciona 'Hero Wars' mas não contém a tradução correta '{game_trans1}', '{game_trans2}' ou '{game_trans3}' em {lang}")
                    break  # Apenas o primeiro erro
        
        # Verificar <figcaption>
        figcaption_matches = re.findall(r'<figcaption[^>]*>(.*?)</figcaption>', content, re.IGNORECASE | re.DOTALL)
        for figcaption in figcaption_matches:
            # Se contiver "Hero Wars", verificar se tem a tradução correta
            if 'hero wars' in figcaption.lower():
                if game_trans1 and game_trans1 not in figcaption and game_trans2 and game_trans2 not in figcaption and game_trans3 and game_trans3 not in figcaption:
                    issues.append(f"{filepath}: <figcaption> '{figcaption[:50]}...' menciona 'Hero Wars' mas não contém a tradução correta '{game_trans1}', '{game_trans2}' ou '{game_trans3}' em {lang}")
                    break  # Apenas o primeiro erro
        
        # Verificar nomes de heróis e titãs no conteúdo para erros de digitação
        hero_names_lower = set()
        for hero_key, trans_dict in heroes_data.items():
            if isinstance(trans_dict, dict) and lang in trans_dict:
                hero_names_lower.add(trans_dict[lang].lower())
        for titan_key, trans_dict in titans_data.items():
            if isinstance(trans_dict, dict) and lang in trans_dict:
                hero_names_lower.add(trans_dict[lang].lower())
        term_names_lower = set()
        for term_key, trans_dict in terms_data.items():
            if isinstance(trans_dict, dict) and lang in trans_dict:
                term_names_lower.add(trans_dict[lang].lower())
        # Palavras comuns que podem ser confundidas com nomes de heróis/titãs
        excluded_words = {
            'fr': ['temps'],  # "Temps" significa "tempo" em francês
            'de': ['cleave'],  # "Cleave" é uma palavra comum em alemão?
            # Adicionar mais conforme necessário
        }
        # Remover conteúdo de script e style para evitar falsos positivos
        content_no_script = re.sub(r'<script[^>]*>.*?</script>', '', content, flags=re.DOTALL | re.IGNORECASE)
        content_no_style = re.sub(r'<style[^>]*>.*?</style>', '', content_no_script, flags=re.DOTALL | re.IGNORECASE)
        words = re.findall(r'\b[A-Z][a-z]+\b', content_no_style)  # palavras capitalizadas
        for word in words:
            if len(word) < 4:  # ignorar palavras curtas
                continue
            lower_word = word.lower()
            if lower_word in hero_names_lower or lower_word in term_names_lower:
                continue  # correto
            # Verificar possessivo alemão (adiciona 's')
            if lower_word.endswith('s') and lower_word[:-1] in hero_names_lower:
                continue  # possessivo correto
            # Excluir palavras comuns por idioma
            if lower_word in excluded_words.get(lang, []):
                continue
            # Primeiro, verificar contra heróis com cutoff estrito
            matches = get_close_matches(lower_word, list(hero_names_lower), n=1, cutoff=0.9)
            if matches:
                suggested = matches[0].capitalize()
                issues.append(f"{filepath}: Possível erro de digitação no nome '{word}' – sugerido '{suggested}' em {lang}")
                if fix_teams:
                    if filepath not in fixes:
                        fixes[filepath] = []
                    fixes[filepath].append((word, suggested))
            else:
                # Depois, verificar contra termos com cutoff mais leve
                matches = get_close_matches(lower_word, list(term_names_lower), n=1, cutoff=0.95)
                if matches:
                    suggested = matches[0].capitalize()
                    issues.append(f"{filepath}: Possível erro de digitação no termo '{word}' – sugerido '{suggested}' em {lang}")
                    if fix_teams:
                        if filepath not in fixes:
                            fixes[filepath] = []
                        fixes[filepath].append((word, suggested))
        
        # Verificar listas de equipes
        team_matches = re.findall(r'<ol class="team-list team-table-body">(.*?)</ol>', content, re.DOTALL)
        for team_list in team_matches:
            team_names = re.findall(r'<div class="team-name">(.*?)</div>', team_list)
            for team in team_names:
                # Separador
                separator = ','
                heroes_in_team = [h.strip() for h in team.split(separator)]
                for hero_name in heroes_in_team:
                    # Verificar se o nome corresponde exatamente a uma tradução
                    found = False
                    # Verificar heróis
                    for hero_key, trans_dict in heroes_data.items():
                        if isinstance(trans_dict, dict) and lang in trans_dict and trans_dict[lang] == hero_name:
                            found = True
                            break
                    # Verificar titãs se não encontrado
                    if not found:
                        for titan_key, trans_dict in titans_data.items():
                            if isinstance(trans_dict, dict) and lang in trans_dict and trans_dict[lang] == hero_name:
                                found = True
                                break
                    if not found:
                        if fix_teams:
                            # Check if it's the English name
                            for hero_key, trans_dict in heroes_data.items():
                                if isinstance(trans_dict, dict) and 'en' in trans_dict and trans_dict['en'] == hero_name:
                                    correct_name = trans_dict.get(lang)
                                    if correct_name:
                                        if filepath not in fixes:
                                            fixes[filepath] = []
                                        fixes[filepath].append((hero_name, correct_name))
                                        issues.append(f"{filepath}: Corrigindo '{hero_name}' (inglês) para '{correct_name}' na equipe em {lang}")
                                        found = True
                                        break
                            if not found:
                                for titan_key, trans_dict in titans_data.items():
                                    if isinstance(trans_dict, dict) and 'en' in trans_dict and trans_dict['en'] == hero_name:
                                        correct_name = trans_dict.get(lang)
                                        if correct_name:
                                            if filepath not in fixes:
                                                fixes[filepath] = []
                                            fixes[filepath].append((hero_name, correct_name))
                                            issues.append(f"{filepath}: Corrigindo '{hero_name}' (inglês) para '{correct_name}' na equipe em {lang}")
                                            found = True
                                            break
                            if not found:
                                # Find closest match
                                best_match = None
                                best_sim = 0
                                for hero_key, trans_dict in heroes_data.items():
                                    if isinstance(trans_dict, dict) and lang in trans_dict:
                                        trans = trans_dict[lang]
                                        sim = SequenceMatcher(None, hero_name, trans).ratio()
                                        if sim > best_sim:
                                            best_sim = sim
                                            best_match = trans
                                for titan_key, trans_dict in titans_data.items():
                                    if isinstance(trans_dict, dict) and lang in trans_dict:
                                        trans = trans_dict[lang]
                                        sim = SequenceMatcher(None, hero_name, trans).ratio()
                                        if sim > best_sim:
                                            best_sim = sim
                                            best_match = trans
                                if best_sim > 0.5:
                                    # Add to fixes
                                    if filepath not in fixes:
                                        fixes[filepath] = []
                                    fixes[filepath].append((hero_name, best_match))
                                    issues.append(f"{filepath}: Corrigindo '{hero_name}' para '{best_match}' na equipe em {lang}")
                                else:
                                    issues.append(f"{filepath}: Nome de herói/titã '{hero_name}' na equipe não corresponde a nenhuma tradução em {lang} (similaridade baixa)")
                        else:
                            issues.append(f"{filepath}: Nome de herói/titã '{hero_name}' na equipe não corresponde a nenhuma tradução em {lang}")
        
    except Exception as e:
        issues.append(f"Erro ao ler {filepath}: {e}")
    return issues

def get_translation(data, key, lang):
    """Obtém a tradução de uma chave."""
    if isinstance(data, dict) and key in data:
        item = data[key]
        if isinstance(item, dict) and lang in item:
            return item[lang]
    return None

def check_translations(data, filename, path=""):
    """Verifica se todas as traduções estão presentes."""
    issues = []
    if isinstance(data, dict):
        # Verifica se este dicionário é um dicionário de tradução (contém todas as linguagens)
        if all(lang in data for lang in LANGUAGES):
            for lang in LANGUAGES:
                if not data[lang].strip():
                    issues.append(f"{filename}: {path} tem tradução vazia para '{lang}'")
        else:
            # Não é um dicionário de tradução, recursa
            for key, value in data.items():
                new_path = f"{path}.{key}" if path else key
                issues.extend(check_translations(value, filename, new_path))
    elif isinstance(data, list):
        for i, item in enumerate(data):
            new_path = f"{path}[{i}]"
            issues.extend(check_translations(item, filename, new_path))
    return issues

def main():
    import sys
    fix_teams = '--fix-teams' in sys.argv
    fixes = defaultdict(list)
    
    # Carregar dados de localização
    load_localization_data()
    
    files_to_check = [
        (os.path.join(DATA_DIR, 'hwa-heroes-localization.js'), load_js_file),
        (os.path.join(DATA_DIR, 'hwa-titans-localization.js'), load_js_file),
        (os.path.join(DATA_DIR, 'terms-localization.json'), load_json_file),
        (os.path.join(HWDE_DATA_DIR, 'hwde-heroes-localization.json'), load_json_file),
        (os.path.join(HWDE_DATA_DIR, 'hwde-titans-localization.json'), load_json_file),
    ]

    all_issues = []
    for filepath, loader in files_to_check:
        if os.path.exists(filepath):
            data = loader(filepath)
            if data:
                issues = check_translations(data, os.path.basename(filepath))
                all_issues.extend(issues)
            else:
                all_issues.append(f"Erro ao carregar {filepath}")
        else:
            all_issues.append(f"Arquivo não encontrado: {filepath}")

    # Verificar heróis multilingues
    char_issues = check_characters_multilingual(fix_teams, fixes)
    all_issues.extend(char_issues)

    if all_issues:
        print("Problemas encontrados:")
        for issue in all_issues:
            print(f"- {issue}")
    else:
        print("Todas as traduções estão completas e presentes.")
    
    # Apply fixes
    if fix_teams and fixes:
        for filepath, replacements in fixes.items():
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            for old, new in replacements:
                content = re.sub(r'\b' + re.escape(old) + r'\b', new, content)
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Corrigido {filepath}:")
            for old, new in replacements:
                print(f"  '{old}' -> '{new}'")
            print(f"Total: {len(replacements)} substituições feitas.")

if __name__ == "__main__":
    main()