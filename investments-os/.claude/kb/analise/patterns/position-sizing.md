# Position Sizing

> **Purpose**: Dimensionar posições pelo risco, não pela convicção — a regra que mantém o investidor no jogo.
> **Source**: prática consolidada de skills de trading (risk-based position sizer, drawdown circuit breaker); complementa as notas de estratégias.

## Para trades (swing/day) — regra do risco fixo

```text
1. Definir risco por trade: 1–2% do capital DA ESTRATÉGIA (não do patrimônio total)
2. Definir stop ANTES da entrada (nível que invalida o setup)
3. Tamanho = (Capital × %risco) ÷ (Entrada − Stop)

Exemplo:
  Capital de trading: R$ 50.000 | risco 1% = R$ 500
  Entrada R$ 20,00 | stop R$ 18,00 → risco R$ 2,00/ação
  Tamanho: 500 ÷ 2 = 250 ações (posição de R$ 5.000)
```

A posição varia com a distância do stop: stop apertado permite posição maior com o **mesmo risco**; convicção não entra na fórmula.

## Circuit breaker (limite de perda)

```text
Perda no dia   ≥ 2–3% do capital de trading → parar de operar HOJE
Perda no mês   ≥ 6–8%                        → parar no mês; revisar processo
3 stops seguidos                             → pausa obrigatória + revisão dos setups
```

Automatizar a regra por escrito — na hora, a emoção sempre vota por "recuperar".

## Para carteira de longo prazo — limites de concentração

| Item | Limite sugerido |
|------|-----------------|
| Uma ação | ≤ 10% da carteira de RV (5–10 papéis) |
| Um setor | ≤ 25–30% da RV |
| Um FII | ≤ 10% do bloco de FIIs |
| Um emissor bancário (RF) | ≤ R$ 250 mil (FGC) |
| Satélite especulativo | ≤ 10–20% do patrimônio investível |

## Piramidação e médio

- **Aumentar posição vencedora** (piramidação): só com novo setup válido e stop reposicionado — nunca "porque está subindo"
- **Preço médio em queda**: só em tese fundamentalista **revalidada** após a queda; em trade, nunca — queda contra a posição = stop, não desconto

## Common Mistakes

### Errado

Posição dimensionada pela "certeza" da tese; all-in em uma oportunidade; aumentar tamanho após sequência de perdas para "recuperar rápido" (martingale).

### Correto

Fórmula fria: risco fixo por operação, limites de concentração por camada, circuit breaker escrito e obedecido.

## Related

- [Análise Técnica](../../renda-variavel/patterns/analise-tecnica.md)
- [Estratégias de Investimento](../../renda-variavel/patterns/estrategias-de-investimento.md)
- [Diversificação](../../carteira/concepts/diversificacao.md)
