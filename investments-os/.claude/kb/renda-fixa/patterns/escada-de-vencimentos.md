# Escada de Vencimentos (Laddering)

> **Purpose**: Distribuir renda fixa em vencimentos escalonados para equilibrar liquidez, taxa e risco de reinvestimento.
> **Source**: síntese das notas de Renda Fixa + prática de mercado (padrão complementar, não presente nas notas originais).

## O problema

- Tudo em liquidez diária → rende menos (prêmio de prazo perdido).
- Tudo em vencimento longo → sem liquidez e exposto a vender com deságio.
- Tudo vencendo na mesma data → risco de reinvestir tudo num momento ruim de juros.

## O padrão

Dividir o montante em faixas de vencimento escalonadas:

```text
Exemplo com R$ 60 mil (fora da reserva de emergência):

Degrau 1  → R$ 15 mil  CDB/LCA venc. 1 ano
Degrau 2  → R$ 15 mil  CDB/LCA venc. 2 anos
Degrau 3  → R$ 15 mil  Tesouro Prefixado/IPCA+ venc. 3 anos
Degrau 4  → R$ 15 mil  Tesouro IPCA+ venc. 5 anos

A cada vencimento: reinvestir no degrau mais longo (a escada "anda").
```

## Benefícios

- **Liquidez periódica** sem resgate antecipado (nunca vende com deságio)
- **Média de taxas**: reinveste em vários momentos do ciclo de juros
- **IR mínimo**: cada degrau ultrapassa 720 dias ao rolar → alíquota 15%
- Diversificação natural entre pré, pós e IPCA+ por degrau

## Regras de montagem

1. Reserva de emergência fica **fora** da escada (Tesouro Selic/CDB diário).
2. Degraus curtos (1–2 anos): CDB/LCI/LCA — comparar via [gross-up](comparacao-liquida-gross-up.md).
3. Degraus longos (3+ anos): priorizar IPCA+ (juro real garantido).
4. Respeitar limite FGC por instituição ao distribuir os degraus.
5. Metas com data certa têm degrau próprio casado com a data.

## Related

- [Escolher Título](escolher-titulo.md)
- [FGC](../concepts/fgc.md)
- [Alocação Três Baldes](../../carteira/patterns/alocacao-tres-baldes.md)
