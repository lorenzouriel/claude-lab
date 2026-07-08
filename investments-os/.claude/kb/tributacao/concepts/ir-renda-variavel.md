# IR sobre Renda Variável

> **Purpose**: A regra que muda tudo: aqui **o investidor** apura e recolhe, mensalmente, via DARF.
> **Source**: `../Tributação/Renda Variável.md`

## Fator gerador

Liquidação da operação **com ganho de capital** (venda acima da compra).

## Base de cálculo

```text
Base = Lucro bruto − custos operacionais (corretagem, emolumentos, taxas B3)
Apurada sobre o resultado líquido de TODAS as operações do mês, por tipo.
```

## Alíquotas

| Tipo | Alíquota |
|------|----------|
| Comum (swing/position, > 1 dia) | **15%** |
| Day trade (compra e venda no mesmo dia) | **20%** |

## Isenção dos R$ 20 mil

- Vendas totais no mês (**volume vendido**, não o lucro) ≤ R$ 20.000 → lucro **isento**
- Vale **apenas para ações** no mercado à vista, operações comuns
- **Não vale** para: day trade, ETFs, FIIs, BDRs

```text
Vendeu R$ 19.000 em ações no mês com lucro → isento.
Vendeu R$ 21.000 → IR de 15% sobre TODO o lucro do mês (não só o excedente).
```

## Quem recolhe

O **investidor**: apuração mensal, DARF (código 6015) até o **último dia útil do mês seguinte**. A corretora retém só o "dedo-duro" (0,005% comum / 1% day trade), que abate do devido.

Exige controle de compras, vendas, custos e preço médio — planilha ou apps (Kinvo, TradeMap, MyCapital…).

## Compensação de prejuízos

Prejuízos compensam lucros futuros **do mesmo tipo** (DT↔DT, comum↔comum), no mesmo CPF, registrados na declaração — detalhe em [compensação](../patterns/compensacao-prejuizos.md).

## Proventos

- **Dividendos**: isentos (hoje; legislação pode mudar — confirmar vigência)
- **JCP**: 15% retido na fonte

## Common Mistakes

### Errado

Achar que a corretora recolhe o IR de ações; contar a isenção pelo **lucro** e não pelo volume vendido; esquecer que ETF não tem isenção.

### Correto

Rotina mensal de apuração ([workflow DARF](../patterns/apuracao-darf.md)); monitorar volume vendido no mês antes de vender mais.

## Related

- [Apuração DARF](../patterns/apuracao-darf.md)
- [Compensação de Prejuízos](../patterns/compensacao-prejuizos.md)
- [IR Fundos (FII/ETF)](ir-fundos-come-cotas.md)
