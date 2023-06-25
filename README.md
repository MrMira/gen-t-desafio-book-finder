# Desafio Book Finder da Gen-t

Aplicação front-end montada utilizando-se do framework Vue 3 pelo Vite e acesso a API Google Books para fazer a listagem de livros a partir do fornecimento de um termo de busca.

## Configuração e Instalação
Basta fazer o clone do projeto no computador e ter instalado o Node e o yarn. Entrar dento da pasta e rodar o comando `yarn` para instalar as dependências e por fim `yarn dev` para rodar a aplicação em ambiente de desenvolvimento.

## Funcionalidades da Aplicação
1. Buscar por livros a partir de um termo de pesquisa.
2. Exibição dos seguintes campos dos livros (título, autores, data de publicação, foto da capa do livro, link de preview do livro).
3. Caso não seja informado um termo de busca, o sistema irá mostrar uma mensagem.
4. Enquanto a busca está sendo feito, é exibido uma animação de carregamento na tela.
5. Caso aconteça algum erro ao tentar fazer a busca na API o sistema irá mostrar uma mensagem.
6. Caso o sistema não encontre nenhum livro, será mmostrado uma mensagem.
7. O site foi adaptado para mobile através da abordagem 'mobile-first', ou seja, a folha de estilo padrão é feita para mobile, e é utilizado 'media queries' para adaptar o layout para tablets e desktops.

## Próximos Passos
- [ ] Acrescentar um botão ao final da listagem dos livros para que a pessoa consiga ver a próxima página da listagem (não olhei essa parte).