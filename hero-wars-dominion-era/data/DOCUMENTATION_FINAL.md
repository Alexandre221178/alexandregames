# Hero Wars Power Calculator - Documentação Final

## 📊 Resumo

Calculadora de Power para Hero Wars com **precisão de ~99%** (erro médio de 0.77%).

Baseada em **regressão linear** com dados de **18 heróis** do site oficial do Hero Wars.

---

## 🎯 Precisão

| Métrica | Valor |
|---------|-------|
| **Erro Médio** | 0.77% |
| **Erro Máximo** | 1.95% |
| **Heróis Testados** | 18 |
| **Taxa de Sucesso** | ~99% |

---

## 📐 Fórmula Completa

### Conversões de Atributos Primários

Cada atributo primário converte para stats secundários:

#### Strength (Força)
- **40 Health** por ponto
- **+1 Physical Attack** por ponto (somente se main stat)

#### Intelligence (Inteligência)  
- **3 Magic Attack** por ponto
- **1 Magic Defense** por ponto
- **+1 Physical Attack** por ponto (somente se main stat)

#### Agility (Agilidade)
- **2 Physical Attack** por ponto
- **1 Armor** por ponto
- **+1 Physical Attack** por ponto (somente se main stat)
  - Total: **3 Physical Attack** se for main stat

### Stats que NÃO contribuem para Power

- **Accuracy** (Acurácia) = Valor do Main Stat
- **Crit Resistance** (Resistência a Crítico) = Valor do Main Stat

Estes valores são sempre iguais ao main stat do herói mas **não afetam o Power**.

### Multiplicadores de Power

Após remover as conversões dos atributos primários, cada stat contribui para o Power:

| Stat | Multiplicador | Importância |
|------|---------------|-------------|
| **Vampirism** | 107.726 | ⭐⭐⭐⭐⭐ Altíssima |
| **Critical Hit Chance** | 1.305 | ⭐⭐⭐ Alta |
| **Dodge** | 1.290 | ⭐⭐⭐ Alta |
| **Physical Attack (base)** | 0.565 | ⭐⭐ Média-Alta |
| **Magic Attack (base)** | 0.446 | ⭐⭐ Média-Alta |
| **Armor (base)** | 0.351 | ⭐⭐ Média |
| **Armor Penetration** | 0.305 | ⭐⭐ Média |
| **Magic Defense (base)** | 0.271 | ⭐ Média-Baixa |
| **Magic Penetration** | 0.196 | ⭐ Baixa |
| **Health (base)** | 0.016 | Muito Baixa |

**Constante base:** 125,863.17

---

## 💻 Como Usar

### Python

```python
from final_hero_power_calculator import calculate_hero_power

# Stats do herói (do jogo, "Maximum stats")
hero_stats = {
    "Health": 1182769,
    "Physical_Attack": 29760,
    "Magic_Attack": 68298,
    "Magic_Defense": 9356,
    "Armor": 19621,
    "Strength": 17049,
    "Agility": 3093,
    "Intelligence": 3644,
    "Magic_Penetration": 22780,
    "Armor_Penetration": 0,
    "Critical_Hit_Chance": 0,
    "Dodge": 14245,
    "Vampirism": 0  # Porcentagem (ex: 55 para 55%)
}

# Calcular power
power = calculate_hero_power(hero_stats, "Strength")
print(f"Power calculado: {power:,}")
```

### JavaScript

```javascript
const { calculateHeroPower } = require('./final_hero_power_calculator.js');

const heroStats = {
    Health: 1182769,
    Physical_Attack: 29760,
    // ... outros stats
    Vampirism: 0
};

const power = calculateHeroPower(heroStats, "Strength");
console.log(`Power calculado: ${power.toLocaleString()}`);
```

---

## 🔄 Workflow para Atualizar Skins

### 1. Estrutura do JSON

```json
{
  "name": "Aurora",
  "mainStat": "Strength",
  "power": 195166,
  "stats": {
    "Health": 1182769,
    "Physical_Attack": 29760,
    "Magic_Attack": 68298,
    "Magic_Defense": 9356,
    "Armor": 19621,
    "Strength": 17049,
    "Agility": 3093,
    "Intelligence": 3644,
    "Magic_Penetration": 22780,
    "Armor_Penetration": 0,
    "Critical_Hit_Chance": 0,
    "Dodge": 14245,
    "Vampirism": 0
  }
}
```

### 2. Quando Adicionar Nova Skin

```python
# Ler herói do JSON
hero = load_json("aurora.json")

# Adicionar bônus da nova skin
hero["stats"]["Magic_Attack"] += 10650  # Bônus da skin
hero["stats"]["Dodge"] += 2960  # Bônus da skin

# Recalcular power
hero["power"] = calculate_hero_power(hero["stats"], hero["mainStat"])

# Salvar
save_json(hero, "aurora.json")
```

---

## 📋 Main Stats dos Heróis

| Herói | Main Stat | Tipo |
|-------|-----------|------|
| Aurora | Strength | Tank |
| Astaroth | Strength | Tank |
| Andvari | Strength | Tank |
| Chabba | Strength | Tank |
| Cleaver | Strength | Tank |
| Corvus | Strength | Tank |
| Artemis | Agility | DPS Físico |
| Dante | Agility | DPS Físico |
| Daredevil | Agility | DPS Físico |
| Darkstar | Agility | DPS Físico |
| Isaac | Agility | DPS Físico |
| Ishmael | Agility | DPS Físico |
| Cascade | Intelligence | Mago |
| Aidan | Intelligence | Mago |
| Celeste | Intelligence | Mago/Suporte |
| Cornelius | Intelligence | Mago/Suporte |
| Dorian | Intelligence | Suporte |
| Iris | Intelligence | Mago |

**Regra geral:**
- **Tanks** → Strength
- **DPS Físicos** → Agility
- **Magos/Suportes** → Intelligence

---

## ✅ Validação

### Exemplos de Precisão

| Herói | Power Real | Power Calculado | Erro | % |
|-------|-----------|-----------------|------|---|
| Cleaver | 195,847 | 195,847 | 0 | 0.00% |
| Dorian | 189,785 | 189,786 | 1 | 0.00% |
| Aurora | 195,166 | 193,532 | 1,634 | 0.84% |
| Ishmael | 195,615 | 193,905 | 1,710 | 0.87% |
| Celeste | 189,589 | 187,126 | 2,463 | 1.30% |

---

## ⚠️ Observações Importantes

1. **Stats devem ser do jogo** - Use os valores de "Maximum stats" exatamente como aparecem no jogo

2. **Main stat é obrigatório** - A função precisa saber qual é o atributo principal do herói

3. **Vampirism em porcentagem** - Use 55 para 55%, não 0.55

4. **Accuracy e Crit Resistance** - Não precisam ser incluídos, não afetam o Power

5. **Precisão** - Espere erro de ±1-2% na maioria dos casos

---

## 🔬 Metodologia

### Dados Utilizados
- **Fonte:** Site oficial do Hero Wars
- **Heróis:** 18 heróis variados (tanks, DPS, magos)
- **Método:** Regressão Linear (scikit-learn)

### Processo
1. Coleta de dados de 18 heróis do site oficial
2. Identificação das conversões de atributos primários
3. Cálculo dos stats base (removendo conversões)
4. Regressão linear para encontrar multiplicadores
5. Validação cruzada

---

## 📁 Arquivos Disponíveis

1. `final_hero_power_calculator.py` - Versão Python
2. `final_hero_power_calculator.js` - Versão JavaScript  
3. `DOCUMENTATION_FINAL.md` - Este arquivo
4. `expanded_dataset_analysis.py` - Análise completa com 18 heróis

---

## 🎓 Descobertas Importantes

1. **Vampirism é extremamente valioso** - Contribui 107x mais que Health para o Power

2. **Critical Hit e Dodge** são importantes - Cerca de 1.3 power por ponto

3. **Health tem valor mínimo** - Apenas 0.016 power por ponto de Health base

4. **Accuracy e Crit Resistance** são decorativos - Não contribuem para Power, apenas mostram o valor do main stat

---

**Versão:** 2.0 Final  
**Data:** Fevereiro 2026  
**Precisão:** ~99% (erro médio 0.77%)  
**Heróis Testados:** 18
