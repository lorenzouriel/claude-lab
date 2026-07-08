# Indicadores Técnicos

> **Purpose**: Os indicadores citados nas notas (médias móveis, IFR, MACD, Bollinger, Fibonacci) — o que medem e como combiná-los sem redundância.
> **Source**: `../Renda Variável/Ações.md` (Análise Técnica)

## Por família (combinar famílias diferentes, não repetir a mesma)

### Tendência — Médias móveis

- Média dos preços de N períodos (21 = curto, 50 = médio, 200 = longo)
- Preço acima da MM200 = tendência primária de alta; cruzamento curta×longa como sinal ("golden cross" / "death cross")
- Armadilha: em mercado lateral, cruzamentos geram sinais falsos em série

### Momentum — IFR/RSI (14)

- Oscilador 0–100 da força relativa de altas vs baixas
- >70 sobrecomprado, <30 sobrevendido; divergência preço×IFR antecipa reversões
- Armadilha: em tendência forte, fica "sobrecomprado" por meses — não é venda automática

### Momentum/Tendência — MACD

- Diferença entre médias exponenciais (12−26) + linha de sinal (9)
- Cruzamentos e divergências; histograma mostra aceleração

### Volatilidade — Bandas de Bollinger

- MM20 ± 2 desvios-padrão
- Toque nas bandas = extremo estatístico; **estreitamento** = compressão que precede movimento forte

### Retração — Fibonacci

- Zonas prováveis de correção (38,2% / 50% / 61,8% do movimento anterior)
- Usar como região de interesse + confirmação, nunca como gatilho isolado

### Confirmação — Volume

- Rompimento sem volume = suspeito; movimento com volume crescente = confirmado

## Setup mínimo coerente

```text
1 de tendência (MM50/200) + 1 de momentum (IFR ou MACD) + volume
Entrada: a favor da tendência, no sinal de momentum, confirmada por volume
Stop: abaixo do suporte que motivou a entrada
```

## Common Mistakes

### Errado

5 indicadores da mesma família "confirmando" (é 1 sinal repetido); operar sinal contra a tendência maior; indicador sem contexto de suporte/resistência.

### Correto

Uma família cada, contexto de preço primeiro (tendência, suporte/resistência), indicador como refinamento — e [position sizing](../patterns/position-sizing.md) sempre.

## Related

- [Análise Técnica](../../renda-variavel/patterns/analise-tecnica.md)
- [Position Sizing](../patterns/position-sizing.md)
