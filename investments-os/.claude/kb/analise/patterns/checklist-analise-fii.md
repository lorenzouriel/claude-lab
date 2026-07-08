# Checklist — Análise de FII

> **Purpose**: Avaliar Fundos Imobiliários: renda sustentável, qualidade dos ativos e preço sobre o patrimônio.
> **Source**: expansão de `../Fundos de Investimento/` e `../Tributação/Fundos.md` com prática de análise de FIIs.

## Tipos primeiro (das notas: renda "GR" e crescimento "CP")

| Tipo | O que tem | Perfil de retorno |
|------|-----------|-------------------|
| **Tijolo** | Imóveis físicos (lajes, shoppings, galpões, agências) | Renda de aluguel + valorização |
| **Papel** | CRIs/recebíveis indexados a CDI/IPCA | Renda alta, sem valorização de imóvel |
| **Fundo de fundos (FOF)** | Cotas de outros FIIs | Diversificação, dupla taxa |
| **Híbrido** | Mistura | — |

## Checklist

### Renda

- [ ] **Dividend yield 12m** vs média dos FIIs do mesmo tipo — DY muito acima dos pares = investigar o porquê
- [ ] Rendimento é **recorrente** (aluguel/juros) ou inflado por venda de ativo/lucro não recorrente?
- [ ] Papel: indexador dos CRIs (CDI cai → rendimento cai) e inadimplência da carteira

### Qualidade dos ativos

- [ ] **Vacância física e financeira** (tijolo): tendência e vs mercado da região
- [ ] Concentração: % do maior inquilino/imóvel/CRI (ideal: nenhum >20–25%)
- [ ] Localização e padrão dos imóveis; contratos típicos vs atípicos e vencimentos
- [ ] Papel: LTV das garantias, rating dos devedores

### Preço

- [ ] **P/VP**: cota em bolsa ÷ valor patrimonial. ~1 = par; <0,9 = desconto (por quê?); >1,15 = prêmio (justificado?)
- [ ] [Perpetuidade](../concepts/valuation.md): provento mensal sustentável × 12 ÷ taxa exigida ≥ preço da cota?
- [ ] Taxa exigida coerente: ≥ IPCA+ longo do Tesouro + prêmio de risco (senão, Tesouro paga o mesmo sem risco)

### Estrutura

- [ ] ≥ 50 cotistas e negociação exclusiva em bolsa (**condições da isenção de IR** do rendimento)
- [ ] Liquidez diária de negociação suficiente para a posição
- [ ] Taxas de administração/gestão vs pares; gestora com histórico

## Tributação (lembrete)

Rendimento mensal: **isento** (condições acima). Venda de cota com lucro: **20%, DARF, sem isenção** de R$ 20 mil ([detalhe](../../tributacao/concepts/ir-fundos-come-cotas.md)).

## Red flags

- DY "de vitrine" sustentado por amortização de capital (devolvendo seu próprio dinheiro)
- Vacância crescente com P/VP de par
- FOF com taxa alta sobre fundos que você poderia comprar direto
- Emissões seguidas abaixo do VP diluindo cotistas

## Related

- [Valuation](../concepts/valuation.md)
- [IR Fundos](../../tributacao/concepts/ir-fundos-come-cotas.md)
- [Diversificação](../../carteira/concepts/diversificacao.md)
