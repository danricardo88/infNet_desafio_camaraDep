# SPA para exibir dados de parlamentares por partido

Este é um aplicativo de página única (SPA) que permite selecionar um partido político em uma caixa de seleção e, ao selecioná-lo, exibir os dados de todos os seus parlamentares da atual legislatura. Os dados dos partidos e dos parlamentares são obtidos através da API, consumidos em JSON.

## Tecnologias utilizadas

- React.js: para construir a interface do usuário.
- HTML e CSS: para estilizar a interface do usuário.
- JavaScript: para manipular os dados da API.

## Como usar

Clone este repositório e execute `npm install` para instalar as dependências. Em seguida, execute `npm start` para iniciar a aplicação.

## Arquivos importantes

- `PartySelector.js`: componente principal que contém a lógica para selecionar o partido e exibir a lista de parlamentares.
- `Parliamentarians.js`: componente filho que contém a lógica para obter e exibir a lista de parlamentares do partido selecionado.

## Atenção

Este aplicativo depende da disponibilidade da API para funcionar corretamente. Caso haja instabilidade na API, a aplicação pode não funcionar como esperado.
