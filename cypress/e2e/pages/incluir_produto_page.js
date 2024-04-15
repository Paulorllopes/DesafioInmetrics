///<reference types="cypress"/>

import IncluirProdutoElements from "../elements/incluir_produto_elements";
const incluirProdutoElements = new IncluirProdutoElements

import LoginPage from "./login_page";
const loginPage = new LoginPage

import PesquisaProdutoPage from "./pesquisa_Produto_Page";
const pesquisaProdutoPage = new PesquisaProdutoPage

const url = Cypress.config('baseUrl')

class IncluirProdutoPage {

  acessarPaginaProduto() {

    loginPage.accessLoginPage()
    loginPage.setLoginData()
    loginPage.BTNLogin()
    pesquisaProdutoPage.clicarPagProdutos()

  }

  encontrarProduto() {

    pesquisaProdutoPage.pesquisarProduto()

  }

  BTNAaddCarinho() {
    
    cy.wait(3000)
    cy.scrollTo(200, 400)
    cy.get(incluirProdutoElements.BTNAdd()).click()
    cy.get(incluirProdutoElements.BTNIrCarinho()).click()

  }

  ValidarMensagem() {

    cy.get(incluirProdutoElements.mensagemTelaCarrinho()).should('have.text', 'Shopping Cart')

  }

} export default IncluirProdutoPage