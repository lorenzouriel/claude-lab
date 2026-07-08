# Valuation

> **Purpose**: Estimar o valor justo de um ativo por múltiplos comparáveis e DCF simplificado — com cenários, nunca número único.
> **Source**: expansão das notas (`Ações.md` cita valuation em IPO) com metodologia padrão de mercado (DCF, comparáveis).

## Método 1 — Múltiplos comparáveis

Comparar a empresa com pares do setor e com a própria história:

```text
1. Selecionar 3–5 pares listados do mesmo setor
2. Levantar P/L, EV/EBITDA, P/VPA dos pares → mediana
3. Aplicar a mediana ao lucro/EBITDA/patrimônio da empresa analisada
4. Comparar também com a média histórica (5a) da própria empresa
```

Rápido e ancorado no mercado; mas se o setor inteiro está caro, o múltiplo "justo" está inflado.

## Método 2 — DCF simplificado (Fluxo de Caixa Descontado)

Valor = soma dos fluxos de caixa futuros trazidos a valor presente:

```text
1. FCL médio dos últimos 3–5 anos (fluxo de caixa livre normalizado)
2. Projetar crescimento g por 5–10 anos (conservador: ≤ PIB nominal + pouco)
3. Taxa de desconto r = taxa livre de risco (Tesouro longo) + prêmio de risco
   (no Brasil: IPCA+ longo já dá o piso real; prêmio 4–6 p.p. para ações)
4. Perpetuidade: valor terminal = FCL_final × (1+g_perp) ÷ (r − g_perp), g_perp ≤ inflação
5. Somar VPs + valor terminal descontado → dividir pelo nº de ações
```

**Regra de ouro**: rodar 3 cenários (pessimista/base/otimista). Se a compra só faz sentido no otimista, não há margem de segurança.

## Método 3 — Perpetuidade de proventos (renda: dividendos/FIIs)

```text
Preço teto = provento anual sustentável ÷ taxa exigida
Ex.: FII paga R$ 10/cota/ano sustentável; exigo 10% a.a. → teto R$ 100
```

Simples e robusto para ativos de renda estável; inútil para empresas de crescimento.

## Margem de segurança

Comprar apenas com desconto sobre o valor estimado (20–30% típico). A margem absorve erros de premissa — e as premissas **sempre** têm erro.

## Common Mistakes

### Errado

DCF com crescimento de 15% a.a. por 10 anos (quase nada cresce assim); perpetuidade com g ≥ r (matematicamente explode); tratar o resultado como preço-alvo preciso.

### Correto

Premissas conservadoras, 3 cenários, margem de segurança, e comparar os métodos entre si — se múltiplos e DCF divergem muito, entender por quê antes de agir.

## Related

- [Indicadores Fundamentalistas](indicadores-fundamentalistas.md)
- [Checklist Análise de Ação](../patterns/checklist-analise-acao.md)
- [Checklist Análise de FII](../patterns/checklist-analise-fii.md)
