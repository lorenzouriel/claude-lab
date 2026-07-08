# Escolher Título de Renda Fixa

> **Purpose**: Árvore de decisão para mapear objetivo + prazo + perfil → produto.
> **Source**: `../Renda Fixa/` (notas 0–7), `../Montando a Sua Carteira.md`

## Árvore de decisão

```text
Qual o objetivo do dinheiro?
│
├── RESERVA DE EMERGÊNCIA (liquidez imediata)
│   → Tesouro Selic ou CDB ≥100% CDI com liquidez diária
│   → NUNCA: prefixado, IPCA+ longo, LCI/LCA (carência), COE
│
├── META COM DATA (2–5 anos: viagem, carro, entrada de imóvel)
│   ├── Isento disponível pagando bem? → LCI/LCA com vencimento ≤ prazo da meta
│   ├── Quer travar taxa? → Tesouro Prefixado ou CDB pré com vencimento = prazo
│   └── Meta longa e medo de inflação? → Tesouro IPCA+ vencimento ≈ prazo
│   Regra: vencimento do título ≤ data da meta. Diversificar pré/pós/IPCA.
│
├── LONGO PRAZO (aposentadoria, >5 anos)
│   ├── Núcleo: Tesouro IPCA+ longo (2035/2045/2055) — juro real garantido
│   ├── Satélite: debêntures incentivadas (isentas, sem FGC → exige rating)
│   └── Complemento: CDBs longos de bancos sólidos
│
└── DIVERSIFICAÇÃO EXÓTICA
    → COE só se: entendeu o payoff, aceita ganho zero, não precisa de liquidez.
      Em regra, uma combinação própria de renda fixa + opção do próprio
      investidor replica o COE com menos custo.
```

## Passos

1. **Prazo**: quando o dinheiro será usado? Casar vencimento com a data.
2. **Liquidez**: pode precisar antes? → só pós-fixado com liquidez diária.
3. **Tributação**: comparar líquido — usar [gross-up](comparacao-liquida-gross-up.md) entre isentos e tributados.
4. **Risco de crédito**: tem FGC? Dentro do limite de R$ 250 mil por instituição? Sem FGC → checar rating.
5. **Inflação**: prazo >3 anos sem indexação a IPCA = risco de perder poder de compra.

## Red flags

- Rentabilidade muito acima do mercado sem explicação → risco de crédito escondido
- Poupança para qualquer coisa além de reserva imediata de pequeno valor
- COE oferecido pelo gerente sem termo de emissão lido
- Prefixado longo para dinheiro que pode ser sacado antes

## Related

- [Comparação Líquida](comparacao-liquida-gross-up.md)
- [Escada de Vencimentos](escada-de-vencimentos.md)
- [Alocação Três Baldes](../../carteira/patterns/alocacao-tres-baldes.md)
