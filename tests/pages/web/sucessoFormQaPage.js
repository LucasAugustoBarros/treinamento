/**
 * File: sucessoFormQaPage.js
 * Autor: Lucas Barros
 * Data: 09/09/2021
 */

const expect = require('chai').expect;

class SucessoFormQaPage {
    // Define Elementos

    get msgSucessoLbl() { return $('thankyou-main-text ty-text') } // mensagem de sucesso "Enviado com sucesso!"


    //Método de elementos de ação

    validarMsgSucesso(mensagem) {
        this.msgSucessoLbl.waitForDisplayed();
        expect(this.msgSucessoLbl.getText()).to.eql(mensagem)
    }

}
module.exports = SucessoFormQaPage;