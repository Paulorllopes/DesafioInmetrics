///<reference types="cypress"/>
import PesquisaProdutoPage from "../pages/pesquisa_Produto_Page";
const pesquisaProdutoPage = new PesquisaProdutoPage


Given(/^clicar na pagina de produtos$/, () => {
	pesquisaProdutoPage.efetuarLogin()
  pesquisaProdutoPage.clicarPagProdutos()

});

When(/^pesquisar o produto$/, () => {
  pesquisaProdutoPage.pesquisarProduto()
	
});

Then(/^valido ele na tela$/, () => {

  pesquisaProdutoPage.validarProduto()
	
});
