/**
 * File: formSocioEconomico.js
 * Autor: Lucas Barros
 * Data: 19/09/2021
 */

const expect = require('chai').expect;

class FormSocioEconomico {
    // define os elementos
    get tituloLbl() { return $('#header_1') }  // "Student Registration Form"
    //Dados estudante
    get nomeTxt() { return $('#input_3') }
    get emailTxt() { return $('#input_23') }
    get dayhirthVal() { return $('#input_21_day') }
    get monthBirthVal() { return $('#input_21_month') }
    get yearBirthVal() { return $('#input_21_year') }
    // socioEconomico
    get estadoCivilRdo() { return $('#label_input_11_0') }
    get cidadeRdo() { return $('#label_input_7_1') }
    get filhosVal() { return $('#input_5') }
    get deficienciaRdo() { return $('#label_input_12_1') }
    get turnoRdo() { return $('#label_input_4_1') }
    get cursoRdo() { return $('#label_input_22_0') }
    get meioLocRdo() { return $('#label_input_13_2') }
    get domicilioRdo() { return $('#label_input_14_0') }
    get conjugeChk() { return $('#input_16_0') }
    get paisChk() { return $('#input_16_1') }
    get parentesChk() { return $('#input_16_2') }
    get qtsMoramVal() { return $('#input_17') }
    get rendaRdo() { return $('#label_input_15_6') }
    get trabalhaCursoRdo() { return $('#label_input_18_1') }
    get estudouRdo() { return $('#label_input_19_0') }
    get tiNivelRdo() { return $('#label_input_20_2') }
    get inglesChk() { return $('#label_input_6_0') }
    get espanholChk() { return $('#label_input_6_1') }
    get concordoTermosChk() { return $('#label_input_24_0') }
    // Enviar
    get enviarBtn() { return $('#input_2') } // Botão de enviar
    /**
     * Método de chamada de URL
     */
    open() {
        browser.url("/212615747854665");
    }

    /**
    * Método de elementos de ação
    */

    validarTituloForm() {
        this.tituloLbl.waitForDisplayed();
        expect(this.tituloLbl.getText()).to.contain("Questionário SOCIOECONÔMICO - Fatec Franca")
    }

    //Cadastro Student
    informarDadosEstudante() {
        this.nomeTxt.waitForDisplayed();
        this.nomeTxt.setValue("Lucas Augusto Garcia de Figueiredo Barros");
        this.emailTxt.setValue("lucas.augusto@lucas.com.br");
        this.dayhirthVal.selectByVisibleText("9");
        this.monthBirthVal.selectByVisibleText("Setembro");
        this.yearBirthVal.selectByVisibleText("1984");
        this.filhosVal.scrollIntoView();
    }

    //Endereço Student
    informarDadosEconomico() {
        this.estadoCivilRdo.waitForDisplayed();
        this.estadoCivilRdo.click();
        this.cidadeRdo.click();
        this.filhosVal.selectByVisibleText("0");
        this.deficienciaRdo.click();
        this.cursoRdo.scrollIntoView();
        this.cursoRdo.waitForDisplayed();
        this.cursoRdo.click();
        this.turnoRdo.click();
        this.meioLocRdo.click();
        this.domicilioRdo.click();
        this.qtsMoramVal.scrollIntoView();
        this.qtsMoramVal.waitForDisplayed();
        this.qtsMoramVal.selectByVisibleText("5");
        this.conjugeChk.click();
        this.paisChk.click();
        this.rendaRdo.click();
        this.inglesChk.scrollIntoView();
        this.trabalhaCursoRdo.waitForDisplayed();
        this.trabalhaCursoRdo.click();
        this.estudouRdo.click();
        this.tiNivelRdo.click();
        this.inglesChk.click();
        this.espanholChk.click();
        this.enviarBtn.scrollIntoView();
    }

    //Clicar captcha
    clicarTermos() {
        this.concordoTermosChk.waitForDisplayed();
        this.concordoTermosChk.click();
    }

    //Salvar Cadastro
    enviarSocioEconomico() {
        this.enviarBtn.waitForClickable();
        this.enviarBtn.click();
    }
}
module.exports = FormSocioEconomico;