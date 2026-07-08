# Renda Fixa — Quick Reference

## Comparativo de produtos

| Produto | Emissor | Remuneração | Liquidez | FGC | IR | Indicação |
|---------|---------|-------------|----------|-----|----|-----------|
| Tesouro Selic | Governo | Pós (Selic) | Diária | Não (risco soberano) | Regressivo | Reserva de emergência |
| Tesouro Prefixado | Governo | Pré | Diária (marcação a mercado) | Não | Regressivo | Meta com prazo definido |
| Tesouro IPCA+ | Governo | Híbrido (IPCA + taxa) | Diária (marcação a mercado) | Não | Regressivo | Longo prazo, proteção inflação |
| Poupança | Banco | 0,5% a.m. + TR (Selic > 8,5%) ou 70% Selic + TR | Mensal (aniversário) | Sim | **Isento** | Evitar; só reserva imediata |
| CDB | Banco | Pré, pós (% CDI) ou híbrido | Conforme emissão (há liquidez diária) | Sim | Regressivo | Reserva e metas |
| LCI / LCA | Banco | Pré, pós ou híbrido | Carência ≥ 90 dias | Sim | **Isento (PF)** | Médio prazo (3m–2a) |
| Debênture | Empresa | Pré, pós ou híbrido | Baixa (mercado secundário) | **Não** | Regressivo (incentivada: **isenta**) | Moderado/arrojado, prazo longo |
| COE | Banco | Condicional (payoff por cenário) | Só no vencimento | **Não** | Regressivo | Diversificação, ganho pode ser nulo |

## Números-chave (mecânica — confirmar valores atuais)

| Item | Regra |
|------|-------|
| FGC | R$ 250 mil por CPF **e por instituição**; teto global R$ 1 mi a cada 4 anos |
| Poupança | Selic > 8,5% a.a. → 0,5% a.m. + TR; Selic ≤ 8,5% → 70% da Selic + TR |
| CDI | Anda colado na Selic; "CDB 110% do CDI" = 1,1 × CDI |
| IR regressivo | 22,5% (≤180d) → 20% (≤360d) → 17,5% (≤720d) → 15% (>720d) |
| IOF | Regressivo diário 96% → 0% do rendimento; zera no 30º dia |
| Tesouro Direto | Fração mínima 0,01 do título (mín. R$ 30); taxa B3 de custódia a.a. |
| Juro real | ≈ nominal − inflação (exato: (1+nominal)/(1+inflação) − 1) |

## Decisões rápidas

| Situação | Escolha padrão |
|----------|----------------|
| Reserva de emergência | Tesouro Selic ou CDB ≥100% CDI liquidez diária |
| Meta 3m–2a, sem precisar do dinheiro antes | LCI/LCA (isenta) se bater CDB líquido |
| Proteção contra inflação, >5 anos | Tesouro IPCA+ (levar até o vencimento) |
| Mais retorno, aceita risco de crédito | Debênture incentivada (isenta, sem FGC — checar rating) |
| Produto complexo com ganho condicionado | COE — em regra, evitar; entender o payoff antes |

## Riscos por produto

- **Soberano**: Tesouro (menor risco de crédito do país)
- **Bancário**: CDB/LCI/LCA/Poupança — mitigado pelo FGC até o limite
- **Corporativo**: Debêntures — sem FGC; avaliar rating (Moody's, S&P, Fitch)
- **Marcação a mercado**: Prefixado e IPCA+ oscilam antes do vencimento; venda antecipada pode dar prejuízo
