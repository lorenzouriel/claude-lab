# Tesouro Transparente — Preços e Taxas do Tesouro Direto

> **Purpose**: Fonte oficial e gratuita dos preços/taxas de todos os títulos do Tesouro Direto, histórico completo desde 2002.
> **Verificado**: 2026-07-07 (endpoint respondendo; arquivo grande)

## Endpoint

```text
GET https://www.tesourotransparente.gov.br/ckan/dataset/df56aa42-484a-4a59-8184-7676580c81e3/resource/796d2059-14e9-44e3-80c9-2d9e30b405c1/download/PrecoTaxaTesouroDireto.csv
```

- CSV separado por `;`, decimal com vírgula, datas DD/MM/AAAA
- Colunas: `Tipo Titulo; Data Vencimento; Data Base; Taxa Compra Manha; Taxa Venda Manha; PU Compra Manha; PU Venda Manha; PU Base Manha`
- **Arquivo com histórico completo (grande)** — baixar no scratchpad e filtrar; nunca ler inteiro

## Uso correto

```bash
# Baixar uma vez por sessão
curl -sL -H "User-Agent: Mozilla/5.0" "<URL acima>" -o "$SCRATCHPAD/tesouro.csv"

# Taxas mais recentes (o CSV é aproximadamente cronológico — pegar o fim)
tail -50 "$SCRATCHPAD/tesouro.csv"

# Um título específico, últimos registros
grep "Tesouro IPCA+ 2045" "$SCRATCHPAD/tesouro.csv" | tail -5
```

> A "Data Base" mais recente do arquivo é o pregão mais atual disponível — citar essa data, não a de hoje.

## O que responde

- Taxa atual de compra/venda de cada título (Prefixado, IPCA+, Selic, com/sem juros semestrais)
- Preço unitário (PU) — base da marcação a mercado
- Histórico de taxas → contexto ("IPCA+ 2045 pagava 5,5% há 6 meses, hoje paga X")

## Fallbacks

1. Portal de busca: https://www.tesourotransparente.gov.br/ckan/dataset (buscar "Preços e taxas Tesouro Direto") — o resource ID pode mudar em reestruturações
2. WebSearch "taxa tesouro ipca+ hoje" + site oficial tesourodireto.com.br (a API JSON antiga `treasurybondsinfo.json` foi **desativada** — não usar)

## Datasets irmãos úteis (mesmo portal CKAN)

| Dataset | Conteúdo |
|---------|----------|
| Vendas do Tesouro Direto | O que os investidores estão comprando |
| Estoque do Tesouro Direto | Posição agregada por título |
| Recompras | Resgates antecipados |

## Related

- [Tesouro Direto (conceito)](../../renda-fixa/concepts/tesouro-direto.md)
- [Escolher Título](../../renda-fixa/patterns/escolher-titulo.md)
