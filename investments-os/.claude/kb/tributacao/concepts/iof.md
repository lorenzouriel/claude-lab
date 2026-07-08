# IOF sobre Aplicações Financeiras

> **Purpose**: O imposto dos primeiros 30 dias: quando incide, como calcula e como interage com o IR.
> **Source**: `../Tributação/IOF - Imposto sobre Operações Financeiras.md`

## Regra

- Incide em resgates **antes de 30 dias** da aplicação
- Só sobre o **rendimento**, nunca o principal
- Tabela **regressiva diária**: 96% do rendimento no dia 1 → **0% no dia 30**
- Recolhimento automático pela instituição

## Onde incide / não incide

| Incide | Não incide |
|--------|-----------|
| Fundos RF e multimercado | Ações, FIIs, ETFs |
| Tesouro Selic, CDB liquidez diária | Fundos de ações (FIA) |
| Qualquer RF resgatada < 30 dias | Poupança; aplicações ≥ 30 dias |

## Ordem do cálculo: IOF antes do IR

```text
R$ 1.000 em CDB liquidez diária, resgate no dia 10, rendimento bruto R$ 100:

1. IOF (dia 10 → 66%):        66% × 100      = R$ 66,00
2. IR  (≤180d → 22,5%):       22,5% × 34     = R$ 7,65
3. Líquido:                   100 − 66 − 7,65 = R$ 26,35
```

Resgatar em dias arranca a maior parte do rendimento — o IOF é desenhado para desestimular giro curtíssimo.

## Tabela de referência (marcos)

| Dias corridos | % do rendimento tributado |
|---------------|---------------------------|
| 1 | 96% |
| 5 | 83% |
| 10 | 66% |
| 15 | 50% |
| 20 | 33% |
| 25 | 16% |
| 29 | 3% |
| **30+** | **0%** |

(Redução ~linear de ~3,33 p.p./dia.)

## Common Mistakes

### Errado

Girar dinheiro da reserva entre produtos em janelas de dias "atrás de taxa melhor" — o IOF devora o ganho.

### Correto

Dinheiro com uso possível em < 30 dias fica **parado** no veículo líquido; qualquer troca de produto espera o 30º dia.

## Related

- [IR Renda Fixa](ir-renda-fixa.md)
- [Quick Reference](../quick-reference.md)
