///<reference types="Cypress"/>
import LoginElements from "../elements/login_elements"
const loginElements = new LoginElements

const url = Cypress.config('baseUrl')

class LoginPage{ 

  accessLoginPage(){
    cy.visit(url)
    cy.wait(2000)
    cy.get(loginElements.btnLogin()).click()  
  }

  setLoginData(){
    cy.get(loginElements.emailAddress()).type('pauloteste@email.com')
    cy.get(loginElements.password()).type('teste@123')
  }

  BTNLogin(){
    cy.get(loginElements.loginBTN()).click()    
  }

  ValidarMensagem(){
    cy.get(loginElements.mensagemLogin()).should('have.text', 'Paulo Robson')
  }

}export default LoginPage