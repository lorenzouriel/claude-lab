# Análise Técnica

> **Purpose**: Ler o comportamento do preço para operações de prazo curto — ferramentas, premissas e limites.
> **Source**: `../Renda Variável/Ações.md`

## Premissa

> "A história tende a se repetir nos mercados."

Os preços já refletem a informação disponível; padrões de ganância e medo se repetem em gráficos. Usada para timing em day/swing/position trade — **não** para decidir se a empresa é boa.

## Ferramentas principais

| Ferramenta | O que mostra |
|------------|--------------|
| Candlestick | Abertura, fechamento, máxima, mínima por período |
| Suporte / resistência | Zonas onde o preço tende a parar ou reverter |
| Tendência | Alta (topos/fundos ascendentes), baixa, lateral |
| Volume | Confirma (ou nega) a força de um movimento |

## Indicadores

| Indicador | Uso típico |
|-----------|-----------|
| Médias móveis (curta × longa) | Direção de tendência; cruzamentos como sinal |
| IFR / RSI | Sobrecompra (>70) / sobrevenda (<30) |
| MACD | Momentum e reversões |
| Bandas de Bollinger | Volatilidade e extremos de preço |
| Fibonacci | Zonas prováveis de correção |

Detalhe operacional dos indicadores: [indicadores-tecnicos](../../analise/concepts/indicadores-tecnicos.md).

## Uso disciplinado (swing)

```text
1. TENDÊNCIA   Operar a favor da tendência do timeframe maior
2. SETUP       Entrada definida (rompimento, pullback em suporte, etc.)
3. STOP        Nível que invalida o setup — definido ANTES da entrada
4. ALVO        Risco/retorno mínimo 2:1
5. TAMANHO     Position sizing pela distância do stop
6. REGISTRO    Anotar setup, resultado e lição (postmortem)
```

## Limites honestos

- Não prevê o futuro; opera **probabilidades** — o edge só aparece com disciplina e amostra grande.
- Em papéis de baixa liquidez, padrões gráficos valem pouco.
- Técnica sem gestão de risco = ruína garantida no longo prazo.

## Common Mistakes

### Errado

Mover o stop "para dar mais uma chance"; operar contra a tendência por "achar que virou"; usar 5 indicadores redundantes como se fossem confirmações independentes.

### Correto

Stop é sagrado; poucos indicadores com papéis distintos (tendência + momentum + volume); tamanho da posição definido pelo risco, não pela convicção.

## Related

- [Indicadores Técnicos](../../analise/concepts/indicadores-tecnicos.md)
- [Position Sizing](../../analise/patterns/position-sizing.md)
- [Estratégias de Investimento](estrategias-de-investimento.md)
