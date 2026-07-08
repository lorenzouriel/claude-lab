# BCB — SGS e Focus

> **Purpose**: A fonte primária de macro brasileira: taxas oficiais (SGS) e expectativas de mercado (Focus). Gratuito, sem chave, oficial.
> **Verificado**: 2026-07-07 (todos os endpoints respondendo)

## SGS — Sistema Gerenciador de Séries Temporais

```text
GET https://api.bcb.gov.br/dados/serie/bcdata.sgs.{CODIGO}/dados/ultimos/{N}?formato=json
GET https://api.bcb.gov.br/dados/serie/bcdata.sgs.{CODIGO}/dados?formato=json&dataInicial=DD/MM/AAAA&dataFinal=DD/MM/AAAA
```

Resposta: `[{"data":"DD/MM/AAAA","valor":"14.25"}]`

### Códigos das séries principais

| Código | Série | Unidade |
|--------|-------|---------|
| **432** | Meta Selic (COPOM) | % a.a. |
| 11 | Selic diária efetiva | % a.d. |
| **12** | CDI (DI) diário | % a.d. |
| 4389 | CDI anualizado base 252 | % a.a. |
| **433** | IPCA variação mensal | % a.m. |
| **13522** | IPCA acumulado 12 meses | % |
| 189 | IGP-M variação mensal | % a.m. |
| **1** | Dólar comercial venda (PTAX) | R$ |
| 21619 | Euro venda | R$ |
| 196 | Poupança rentabilidade mensal (regra atual) | % a.m. |

> Códigos menos comuns: buscar em https://www3.bcb.gov.br/sgspub (catálogo oficial) antes de chutar.

### Exemplos

```bash
# Selic meta agora
curl -s "https://api.bcb.gov.br/dados/serie/bcdata.sgs.432/dados/ultimos/1?formato=json"
# IPCA mensal dos últimos 12 meses
curl -s "https://api.bcb.gov.br/dados/serie/bcdata.sgs.433/dados/ultimos/12?formato=json"
```

## Focus — Expectativas de Mercado (Olinda/OData)

Consenso dos economistas (relatório Focus semanal): o que o mercado **espera** para IPCA, Selic, câmbio, PIB.

```text
GET https://olinda.bcb.gov.br/olinda/servico/Expectativas/versao/v1/odata/{RECURSO}?$filter=...&$format=json
```

Recursos úteis:

| Recurso | Conteúdo |
|---------|----------|
| `ExpectativasMercadoAnuais` | IPCA/Selic/câmbio/PIB esperados por ano-calendário |
| `ExpectativaMercadoMensais` | Expectativas mensais |
| `ExpectativasMercadoTop5Anuais` | Top 5 instituições mais acertivas |

Exemplo (Selic esperada, últimas projeções):

```bash
curl -s "https://olinda.bcb.gov.br/olinda/servico/Expectativas/versao/v1/odata/ExpectativasMercadoAnuais?%24top=5&%24filter=Indicador%20eq%20%27Selic%27&%24orderby=Data%20desc&%24format=json"
```

> Encodar `$` como `%24` e aspas simples como `%27` na URL. Campo `Mediana` é o headline do Focus.

## Uso pelos agentes

- **Fato vs expectativa**: SGS = dado realizado; Focus = consenso projetado. Nunca apresentar Focus como fato — atribuir ("mediana Focus de DD/MM").
- CDI diário precisa de anualização (fórmula no [quick-reference](../quick-reference.md)).
- Datas em DD/MM/AAAA.

## Related

- [Quick Reference](../quick-reference.md)
- [Inflação e Juro Real](../../renda-fixa/concepts/inflacao-e-juro-real.md)
