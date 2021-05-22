# forms_testing
---
## O que é
---
 * Este projeto é uma demonstração da integração entre cypress e cucumber para testar um simples cadastro de usuários com os campos "Nome" e "Email";
---
## Passos para rodar o projeto
---
 * Primeiro baixe o projeto e rode "npm install" para baixar todas as dependências;
 * Abra o arquivo "./cypress.json" e modifique a "baseUrl" para a sua url;
 * Abra o arquivo "./cypress/support/pages/Usuarios.js" e adicione os Seletores da página dentro do construtor da classe;
 * Abra o arquivo "./cypress/integration/feature/Cadastro/Cadatro.feature" e adicione os valores na tabela "Examples";
 * Para rodar o teste com o "Test Runner" abra o terminal na raiz do projeto e digite "npm run cypress:open";
 * Para rodar o teste em "headless mode" abra o terminal na raiz do projeto e digite "npm run cypress:run";
---
## Contato
---
 * Para qualquer dúvida, sugestão ou opinião por favor entre em contato pelo meu [perfil do LinkedIn](https://www.linkedin.com/in/rafael-muniz-vieira-b4239751/) <- Click Me =D