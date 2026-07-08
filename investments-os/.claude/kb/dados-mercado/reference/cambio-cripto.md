# Câmbio e Cripto — AwesomeAPI e CoinGecko

> **Purpose**: Câmbio em tempo real e preços de cripto em BRL, gratuitos e sem chave.
> **Verificado**: 2026-07-07 (ambos respondendo)

## AwesomeAPI — câmbio em tempo real

```text
GET https://economia.awesomeapi.com.br/json/last/{PAR1},{PAR2}
```

Pares: `USD-BRL`, `EUR-BRL`, `GBP-BRL`, `BTC-BRL`... Resposta traz `bid`, `ask`, `high`, `low`, `pctChange`, `create_date`.

```bash
curl -s "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL"
# Histórico diário (últimos N dias)
curl -s "https://economia.awesomeapi.com.br/json/daily/USD-BRL/30"
```

Diferença para a PTAX (BCB série 1): AwesomeAPI é cotação comercial **em tempo real**; PTAX é a taxa **oficial D-1** usada em contratos. Para "quanto está o dólar agora" → AwesomeAPI; para cálculo oficial/contratual → PTAX.

## CoinGecko — cripto (free tier sem chave)

```text
GET https://api.coingecko.com/api/v3/simple/price?ids={IDS}&vs_currencies=brl,usd
GET https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&ids=bitcoin,ethereum
```

IDs comuns: `bitcoin`, `ethereum`, `solana`. Rate limit do free: ~10–30 req/min — uma chamada com vários `ids` de uma vez.

```bash
curl -s "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=brl&include_24hr_change=true"
```

## Enquadramento (importante)

O KB de carteira trata dólar/ouro como **bloco de proteção (~10%)** — via fundos cambiais, ouro ou ETFs internacionais ([diversificação](../../carteira/concepts/diversificacao.md)). Cripto **não está nas notas de estudo do usuário**: se perguntado, tratar como ativo especulativo fora do framework atual, limitado ao satélite (≤10–20%), e sugerir estudar antes (`/learn:topico`) — sem KB próprio, os agentes não têm base para análise profunda de cripto.

## Related

- [Diversificação](../../carteira/concepts/diversificacao.md)
- [BCB (PTAX)](bcb.md)
