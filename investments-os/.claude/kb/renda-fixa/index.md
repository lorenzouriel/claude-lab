# Renda Fixa

> Emprestar dinheiro (governo, banco, empresa) e receber de volta com juros. Retorno em grande parte previsível — com exceções.

## Conceitos

- [Pré vs Pós-fixado](concepts/pre-vs-pos-fixado.md) — os dois regimes de remuneração e o híbrido (IPCA+)
- [Inflação e Juro Real](concepts/inflacao-e-juro-real.md) — IPCA, IGP-M, Selic, juro nominal vs real
- [Tesouro Direto](concepts/tesouro-direto.md) — Selic, Prefixado, IPCA+; liquidez, frações, taxas
- [FGC](concepts/fgc.md) — o que cobre, limites por CPF/instituição, o que fica de fora

## Padrões

- [Escolher Título](patterns/escolher-titulo.md) — árvore de decisão por objetivo e prazo
- [Comparação Líquida (Gross-up)](patterns/comparacao-liquida-gross-up.md) — comparar isentos (LCI/LCA) com tributados (CDB) na mesma base
- [Escada de Vencimentos](patterns/escada-de-vencimentos.md) — laddering para liquidez + taxa

## Produtos cobertos

Tesouro Direto (Selic/Prefixado/IPCA+), Poupança, CDB, LCI/LCA, Debêntures (simples, conversíveis, incentivadas), COE.

## Fonte

Destilado de `../Renda Fixa/` (notas 0–7). Valores de mercado (Selic, CDI, IPCA) devem ser confirmados via web — o KB registra a mecânica.
