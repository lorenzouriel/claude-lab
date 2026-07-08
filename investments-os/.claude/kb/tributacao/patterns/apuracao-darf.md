# Apuração Mensal e DARF

> **Purpose**: Workflow mensal de apuração de IR de renda variável — ações, ETFs e FIIs — até a emissão do DARF.
> **Source**: `../Tributação/Renda Variável.md`, `../Tributação/Fundos.md`

## Calendário

```text
Mês M: opera            → registrar tudo
Início de M+1: apurar   → notas de corretagem do mês M
Até o ÚLTIMO DIA ÚTIL de M+1: pagar DARF (código 6015)
```

## Workflow

### 1. Consolidar operações do mês

Por **categoria separada**:
- Ações — operações comuns
- Ações — day trade
- ETFs (comum / day trade)
- FIIs (ganho de capital)

Para cada venda: preço de venda − preço médio de compra − custos (corretagem, emolumentos, taxas B3).

### 2. Checar isenção (só ações comuns)

```text
Volume VENDIDO em ações comuns no mês ≤ R$ 20.000?
├── Sim → lucro isento (registrar como rendimento isento na anual)
└── Não → todo o lucro do mês é tributável a 15%
```

ETF e FII **nunca** têm essa isenção.

### 3. Compensar prejuízos acumulados

Abater prejuízos anteriores **da mesma categoria** (ver [compensação](compensacao-prejuizos.md)). Resultado negativo no mês → sem DARF; acumular o prejuízo.

### 4. Calcular o imposto

| Categoria | Alíquota |
|-----------|----------|
| Ações/ETF comum | 15% |
| Day trade | 20% |
| FII | 20% |

Abater o **IRRF "dedo-duro"** retido pela corretora (0,005% vendas comuns; 1% sobre ganho em day trade).

### 5. Emitir e pagar

- Somar o devido de todas as categorias num DARF (código **6015**)
- DARF < R$ 10: não se paga — acumula para o mês seguinte
- Emissão: Sicalcweb da Receita ou app da corretora/software

### 6. Registrar

Guardar: notas de corretagem, planilha de apuração, DARFs pagos, prejuízos a compensar → alimenta a declaração anual (Renda Variável, ficha mês a mês).

## Erros comuns

- Esquecer meses com **lucro pequeno** ("não vale DARF") — vale, ou acumula se < R$ 10
- Misturar categorias na compensação
- Usar preço de compra da última compra em vez de **preço médio**
- Perder o prazo → multa e juros (Selic)

## Related

- [IR Renda Variável](../concepts/ir-renda-variavel.md)
- [Compensação de Prejuízos](compensacao-prejuizos.md)
