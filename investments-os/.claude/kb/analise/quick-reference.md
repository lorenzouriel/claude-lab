# Análise — Quick Reference

## Indicadores fundamentalistas (cheat sheet)

| Indicador | Fórmula | Lê-se como | Cuidado |
|-----------|---------|-----------|---------|
| P/L | Preço ÷ Lucro por ação | Anos de lucro para pagar o preço | Lucro cíclico distorce; comparar no setor |
| P/VPA | Preço ÷ Valor patrimonial por ação | Prêmio sobre o patrimônio | <1 pode ser barganha **ou** problema |
| ROE | Lucro líquido ÷ Patrimônio líquido | Eficiência sobre o capital próprio | Dívida alta infla ROE |
| Dividend Yield | Proventos 12m ÷ Preço | Renda anual sobre o preço | DY alto por preço caindo = trap |
| Margem líquida | Lucro líquido ÷ Receita | Quanto da receita vira lucro | Comparar só no mesmo setor |
| Dív. líquida/EBITDA | Dívida líquida ÷ EBITDA | Anos de geração p/ quitar dívida | >3 exige atenção; setor importa |
| Payout | Dividendos ÷ Lucro | % do lucro distribuído | >100% é insustentável |
| ROA | Lucro ÷ Ativos totais | Eficiência sobre ativos | Bancos naturalmente baixos |

## Faixas de leitura (ordem de grandeza, nunca regra absoluta)

| Indicador | Atenção | Neutro | Interessante |
|-----------|---------|--------|--------------|
| P/L | > 25 ou negativo | 10–25 | < 10 (com lucro estável) |
| P/VPA | > 3 | 1–3 | < 1 (investigar por quê) |
| ROE | < 8% | 8–15% | > 15% consistente |
| DY | > 12% (checar sustentabilidade) | 4–8% | 6–10% sustentável |
| Dív.líq/EBITDA | > 3,5 | 1,5–3 | < 1,5 |

## Indicadores técnicos

| Indicador | Sinal clássico |
|-----------|----------------|
| Média móvel 21/50/200 | Preço acima = tendência de alta; cruzamento curta×longa |
| IFR/RSI (14) | >70 sobrecomprado; <30 sobrevendido |
| MACD | Cruzamento da linha de sinal; divergências |
| Bollinger | Toque nas bandas = extremo; estreitamento = explosão próxima |
| Volume | Movimento sem volume não confirma |

## Position sizing (regra do risco fixo)

```text
Risco por trade = 1–2% do capital da estratégia
Tamanho = (Capital × %risco) ÷ (Preço entrada − Preço stop)

Ex.: R$ 50.000, risco 1% (R$ 500), entrada R$ 20, stop R$ 18
     → 500 ÷ 2 = 250 ações (R$ 5.000 de posição)
```

## Valuation em uma linha

- **Múltiplos**: comparar P/L, EV/EBITDA, P/VPA com pares do setor e média histórica da própria empresa
- **DCF**: valor = fluxos de caixa futuros descontados; sensível às premissas — usar cenários (pessimista/base/otimista)
- **Graham (renda)**: preço justo ≈ perpetuidade dos proventos sustentáveis ÷ taxa exigida
