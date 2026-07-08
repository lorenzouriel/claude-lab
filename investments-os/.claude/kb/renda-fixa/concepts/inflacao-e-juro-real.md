# Inflação e Juro Real

> **Purpose**: Como a inflação corrói retorno e como separar juro nominal de juro real.
> **Source**: `../Renda Fixa/1. Inflação.md`

## Overview

Inflação é o aumento generalizado e contínuo dos preços: o mesmo dinheiro compra menos com o tempo. O objetivo de qualquer investidor é **rentabilidade real positiva** — ganhar acima da inflação.

## Índices

| Índice | Quem calcula | Composição | Uso |
|--------|--------------|------------|-----|
| **IPCA** | IBGE | Cesta ampla de consumo | Índice oficial; meta do BC; Tesouro IPCA+ |
| **IGP-M** | FGV | 60% atacado (IPA) + 30% consumidor (IPC) + 10% construção (INCC) | Reajuste de aluguéis e contratos |

## Juro nominal × juro real

```text
Aproximação:  real ≈ nominal − inflação
Exato:        real = (1 + nominal) / (1 + inflação) − 1

Exemplo: Prefixado 10% a.a., IPCA 6% a.a.
  Aproximado: 4% | Exato: 1,10/1,06 − 1 = 3,77% a.a. de ganho real
```

> Juro nominal é o que parece. Juro real é o que conta.

## Selic e o controle da inflação

O Banco Central usa a **Selic** como instrumento:

- Inflação alta → **sobe juros** → crédito caro → consumo cai → inflação cede
- Inflação baixa → **corta juros** → crédito barato → consumo sobe

Consequência prática: ciclo de alta da Selic favorece pós-fixados; expectativa de corte favorece prefixados e IPCA+ longos (marcação a mercado positiva).

## Common Mistakes

### Errado

Comparar investimentos apenas pela taxa nominal ("12% a.a. é melhor que 10%") sem descontar inflação e imposto.

### Correto

Comparar sempre em **retorno real líquido**: descontar IR e inflação esperada da mesma base.

## Related

- [Pré vs Pós-fixado](pre-vs-pos-fixado.md)
- [Comparação Líquida (Gross-up)](../patterns/comparacao-liquida-gross-up.md)
