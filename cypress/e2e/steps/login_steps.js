
///<reference types="cypress"/>
import LoginPage from "../pages/login_page";
const loginPage = new LoginPage

Given(/^eu acesse a pagina de login$/, () => {
	loginPage.accessLoginPage()
});

When(/^eu prencher os campos usuario e senha$/, () => {
  loginPage.setLoginData()
	
});

When(/^clicar no botao de login$/, () => {
  loginPage.BTNLogin()

});

Then(/^entao valido o login com sucesso$/, () => {
  loginPage.ValidarMensagem()
	
});