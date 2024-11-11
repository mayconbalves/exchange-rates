# Exchange rates

## Instruções de como rodar o projeto ou [acesse aqui.](https://caju-mauve.vercel.app/#/dashboard)

### Faça o clone do projeto:

```shell
https://github.com/mayconbalves/exchange-rates
```

### Use nvm para usar a versão do nodejs

```shell
nvm use
Ou instale o nodejs na versão 20.15.0
```

### Instale as dependências usando `yarn` ou `npm`

```shell
yarn ou npm i
```

### Rodando o projeto

```shell
yarn dev
```

### Rodando o json server com o mock da API

```shell
yarn init:db
```

### Se for usar o mock, mude a url no arquivo src/services/rates

```shell
http://localhost:3000/
```

## API

Você consumirá uma API mockada localmente, que será executada utilizando o json-server. Para mais informações consulte a [documentação](https://github.com/typicode/json-server/).

Exemplo de Requisição:

```
get http://localhost:3000/
Content-Type: application/json
{
  "success": true,
  "timestamp": 1731117962,
  "base": "EUR",
  "date": "2024-11-09",
  "rates": {
    "AED": 3.938479,
    "AFN": 73.284283,
    "ALL": 98.19234,
    [...]
  }
}
```

### Rodando storybook

```shell
yarn storybook
```

### Rodando os testes

```shell
yarn test
```

### Rodando os testes em modo watch

```shell
yarn test:watch
```

### Vendo o coverage

```shell
yarn test:coverage
```

<img width="812" alt="Captura de Tela 2024-10-24 às 21 07 23" src="https://github.com/user-attachments/assets/064d482f-6c22-4c1b-a0a8-0042b4d20b08">
<br />

Se tudo ocorreu bem os seguintes serviços estarão disponiveis em:
<br/>

Aplicação http://localhost:3001/
<br/>
Json Web Server http://localhost:3000/

## Apresentanção do problema

O desafio é criar uma tabela com 3 dados Moeda, valor e horário.

## Especificações

- ✅ Consumir a API exchangeratesapi
- ✅ Construir a tabela com os valores
- ✅ Adicionar um icone no header da tabela para ordenar a tabela
- ✅ Criar testes unitários cobrir mais de 60% do código

## Extras (opcional)

- ✅ Paginação
- ✅ Adicionado um botão para atualizar os dados
- ✅ Adicionado um load em toda requisição
- ✅ Adicionado um toast de erro ou de sucesso
- ✅ Storybook
- ✅ Configuração de CI/CD com deploy automatizado
- ✅ Utilizar css module

## HomePage
