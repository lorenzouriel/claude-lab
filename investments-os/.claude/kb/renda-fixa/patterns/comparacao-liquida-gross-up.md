# Comparação Líquida (Gross-up)

> **Purpose**: Comparar produtos isentos (LCI/LCA, debênture incentivada) com tributados (CDB, Tesouro) na mesma base.
> **Source**: `../Renda Fixa/6. LCI e LCA.md`, `../Tributação/Renda Fixa.md`

## O problema

"CDB 110% do CDI" vs "LCA 93% do CDI" — qual rende mais? A taxa nominal maior perde se o IR comer a diferença.

## Fórmulas

```text
Taxa líquida do tributado:
  líquida = bruta × (1 − alíquota_IR)

Gross-up do isento (taxa equivalente bruta):
  equivalente_bruta = taxa_isenta / (1 − alíquota_IR)

Alíquota pela tabela regressiva (prazo da aplicação):
  ≤180d: 22,5% | 181–360d: 20% | 361–720d: 17,5% | >720d: 15%
```

## Exemplo (prazo 2 anos → IR 15%)

```text
CDB 110% do CDI:  líquido = 110% × 0,85 = 93,5% do CDI
LCA 93% do CDI:   já é líquida             = 93,0% do CDI
→ CDB ganha por 0,5 p.p. — mas a LCA tem carência e o CDB pode ter liquidez.

Regra de bolso (IR 15%): isenta equivale a tributada × 0,85.
  LCA 90% do CDI ≡ CDB ~105,9% do CDI (90 / 0,85)
```

## Exemplo com CDI absoluto

CDI a 10,65% a.a.:

| Produto | Bruto | IR (15%) | Líquido |
|---------|-------|----------|---------|
| LCA 100% CDI | 10,65% | isenta | **10,65%** |
| CDB 110% CDI | 11,72% | −1,76 p.p. | **9,96%** |

Mesmo com taxa nominal menor, a LCA vence pela isenção.

## Checklist da comparação

1. Mesmo **prazo** para os dois produtos (define a alíquota do tributado).
2. Aplicar gross-up ou net-down — nunca comparar bruto com líquido.
3. Pesar **liquidez** (LCI/LCA têm carência ≥90 dias) e **FGC** (ambos têm).
4. Prazo <30 dias? Somar o efeito do **IOF** no tributado.
5. Empate técnico (<0,3 p.p.)? Decidir por liquidez e solidez do emissor.

## Related

- [IR Renda Fixa](../../tributacao/concepts/ir-renda-fixa.md)
- [IOF](../../tributacao/concepts/iof.md)
- [Escolher Título](escolher-titulo.md)
