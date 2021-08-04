# Desafrio-FrontEnd-Confere
Desafio FrontEnd Confere Cartões

Aplicação realizada em React.js e publicada no link: desafiofrontendconfere.netlify.app para avaliação da sua 
usabilidade, e para rodar em localHost utilizar "npm start" após instalar as dependências do npm.
Todo o código possui comentários para o fácil entendimento de suas funcionalidades.

A aplicação está dividida em 6 partes:
- Public, página renderizada pública, com index.html e style.css(global).
- Raiz, que possui o APP.js qual envia todos os componentes para serem renderizado no index.js que por sua vez envia para o public.
- Services, que contêm StorageService , possuem a função de trabalhar a alocação dos dados dos produtos no localStorage e o CartService que criam 
as funções do uso do LocalStorage com o objetivo de adicionar os produtos na Pagina do carrinho.
- Pages, tem a função de absorver todos os componentes para poder criar rotas e renderizar suas respectivas páginas dentro de APP. Como o PageCart(página 
no carrinho) e PageStore(página da loja).
- Data, recebe o db.json, base de dados dos produtos fornecidos pela Confere.
- Componentes, pasta com todos os componentes funcionais da aplicação, sendo Product(possui todas as lógicas do card dos produtos), NumberCart(lógica para 
aparecer a quantidade de produtos no ícone carrinho ainda na PageStore), Header(Componentes da parte superior da página), Footer(componentes da página 
inferior da página) e Body(renderização da lista de produtos).

