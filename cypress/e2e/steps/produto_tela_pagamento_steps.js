///<reference types="cypress"/>
import TelaPagamentoPage from "../pages/produto_tela_pagamento_page";
const telaPagamentoPage = new TelaPagamentoPage

Given(/^incluir produtos no carrinho$/, () => {

  telaPagamentoPage.IncluirProdCar()
	
});

When(/^quando acessar a tela de pagamento$/, () => {

  telaPagamentoPage.acessarTelaPaga()
	
});

Then(/^validar que estou na tela pagamento$/, () => {

  telaPagamentoPage.ValMensTelaPaga()
	
});
