# portfolio/ — dados locais da carteira

> A camada de estado do investments-os: os agentes leem estes CSVs para operar sobre a **sua carteira real** em vez de descrições de memória. Os `.csv` são **gitignorados** (dados financeiros pessoais); este README com os schemas é versionado.

## Arquivos e schemas

### `positions.csv` — posição atual (fonte da verdade)

```csv
ativo,classe,quantidade,preco_medio,data_atualizacao,observacao
PETR4,acao,200,32.50,2026-07-07,
HGLG11,fii,50,158.00,2026-07-07,
Tesouro IPCA+ 2045,tesouro,1.5,1450.00,2026-07-07,vencimento 2045
CDB Banco X 110% CDI,cdb,10000,1.00,2026-07-07,vencimento 2027-03; FGC
BOVA11,etf,30,112.00,2026-07-07,
Reserva - Tesouro Selic,reserva,12000,1.00,2026-07-07,emergência 4 meses
```

`classe`: `acao | fii | etf | tesouro | cdb | lci-lca | debenture | fundo | previdencia | reserva | cripto | outro`

### `trades.csv` — operações (alimenta DARF e postmortem)

```csv
data,ativo,operacao,quantidade,preco,custos,tipo,nota
2026-06-15,PETR4,venda,100,38.20,5.10,comum,lucro realizado
2026-06-20,BOVA11,compra,10,113.50,2.30,comum,
```

`operacao`: `compra | venda` · `tipo`: `comum | day-trade`

### `prejuizos.csv` — prejuízos acumulados a compensar (por categoria)

```csv
categoria,valor_acumulado,ultima_atualizacao
acoes_comum,0.00,2026-07-07
day_trade,0.00,2026-07-07
fii,1250.00,2026-07-07
etf_comum,0.00,2026-07-07
```

### `teses.md` — teses escritas (opcional, formato livre)

Uma seção por ativo: por que comprou, riscos, gatilhos de venda, data da última revisão. O acoes-analyst escreve aqui ao concluir `/analyze:acao`.

## Como os agentes usam

| Comando | Lê | Escreve |
|---------|-----|---------|
| `/portfolio:track` | positions + Yahoo/BCB (marcação) | relatório; atualiza `data_atualizacao` |
| `/portfolio:review` / `rebalance` | positions | — |
| `/tax:darf` | trades + prejuizos | atualiza prejuizos após apuração |
| `/analyze:acao` | teses.md (se existir) | adiciona/atualiza tese |

## Regras

1. Valores em BRL; datas `AAAA-MM-DD`; decimal com ponto.
2. `preco_medio` é o preço médio de compra (base do ganho de capital) — para RF/reserva usar 1.00 e `quantidade` = valor aplicado.
3. Os agentes **nunca inventam** linhas: posição desconhecida → perguntar e registrar.
4. Backup é seu: os CSVs não vão para o git.
