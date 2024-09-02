# react-native-user-listing

## React Native User Authentication and Listing App

Este projeto é um aplicativo móvel básico de autenticação de usuário e listagem, desenvolvido com React Native, TypeScript, styled-components, e react-navigation.

## Funcionalidades

- Tela de Login: Permite ao usuário fazer login utilizando email e senha.
- Listagem de Usuários: Após o login, o usuário autenticado pode visualizar uma lista de usuários cadastrados.
- Detalhes do Usuário: Ao clicar em um usuário na lista, os detalhes completos do usuário são exibidos.

## Estrutura do Projeto

- App.tsx: Contém o NavigationContainer e define as rotas principais do aplicativo.
- src/screens:
- LoginScreen.tsx: Tela de login que faz uma requisição POST para autenticação.
- HomeScreen.tsx: Tela que exibe a lista de usuários recuperados da API.
- UserDetailsScreen.tsx: Tela que exibe os detalhes de um usuário selecionado.
- src/navigation/types.ts: Define os tipos de rotas para o stack navigator.

## Tecnologias Utilizadas

- React Native: Framework principal para desenvolvimento do aplicativo.
- TypeScript: Para tipagem estática e prevenção de erros.
- styled-components: Para estilização dos componentes.
- react-navigation/native: Para navegação entre as telas.

## Instalação

1. Clone este repositório:

```bash
git clone https://github.com/AdevSantos/react-native-user-
```

2. Navegue até o diretório do projeto:

```bash
cd seu-repositorio
```

3. Instale as dependências:

```bash
npm install
```

4. Execute o aplicativo:

```bash
npx expo start
```

## Uso

1. Na tela de login, insira as credenciais:

- Email: eve.holt@reqres.in
- Senha: cityslicka

2. Navegue pela lista de usuários e clique em qualquer usuário para ver seus detalhes.

Este README fornece uma visão geral básica do aplicativo e de como configurá-lo. Você pode expandi-lo conforme necessário para incluir mais detalhes, como testes, configuração de ambiente, etc.
