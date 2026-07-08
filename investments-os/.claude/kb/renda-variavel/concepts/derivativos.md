# Derivativos

> **Purpose**: Contratos cujo valor deriva de outro ativo — para que servem e por que exigem experiência.
> **Source**: `../Renda Variável/Derivativos.md`

## Overview

Derivativo é um contrato financeiro atrelado a um **ativo-objeto** (ações, índices, moedas, commodities, juros). Você não compra o ativo, compra um instrumento cujo preço depende dele.

## Finalidades

1. **Hedge (proteção)**: travar preço futuro. Exportadora que teme queda do dólar vende dólar futuro.
2. **Especulação**: apostar em alta/queda com volatilidade.
3. **Alavancagem**: controlar posições grandes com pouco capital — amplifica lucro **e perda** (pode perder mais que o investido).

## Tipos

| Tipo | Mecânica | Observação |
|------|----------|------------|
| **Futuro** | Compra/venda em data futura, preço fixado hoje | Padronizado, bolsa; ajuste diário |
| **Opção** | **Direito** (não obrigação) de comprar (call) ou vender (put) a preço fixo | Prêmio pago; perda do comprador limitada ao prêmio |
| **Swap** | Troca de fluxos financeiros (pré ↔ CDI, dólar ↔ real) | Uso corporativo |
| **Termo** | Futuro personalizado fora de bolsa (OTC) | Sem padronização; risco de contraparte |

## Exemplo de hedge

```text
Exportadora receberá USD 1.000.000 em 3 meses. Dólar hoje: R$ 5,00.
Vende contratos futuros a R$ 5,00.
Dólar cai a R$ 4,80 → perde no câmbio à vista, ganha no futuro. Preço travado.
```

## Riscos

Alavancagem (perda > capital), liquidez variável por contrato, complexidade, e em geral **sem FGC nem garantia**. Perfil: investidores avançados, empresas com exposição real, traders experientes.

## Common Mistakes

### Errado

Começar em renda variável por opções/minicontratos "para acelerar os ganhos" — é a via mais rápida de zerar a conta.

### Correto

Dominar ações à vista primeiro; usar derivativo apenas com finalidade definida (hedge de posição real) e tamanho limitado.

## Related

- [Riscos](riscos.md)
- [Position Sizing](../../analise/patterns/position-sizing.md)
