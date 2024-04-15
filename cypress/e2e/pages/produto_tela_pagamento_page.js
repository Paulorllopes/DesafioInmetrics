///<reference types="Cypress"/>

import ProdTelaPagaElements from "../elements/produto_tela_pagamento_elements";
const prodTelaPagaElements = new ProdTelaPagaElements

import LoginPage from "./login_page";
const loginPage = new LoginPage

import PesquisaProdutoPage from "./pesquisa_Produto_Page";
const pesquisaProdutoPage = new PesquisaProdutoPage

import IncluirProdutoPage from "./incluir_produto_page";
const incluirProdutoPage = new IncluirProdutoPage

const url = Cypress.config('baseUrl')

class TelaPagamentoPage {

  IncluirProdCar(){

    loginPage.accessLoginPage()
    loginPage.setLoginData()
    loginPage.BTNLogin()

    pesquisaProdutoPage.clicarPagProdutos()
    pesquisaProdutoPage.pesquisarProduto()    
    incluirProdutoPage.BTNAaddCarinho()

  }

  acessarTelaPaga(){

    cy.wait(3000)    
    cy.get(prodTelaPagaElements.BTNIrCheckOut()).click()
    cy.get(prodTelaPagaElements.BTNIrPagamento()).click()
    
  }

  ValMensTelaPaga(){

    cy.get(prodTelaPagaElements.TextoPagamento()).should('have.text', 'Payment')

  }


}export default TelaPagamentoPage