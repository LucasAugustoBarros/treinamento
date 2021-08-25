/**
 * File: homePage.js
 * Autor: Fernanda Ferreira
 * Data: 09/08/2020
 */
const assert = require('chai').assert;

class HomePage {
    // define os elementos
    get googleImg() { return $('[id="hpctaplay"]') }
    get campoPesquisaTxt() { return $('input[title="Pesquisar"]') }
    get pesquisarBtn() { return $('[jsname] [value="Pesquisa Google"]') }

    open() {
        browser.url('/');
    }

    //Metodos dos elementos de ação
    validaHomeGoogle() {
        this.googleImg.waitForDisplayed();
        assert.equal(this.googleImg.isDisplayed(), true);
    }
    informaDadosPesquisa(dados) {
        this.campoPesquisaTxt.waitForDisplayed(); // Aguarda o campo ficar visível
        this.campoPesquisaTxt.setValue(dados);
    }

    pesquisarClick() {
        this.pesquisarBtn.waitForDisplayed();
        this.pesquisarBtn.click();
    }
}

module.exports = HomePage;