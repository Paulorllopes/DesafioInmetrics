Feature: Login
Funcionalidade para realizar todo o fluxo ate inserir produto no carrinho

Scenario: Efetuar login
Given eu acesse a pagina de login
When eu prencher os campos usuario e senha
And clicar no botao de login
Then entao valido o login com sucesso

Scenario: buscar produto
Given clicar na pagina de produtos
When pesquisar o produto
Then valido ele na tela

Scenario: incluir produto no carrinho
Given acessar a pagina produto
When encontrar o produto desejado
And clicar no botao para adicionar o produto no carrinho
Then entao valido que o produto se encontra no carrinho

Scenario: validar que estou na tela de pagamento
Given incluir produtos no carrinho
When quando acessar a tela de pagamento
Then validar que estou na tela pagamento






