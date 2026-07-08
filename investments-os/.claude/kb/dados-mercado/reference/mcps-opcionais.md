# MCPs Opcionais (exigem conta — NÃO instalados)

> **Purpose**: Catálogo de upgrades quando as APIs gratuitas não bastarem. Todos exigem cadastro (free tier) — por decisão do dono, o stack padrão usa **apenas APIs livres de conta**. Este arquivo existe para o dia em que essa decisão mudar.

## Quando considerar

As APIs gratuitas cobrem: macro (BCB), Tesouro, cotações/histórico B3 (Yahoo), fundamentos (scraping), fundos (CVM), câmbio e cripto. Os MCPs abaixo agregam: dados estruturados sem scraping, screeners prontos, opções/derivativos, e menos fragilidade que o Yahoo não oficial.

## Mercado brasileiro

### brapi.dev MCP (o mais completo para B3)

- 56 tools: ações, FIIs, fundos, Tesouro, macro, opções, futuros
- Free tier: 15.000 req/mês, conta necessária (OAuth ou token)
- Config (em `investments-os/.mcp.json`):

```json
{
  "mcpServers": {
    "brapi": {
      "command": "npx",
      "args": ["mcp-remote", "https://brapi.dev/api/mcp/mcp"]
    }
  }
}
```

Docs: https://brapi.dev/docs/mcp

### bolsai-mcp

- 10 tools focadas em fundamentos: screener, comparação, 27 indicadores, demonstrações da CVM
- Free: 200 req/dia (histórico/dividendos só no Pro pago)
- Config: `uvx bolsai-mcp` + env `BOLSAI_API_KEY` (https://usebolsai.com/mcp)

## Mercado internacional

### Alpha Vantage MCP (oficial)

- Ações/ETFs globais, forex, cripto, fundamentos, indicadores técnicos, macro EUA
- Free: chave gratuita, ~25 req/dia (apertado; pago libera)
- Remote MCP: `https://mcp.alphavantage.co/mcp?apikey={KEY}`

### Financial Modeling Prep (FMP)

- 250+ tools, demonstrações completas, SEC filings — o mais profundo em fundamentos US
- Free tier limitado; relevante só se a carteira internacionalizar de verdade

## Regra de decisão

```text
Yahoo quebrou de vez OU análise exige screener/opções/dados estruturados frequentes?
├── Foco B3      → brapi MCP (free 15k/mês é folgado para uso pessoal)
├── Fundamentos  → bolsai (screener) como complemento
└── Internacional→ Alpha Vantage (free) → FMP (se precisar de filings)
```

Ao ativar qualquer um: criar `investments-os/.mcp.json`, adicionar o servidor, e atualizar a ordem de resolução no [index](../index.md) (MCP passa na frente do endpoint gratuito equivalente).

## Related

- [Index — ordem de resolução](../index.md)
- [Cotações B3 (o caminho gratuito atual)](b3-cotacoes.md)
