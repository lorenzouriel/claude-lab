# Otimização Fiscal (Legal)

> **Purpose**: Usar as isenções e regras existentes a favor — elisão fiscal, nunca evasão.
> **Source**: síntese de `../Tributação/` + `../Renda Fixa/` (isenções por produto).

## As alavancas

### 1. Produtos isentos por natureza (PF)

| Produto | Isenção | Contrapartida |
|---------|---------|---------------|
| LCI / LCA | IR zero | Carência ≥90d; comparar via [gross-up](../../renda-fixa/patterns/comparacao-liquida-gross-up.md) |
| Debênture incentivada | IR zero | Sem FGC — exige rating |
| CRI / CRA | IR zero | Sem FGC, liquidez baixa |
| Rendimento mensal de FII | IR zero (condições) | Ganho de capital segue 20% |
| Dividendos | IR zero (hoje) | Legislação pode mudar |

### 2. Isenção dos R$ 20 mil (ações)

- Planejar vendas para ficar ≤ R$ 20 mil/mês quando possível
- Venda grande? Fatiar entre meses (ex.: R$ 38 mil → 19 + 19 em dois meses) — legal e previsto
- Lembrar: limite é por **volume vendido**, e ETF/FII não contam com isso

### 3. Prazo como alavanca (tabela regressiva)

- Cruzar os degraus: 721+ dias = 15% (vs 22,5% no curto)
- Nunca resgatar dias antes de um degrau sem necessidade
- IOF: qualquer resgate espera o 30º dia

### 4. Estrutura de fundos

- Longo prazo em bolsa: **FIA e previdência não têm come-cotas** — juros compostos sobre o imposto não pago
- Previdência: PGBL deduz 12% da renda (declaração completa); regressiva chega a **10% após 10 anos** — a menor alíquota do sistema
- Portabilidade de previdência troca de plano **sem** evento tributário

### 5. Compensação de prejuízos

Registrar tudo, sempre — prejuízo declarado é crédito eterno ([regras](compensacao-prejuizos.md)).

## Sequência de decisão para dinheiro novo

```text
1. Já tem reserva? → Tesouro Selic/CDB diário (liquidez > imposto)
2. Meta 3m–2a?     → LCI/LCA se gross-up vencer o CDB
3. Longo prazo RF? → IPCA+ >720 dias (15%) ou debênture incentivada (0%)
4. Bolsa?          → ações diretas aproveitam 20k + dividendos isentos;
                     ETF simplifica mas perde as duas isenções
5. Aposentadoria?  → previdência regressiva (10% em 10 anos) se plano barato
```

## Limites — o que NÃO fazer

- **Evasão**: omitir lucro, não pagar DARF, "esquecer" venda — multa + juros + malha
- Vender no prejuízo e recomprar no mesmo dia apenas para gerar crédito (wash sale não tem regra explícita no Brasil, mas planejamento abusivo pode ser questionado)
- Deixar o imposto decidir sozinho: produto ruim isento perde de produto bom tributado

## Related

- [Comparação Líquida](../../renda-fixa/patterns/comparacao-liquida-gross-up.md)
- [Compensação de Prejuízos](compensacao-prejuizos.md)
- [Previdência](../../fundos/concepts/previdencia.md)
