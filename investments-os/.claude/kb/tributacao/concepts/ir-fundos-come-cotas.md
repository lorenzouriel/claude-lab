# IR sobre Fundos e Come-cotas

> **Purpose**: Como fundos são tributados: come-cotas semestral, exceções (FIA, FII, ETF) e quem recolhe.
> **Source**: `../Tributação/Fundos.md`

## Fator gerador

1. **Resgate de cotas** com lucro
2. **Come-cotas** — último dia útil de **maio** e **novembro**

Base: `Valor de resgate − Valor aplicado`.

## Come-cotas

Antecipação semestral do IR: recolhe **15%** sobre o rendimento acumulado **reduzindo a quantidade de cotas** (não o valor nominal). No resgate, paga-se só a diferença entre a alíquota final da tabela e o já antecipado.

- Atinge: fundos **RF, multimercado e cambial** com ≤67% em ações
- Escapa: **FIA**, FII, ETF, previdência

## Alíquotas por tipo de fundo

| Fundo | Regra |
|-------|-------|
| **FIA** (≥67% ações) | **15% único**, só no resgate, sem come-cotas |
| FIM com >67% ações | Tributado como FIA |
| Longo prazo (RF/FIM) | Regressiva 22,5% → 15% + come-cotas |
| Curto prazo | Regressiva com piso 20% (não chega a 17,5/15%) + come-cotas |

Quem recolhe: o **administrador**, na fonte.

## FII — dois regimes

| Rendimento | Tributação |
|------------|-----------|
| **Aluguéis mensais** | **Isentos** para PF se: fundo ≥50 cotistas + cotas negociadas exclusivamente em bolsa |
| **Ganho de capital na venda de cotas** | **20%**, sem isenção, sem come-cotas, **DARF pelo investidor** |

## ETF

- É fundo de índice, **não ação**: sem isenção de R$ 20 mil
- 15% comum / 20% day trade, **DARF mensal pelo investidor**
- Compensação de prejuízo dentro da mesma categoria

## Common Mistakes

### Errado

Tratar venda de FII como ação (15% + isenção 20k) — é **20% sem isenção**; esquecer que o come-cotas some cotas duas vezes por ano e estranhar o extrato.

### Correto

FII e ETF exigem apuração própria via DARF; para longo prazo sem come-cotas, FIA e previdência têm vantagem estrutural.

## Related

- [IR Renda Variável](ir-renda-variavel.md)
- [Apuração DARF](../patterns/apuracao-darf.md)
- [Fundos Básicos](../../fundos/concepts/fundos-basicos.md)
