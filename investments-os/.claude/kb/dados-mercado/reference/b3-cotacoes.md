# Cotações B3 — Yahoo Finance + Fundamentus

> **Purpose**: Cotações, histórico e fundamentos de ações/FIIs/ETFs da B3 sem chave de API.
> **Verificado**: 2026-07-07 (Yahoo chart respondendo para PETR4.SA)

## Yahoo Finance (não oficial, sem chave)

Tickers B3 recebem sufixo **`.SA`**: `PETR4.SA`, `HGLG11.SA`, `BOVA11.SA`. Índices: `^BVSP` (Ibovespa), `^GSPC` (S&P 500).

```text
GET https://query1.finance.yahoo.com/v8/finance/chart/{TICKER}.SA?range={R}&interval={I}
Header obrigatório: User-Agent: Mozilla/5.0
```

| Parâmetro | Valores |
|-----------|---------|
| `range` | `1d 5d 1mo 6mo 1y 5y max` |
| `interval` | `1d 1wk 1mo` (intraday: `5m 15m` com range curto) |
| `events` | `div` (dividendos), `split` |

Resposta: `chart.result[0].meta.regularMarketPrice` (preço atual), `timestamp[]` + `indicators.quote[0].close[]` (histórico), `events.dividends` (proventos).

```bash
# Cotação atual + últimos 5 pregões
curl -s -H "User-Agent: Mozilla/5.0" "https://query1.finance.yahoo.com/v8/finance/chart/PETR4.SA?range=5d&interval=1d"
# Histórico 5 anos com dividendos (baixar no scratchpad — grande)
curl -s -H "User-Agent: Mozilla/5.0" "https://query1.finance.yahoo.com/v8/finance/chart/HGLG11.SA?range=5y&interval=1mo&events=div" -o "$SCRATCHPAD/hglg11.json"
```

**Caveats**: API não oficial — pode falhar, atrasar ~15 min ou mudar sem aviso. Falhou → WebSearch e sinalizar a queda da fonte. Nunca usar para decisão intraday.

## Fundamentus (fundamentos, scraping via WebFetch)

```text
https://www.fundamentus.com.br/detalhes.php?papel={TICKER}     ← ação: P/L, P/VP, ROE, DY, margens, dívida
https://www.fundamentus.com.br/fii_detalhes.php?papel={TICKER} ← FII: P/VP, DY, vacância (quando reportada)
https://www.fundamentus.com.br/resultado.php                   ← screener de todas as ações (tabelão)
```

Usar WebFetch com prompt direcionado ("extraia P/L, P/VP, ROE, DY, dívida líquida/EBITDA"). Dados ~D-1; balanços do último trimestre reportado.

## StatusInvest (alternativa de scraping)

`https://statusinvest.com.br/acoes/{ticker}` e `https://statusinvest.com.br/fundos-imobiliarios/{ticker}` — mais indicadores que o Fundamentus, HTML mais pesado. Segunda opção quando o Fundamentus não tiver o dado (ex.: CAGR, payout detalhado).

## Ordem de resolução para um ticker

```text
Preço/histórico  → Yahoo chart
Fundamentos      → Fundamentus → StatusInvest → RI da empresa (WebFetch)
Fato relevante   → WebSearch + RI
```

## Related

- [Checklist Análise de Ação](../../analise/patterns/checklist-analise-acao.md)
- [Checklist Análise de FII](../../analise/patterns/checklist-analise-fii.md)
