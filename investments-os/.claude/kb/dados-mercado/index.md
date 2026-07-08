# Dados de Mercado

> Catálogo de APIs **100% gratuitas e sem chave/conta** que os agentes usam para buscar dados atuais — a camada que tira o sistema da cegueira de dados.

## Ordem de resolução de dados (obrigatória)

```text
1. API GRATUITA deste catálogo  → dado estruturado, com data, via WebFetch/curl
2. WebSearch                     → só quando nenhuma API cobre (notícias, fatos relevantes)
3. NUNCA memória/KB              → para valores atuais (Selic, CDI, IPCA, cotações)
```

Todo dado citado carrega **fonte + data**.

## Referências

- [BCB — SGS e Focus](reference/bcb.md) — Selic, CDI, IPCA, IGP-M, PTAX, poupança + expectativas de mercado (Focus)
- [Tesouro Transparente](reference/tesouro-transparente.md) — preços e taxas históricos de todos os títulos do Tesouro Direto
- [Cotações B3](reference/b3-cotacoes.md) — ações, FIIs, ETFs via Yahoo Finance (não oficial) + fundamentos via Fundamentus/StatusInvest (scraping)
- [CVM Dados Abertos](reference/cvm-fundos.md) — cadastro e informes diários de fundos, documentos de FIIs
- [Câmbio e Cripto](reference/cambio-cripto.md) — AwesomeAPI (moedas em tempo real), CoinGecko (cripto)
- [MCPs Opcionais](reference/mcps-opcionais.md) — brapi, bolsai, Alpha Vantage: mais ricos, mas exigem conta — **não instalados por padrão**

## Status de verificação

Endpoints testados em **2026-07-07** (todos respondendo, exceto onde marcado). Se um endpoint falhar: tentar o alternativo listado no arquivo da fonte; persiste → WebSearch e avisar que a fonte caiu.

## Quem usa o quê

| Agente | Fontes principais |
|--------|-------------------|
| renda-fixa-analyst | BCB SGS (CDI/Selic/IPCA), Tesouro Transparente |
| acoes-analyst | Yahoo (cotações/histórico), Fundamentus/StatusInvest (fundamentos) |
| fundos-analyst | CVM Dados Abertos, Yahoo (FIIs/ETFs) |
| market-researcher | BCB SGS + Focus, AwesomeAPI, Yahoo (índices) |
| portfolio-architect | BCB SGS (taxas para projeções), Yahoo (marcação da carteira) |
