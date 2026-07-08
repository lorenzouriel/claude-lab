# Dados de Mercado — Quick Reference

> Preciso de X → chamo Y. Tudo gratuito, sem chave. Testado 2026-07-07.

## Tabela de despacho

| Preciso de | Endpoint (GET) | Detalhe |
|------------|----------------|---------|
| Meta Selic | `https://api.bcb.gov.br/dados/serie/bcdata.sgs.432/dados/ultimos/1?formato=json` | % a.a. |
| CDI diário | `.../bcdata.sgs.12/dados/ultimos/1?formato=json` | % ao dia (anualizar: ((1+v/100)^252−1)) |
| IPCA 12 meses | `.../bcdata.sgs.13522/dados/ultimos/1?formato=json` | % acum. 12m |
| IPCA mensal | `.../bcdata.sgs.433/dados/ultimos/12?formato=json` | % a.m. |
| IGP-M mensal | `.../bcdata.sgs.189/dados/ultimos/1?formato=json` | % a.m. |
| Dólar PTAX | `.../bcdata.sgs.1/dados/ultimos/1?formato=json` | venda, D-1 |
| Poupança mensal | `.../bcdata.sgs.196/dados/ultimos/1?formato=json` | % a.m. |
| Expectativas (Focus) | `https://olinda.bcb.gov.br/olinda/servico/Expectativas/versao/v1/odata/...` | ver [bcb.md](reference/bcb.md) |
| Preços/taxas Tesouro Direto | CSV Tesouro Transparente | ver [tesouro-transparente.md](reference/tesouro-transparente.md) — filtrar, arquivo grande |
| Cotação ação/FII/ETF B3 | `https://query1.finance.yahoo.com/v8/finance/chart/{TICKER}.SA?range=5d&interval=1d` | header `User-Agent: Mozilla/5.0`; não oficial |
| Histórico OHLCV B3 | mesmo endpoint, `range=1y|5y|max` | dividendos: `&events=div` |
| Fundamentos de ação | `https://www.fundamentus.com.br/detalhes.php?papel={TICKER}` via WebFetch | HTML scraping |
| Cadastro/informes de fundos | `https://dados.cvm.gov.br/dados/FI/...` | ver [cvm-fundos.md](reference/cvm-fundos.md) — arquivos grandes, filtrar |
| Câmbio tempo real | `https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL` | bid/ask + var % |
| Cripto em BRL | `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=brl` | rate limit ~10–30/min |
| Ibovespa (índice) | Yahoo: ticker `^BVSP` | mesmo endpoint chart |
| S&P 500 | Yahoo: ticker `^GSPC` (ou `IVVB11.SA` para o ETF) | idem |

## Regras de uso

1. **Sempre datar**: todo valor citado leva a data do dado (campo `data`/timestamp da resposta), não a data de hoje.
2. **Arquivos grandes** (Tesouro CSV ~vários MB, CVM ~18 MB): baixar para o scratchpad e filtrar (`grep`/`tail`), nunca carregar inteiro no contexto.
3. **Yahoo é não oficial**: pode falhar/mudar sem aviso; falhou → WebSearch como fallback e sinalizar.
4. **Formato de data BCB**: DD/MM/AAAA; valores com ponto decimal.
5. **Cache mental de sessão**: buscar uma vez por sessão e reutilizar; não repetir a mesma chamada.

## Anualizações úteis

```text
CDI diário → a.a.:   ((1 + v/100)^252 − 1) × 100
Taxa a.m. → a.a.:    ((1 + v/100)^12 − 1) × 100
Juro real:           ((1 + nominal) / (1 + inflação) − 1) × 100
```
