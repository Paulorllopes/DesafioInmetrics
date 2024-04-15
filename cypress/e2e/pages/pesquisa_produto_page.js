///<reference types="Cypress"/>

import PesquisaProdutoElements from "../elements/pesquisa_produto_elements"
const pesquisaProdutoElements = new PesquisaProdutoElements
import LoginPage from "./login_page"
const loginPage = new LoginPage

const url = Cypress.config('baseUrl')

class PesquisaProdutoPage {

  efetuarLogin(){

    loginPage.accessLoginPage()
    loginPage.setLoginData()
    loginPage.BTNLogin()
     
  }

  clicarPagProdutos(){
    cy.get(pesquisaProdutoElements.BTPProdutos()).click()    
  }

  pesquisarProduto(){

    cy.get(pesquisaProdutoElements.CMPPesquisa()).type('Fancy Green Top')
    cy.get(pesquisaProdutoElements.BTNPesquisa()).click()
    
    
  }

  validarProduto(){

    cy.wait(3000)
    cy.get(pesquisaProdutoElements.textValidacao()).should('have.text', 'Searched Products')

  }



}export default PesquisaProdutoPage