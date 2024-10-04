# Lefthook

**Esse projeto frontend com Angular foi configurado com Lefthook para realizar tarefas de desenvolvimento nessas etapas:**

### Ao escrever uma mensagem no código:
- verificar se a mensagem se adequa ao padrão do commitlint.

### Ao realizar um commit:
- rodar lint para formatar e verificar código alterado;
- rodar build;
- rodar testes unitários.

### Ao realizar um push:
- rodar lint para formatar e verificar código alterado;
- rodar build;

### Arquivo lefthook

O arquivo lefthook contém toda a configuração para todos os hooks do git rodarem determinados processos, como mensagem de commit, commit e push. O arquivo é `lefthook.yml`.

### Arquivo BiomeJS

O arquivo biome configura todas as formatações e linters que serão executados no projetos e para quais arquivos, seguindo padrãos definidos que podem ser modificação para uma grande possibilidade de linguagens.

[Configuração do lefthook](https://github.com/evilmartians/lefthook/blob/master/docs/configuration.md)
[Configuração do biome](https://biomejs.dev/guides/configure-biome/)

### colors

Padrão: auto

Se habilitar ou desabilitar a saída colorida do Lefthook. Esta opção pode ser substituída por --colorsoption. Você também pode fornecer seus próprios códigos de cores.

### output

Você pode gerenciar a verbosidade usando a `output` configuração. Você pode especificar o que imprimir em sua saída definindo esses valores, que você precisa ter. Os valores possíveis são meta,summary,success,failure,execution,execution_out,execution_info,skips. Por padrão, todos os valores de saída são habilitados

### source_dir

Padrão: .lefthook

Alterar um diretório para arquivos de script. O diretório para arquivos de script contém pastas com nomes de hooks do git que contêm arquivos de script.

Exemplo de árvore de diretórios:

```
.lefthook/
├── pre-commit/
│   ├── lint.sh
│   └── test.py
└── pre-push/
    └── check-files.rb
```

### parallel

Padrão: false

Observação: O Lefthook executa comandos e scripts sequencialmente por padrão.

Execute comandos e scripts simultaneamente.

### piped

Padrão: false

Observação: Lefthook retornará um erro se ambos piped: truee parallel: trueestiverem definidos.

Pare de executar comandos e scripts se um deles falhar.

# scripts

Scripts a serem executados para o hook. Cada script tem um nome (nome do arquivo no diretório scripts) e opções de execução associadas .

Importante: O script deve existir na <source_dir>/<git-hook-name>/pasta. Veja source_dir.

Estrutura correta das pastas:

```
.lefthook/
└── pre-commit/
    └── lint.sh
```
