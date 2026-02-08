# lang_checker.py
# Programa para verificar traduções em arquivos de localização de Hero Wars Alliance e Dominion Era
# E verificar heróis multilingues na pasta characters-guide

import json
import os
import re
from collections import defaultdict

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
    # Remove a declaração const e o ponto e vírgula
    match = re.search(r'const \w+ = ({.*?});', content, re.DOTALL)
    if match:
        json_str = match.group(1)
        return json.loads(json_str)
    return None

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

def check_characters_multilingual():
    """Verifica heróis multilingues na pasta characters-guide."""
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
                    issues.extend(check_html_title(filepath, hero, lang))
        else:
            missing = set(LANGUAGES) - set(langs_list)
            issues.append(f"Herói '{hero}' incompleto: faltam idiomas {sorted(missing)} (tem: {langs_list})")
    
    return issues

def check_html_title(filepath, hero, lang):
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
    char_issues = check_characters_multilingual()
    all_issues.extend(char_issues)

    if all_issues:
        print("Problemas encontrados:")
        for issue in all_issues:
            print(f"- {issue}")
    else:
        print("Todas as traduções estão completas e presentes.")

if __name__ == "__main__":
    main()