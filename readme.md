
# Nodejs Typescript Knex - POC

<p  align="center">
<a  href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a  href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a  href="#-scripts">Scripts</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a  href="#-licença">Licença</a>
</p>


## 💻 Projeto
  

Este projeto é uma aplicação nodejs, typescript and knext, uma poc para validação de uso do knex, testado e utilizado tamb~em estrutura de camadas.
Arquitetura em camadas:

- **src/**
  - **application/**: Camada de aplicação, responsável por orquestrar as operações da aplicação.
  - **domain/**: Camada de domínio, contendo as entidades e regras de negócio da aplicação.
  - **infrastructure/**: Camada de infraestrutura, responsável por detalhes técnicos como acesso ao banco de dados, comunicação com APIs externas, etc.
  - **interfaces/**: Interfaces utilizadas pelas diferentes camadas.
  - **utils/**: Utilitários e funções auxiliares.
  - **index.ts**: Arquivo principal que inicializa o servidor.



## 🧪 Tecnologias

O projeto foi desenvolvido usando as seguintes tecnologias:


[![Static Badge](https://img.shields.io/badge/-Nodejs-green?style=for-the-badge)](https://nodejs.org/en) [![Static Badge](https://img.shields.io/badge/-Expressjs-gray?style=for-the-badge)](https://expressjs.com/pt-br/) [![Static Badge](https://img.shields.io/badge/-Typescript-blue?style=for-the-badge)](https://www.typescriptlang.org/) [![Static Badge](https://img.shields.io/badge/-Knexjs-darkblue?style=for-the-badge)](https://knexjs.org/)



## 📝 Scripts
Instale as dependências.

```bash

$ yarn

```

  
Para executar o projeto rode o comando abaixo.

```bash

$ yarn dev

```
  
Para criar o build de produção.

```bash

$ yarn build

```



## 📝 Licença 
 

This project is licensed under the MIT License. See the [LICENSE](LICENSE.md) file for details.

  ---


<p  align="center">Made with 💜 by <a  href="https://github.com/hog099"  target="_blank">Hudson Oliveira Ginelli</a></p>