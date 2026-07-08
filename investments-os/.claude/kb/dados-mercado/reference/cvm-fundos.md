# CVM Dados Abertos — Fundos

> **Purpose**: Dados oficiais e gratuitos de todos os fundos brasileiros: cadastro, cotas diárias, patrimônio, cotistas. A fonte para o fundos-analyst verificar o que a lâmina diz.
> **Verificado**: 2026-07-07 (HTTP 200; cad_fi.csv ~18 MB)

## Portal

`https://dados.cvm.gov.br/` — datasets em CSV, sem chave. **Arquivos grandes: baixar no scratchpad e filtrar com grep, nunca carregar inteiro.**

## Datasets principais

### Cadastro de fundos

```text
https://dados.cvm.gov.br/dados/FI/CAD/DADOS/cad_fi.csv        (~18 MB)
```

CNPJ, nome, classe, situação, administrador, gestor, taxa de administração/performance. Busca:

```bash
curl -sL "https://dados.cvm.gov.br/dados/FI/CAD/DADOS/cad_fi.csv" -o "$SCRATCHPAD/cad_fi.csv"
grep -i "nome do fundo" "$SCRATCHPAD/cad_fi.csv"
```

### Informe diário (cota, PL, captação, resgate, cotistas)

```text
https://dados.cvm.gov.br/dados/FI/DOC/INF_DIARIO/DADOS/inf_diario_fi_{AAAAMM}.zip
```

Um zip por mês (ex.: `inf_diario_fi_202606.zip`). Dentro: CSV com `CNPJ_FUNDO; DT_COMPTC; VL_QUOTA; VL_PATRIM_LIQ; CAPTC_DIA; RESG_DIA; NR_COTST`. Permite calcular **rentabilidade real do fundo** (série de cotas) e detectar **fuga de cotistas** (resgates líquidos).

### Outros úteis

| Dataset | Caminho | Uso |
|---------|---------|-----|
| Lâmina de fundos | `FI/DOC/LAMINA/DADOS/` | Taxas e condições declaradas |
| Composição de carteira (CDA) | `FI/DOC/CDA/DADOS/` | O que o fundo realmente tem (D-90) |
| FIIs — informes | `FII/DOC/INF_MENSAL/DADOS/` | Dados mensais dos fundos imobiliários |

## Fluxo típico do fundos-analyst

```text
1. cad_fi.csv       → CNPJ, taxa declarada, gestor, situação (grep pelo nome)
2. inf_diario zips  → série de cotas dos últimos 12–36 meses → retorno líquido real
3. Comparar retorno vs benchmark (CDI via BCB SGS 12) na mesma janela
4. NR_COTST/CAPTC   → tendência de captação (fuga = red flag)
```

## Caveats

- Dados D+1 a D+meses conforme o dataset (CDA tem defasagem de até 90 dias — proposital)
- Encoding latin-1 em alguns CSVs; separador `;`
- FIIs listados: dados de mercado (cotação) vêm do [Yahoo](b3-cotacoes.md); da CVM vêm os informes estruturais

## Related

- [Escolher Fundo](../../fundos/patterns/escolher-fundo.md)
- [Taxas](../../fundos/concepts/taxas.md)
