# Compensação de Prejuízos

> **Purpose**: Transformar prejuízo em crédito fiscal: regras, categorias e registro correto.
> **Source**: `../Tributação/Renda Variável.md`

## Regra central

Prejuízos em renda variável compensam **lucros futuros**, desde que:

1. **Mesma categoria** — day trade só com day trade; comum só com comum
2. **Mesmo CPF**
3. **Registrados** na declaração anual (é o que preserva o direito)

Não há prazo de validade: prejuízo registrado carrega indefinidamente.

## Exemplo

```text
Mês 1: prejuízo de R$ 1.000 em day trade
Mês 2: lucro de R$ 2.500 em day trade
→ compensa R$ 1.000 → base = R$ 1.500
→ IR: 20% × 1.500 = R$ 300
```

## Matriz de compensação

| Prejuízo em ↓ / Lucro em → | Ação comum | Ação DT | ETF comum | ETF DT | FII |
|---|---|---|---|---|---|
| Ação comum | ✔ | ✘ | ✔ | ✘ | ✘* |
| Ação day trade | ✘ | ✔ | ✘ | ✔ | ✘ |
| ETF comum | ✔ | ✘ | ✔ | ✘ | ✘* |
| FII | ✘* | ✘ | ✘* | ✘ | ✔ |

\* FII compensa apenas com FII (categoria própria). Operações comuns de ações/ETF/ouro/derivativos não-DT compõem o mesmo grupo "comum"; day trade é grupo à parte; FII é à parte.

## O que NÃO compensa

- Prejuízo com lucro **isento** (vendas ≤ R$ 20 mil): o lucro isento não paga IR e o prejuízo do mês isento **também não vira crédito** se realizado dentro da isenção — atenção: prejuízo em mês de vendas ≤ 20k **pode** ser registrado e compensado; o que não existe é compensar contra lucro isento
- Renda fixa (retida na fonte, sem mecanismo de compensação para PF)
- Prejuízo de CPF diferente (conta de cônjuge)

## Disciplina de registro

1. Planilha com prejuízo acumulado **por categoria**, atualizada na apuração mensal
2. Declaração anual: informar mês a mês na ficha de Renda Variável, inclusive meses de prejuízo
3. Nunca "zerar" prejuízo esquecendo de declará-lo — perde-se o crédito

## Uso estratégico (tax-loss harvesting)

Em dezembro, se há lucros tributáveis no ano e posições no vermelho **cuja tese já quebrou**, realizar o prejuízo reduz a base. Não vender posição boa só pelo imposto — o custo de recomprar (spread, timing) pode superar o benefício.

## Related

- [Apuração DARF](apuracao-darf.md)
- [IR Renda Variável](../concepts/ir-renda-variavel.md)
