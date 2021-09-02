/**
 * File: sucessoFormEmpresaPage.js
 * Autor: Lucas Barros
 * Data: 01/09/2021
 */

const expect = require('chai').expect;

class SucessoFormEmpresaPage {
    // Define Elementos

    get msgSucessoLbl() { return $('h1[class="thankyou-main-text ty-text"]') } // mensagem de sucesso "Enviado com sucesso!"


    //Método de elementos de ação

    validarMsgSucesso(mensagem) {
        this.msgSucessoLbl.waitForDisplayed();
        expect(this.msgSucessoLbl.getText()).to.equal(mensagem)
    }

}
module.exports = SucessoFormEmpresaPage;