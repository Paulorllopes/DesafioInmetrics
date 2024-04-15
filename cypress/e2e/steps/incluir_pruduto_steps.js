///<reference types="cypress"/>
import IncluirProdutoPage from "../pages/incluir_produto_page";
const incluirProdutoPage = new IncluirProdutoPage


Given(/^acessar a pagina produto$/, () => {

  incluirProdutoPage.acessarPaginaProduto()
	
});

When(/^encontrar o produto desejado$/, () => {

  incluirProdutoPage.encontrarProduto()
	
});

When(/^clicar no botao para adicionar o produto no carrinho$/, () => {

  incluirProdutoPage.BTNAaddCarinho()
	
});

Then(/^entao valido que o produto se encontra no carrinho$/, () => {

  incluirProdutoPage.ValidarMensagem()
	
});


