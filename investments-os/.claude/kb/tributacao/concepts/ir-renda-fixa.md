# IR sobre Renda Fixa

> **Purpose**: Fator gerador, base, tabela regressiva e retenção na fonte para CDB, Tesouro e afins.
> **Source**: `../Tributação/Renda Fixa.md`

## Fator gerador

O IR incide quando o rendimento se realiza:

- **Resgate** — investidor retira o dinheiro
- **Vencimento** — título chega ao fim
- **Pagamento de juros/amortizações** — cupons semestrais (NTN-F, NTN-B, debêntures)

Aplica-se a investimentos **não isentos**: CDB, Tesouro Direto, debêntures comuns, fundos RF/FIM.

## Base de cálculo

```text
Base = Valor resgatado − Valor aplicado   (o lucro, nunca o principal)
```

## Tabela regressiva

| Prazo da aplicação | Alíquota |
|--------------------|----------|
| Até 180 dias | 22,5% |
| 181–360 dias | 20% |
| 361–720 dias | 17,5% |
| Acima de 720 dias | **15%** |

A tabela premia o longo prazo: passar de 720 dias derruba a alíquota ao piso de 15%.

## Quem recolhe

A **fonte pagadora** (banco, corretora, administrador): o investidor recebe o valor já **líquido**. Sem DARF para renda fixa — diferente de renda variável.

## Isentos (não seguem esta tabela)

LCI, LCA, CRI, CRA, debêntures **incentivadas**, poupança — isentos de IR para PF. Para comparar isento × tributado: [gross-up](../../renda-fixa/patterns/comparacao-liquida-gross-up.md).

## Interação com IOF

Resgate antes de 30 dias: primeiro o [IOF](iof.md) come parte do rendimento, depois o IR de 22,5% incide sobre o restante.

## Common Mistakes

### Errado

Achar que o IR incide sobre o valor total resgatado; planejar resgate no dia 179 ou 719 "por liquidez" pagando degrau maior à toa.

### Correto

IR só sobre o **lucro**; quando a necessidade permitir, cruzar o degrau (181/361/721 dias) antes de resgatar.

## Related

- [IOF](iof.md)
- [Comparação Líquida](../../renda-fixa/patterns/comparacao-liquida-gross-up.md)
- [Otimização Fiscal](../patterns/otimizacao-fiscal.md)
