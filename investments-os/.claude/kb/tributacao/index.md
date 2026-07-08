# Tributação de Investimentos

> Fator gerador, base de cálculo, alíquota e quem recolhe — os quatro eixos de todo imposto sobre investimento no Brasil.

## Conceitos

- [IR Renda Fixa](concepts/ir-renda-fixa.md) — tabela regressiva, retenção na fonte, isentos
- [IR Renda Variável](concepts/ir-renda-variavel.md) — 15%/20%, isenção R$ 20 mil, DARF pelo investidor
- [IR Fundos e Come-cotas](concepts/ir-fundos-come-cotas.md) — antecipação semestral, FIA, FII, ETF
- [IOF](concepts/iof.md) — regressivo diário, zera no 30º dia

## Padrões

- [Apuração DARF](patterns/apuracao-darf.md) — workflow mensal de renda variável
- [Compensação de Prejuízos](patterns/compensacao-prejuizos.md) — regras e registro
- [Otimização Fiscal](patterns/otimizacao-fiscal.md) — usar isenções legalmente: LCI/LCA, incentivadas, 20k, FII, previdência

## Mapa rápido: quem recolhe o quê

| Investimento | Quem recolhe |
|--------------|--------------|
| CDB, Tesouro, fundos | **Fonte** (instituição/administrador) |
| Ações, ETFs, FIIs (ganho de capital) | **Investidor** via DARF mensal |
| LCI/LCA, poupança, debênture incentivada, dividendos | Isentos (PF) |

## Fonte

Destilado de `../Tributação/` (Renda Fixa, Renda Variável, Fundos, IOF). Alíquotas e regras mudam por lei — confirmar vigência antes de orientar (ex.: tributação de dividendos em discussão recorrente).
