/**
 * File: formCadEstudantePage.js
 * Autor: Lucas Barros
 * Data: 19/09/2021
 */

const expect = require('chai').expect;

class FormCadEstudantePage {
    // define os elementos
    get tituloLbl() { return $('#header_1') }  // "Student Registration Form"
    //Dados estudante
    get firstNameTxt() { return $('#first_4') }
    get middleNameTxt() { return $('#middle_4') }
    get lastNameTxt() { return $('#last_4') }
    get monthBirthVal() { return $('select[id="input_24_month"]') }
    get dayhirthVal() { return $('#input_24_day') }
    get yearBirthVal() { return $('#input_24_year') }
    get genderStudentVal() { return $('#input_3') }
    // Endereço Estudante
    get adressTxt() { return $('#input_23_addr_line1') }
    get adressStreetTxt() { return $('#input_23_addr_line2') }
    get cityTxt() { return $('#input_23_city') }
    get stateTxt() { return $('#input_23_state') }
    get zipCodeTxt() { return $('#input_23_postal') }
    // Dados Adicionais Estudante
    get emailTxt() { return $('#input_6') }
    get mobileNumberTxt() { return $('#input_27_full') }
    get phoneNumberTxt() { return $('#input_25_full') }
    get workNumberTxt() { return $('#input_26_full') }
    get companyNameTxt() { return $('#input_14') }
    get courseVal() { return $('#input_46') }
    get additionalCommentTxt() { return $('#input_45') }
    // Button Clear and Submit
    get submitBtn() { return $('#input_20') } // Botão de voltar
    get clearBtn() { return $('#input_19') } // Botão de enviar

    /**
     * Método de chamada de URL
     */
    open() {
        browser.url("/212614579791667");
    }

    /**
    * Método de elementos de ação
    */

    validarTituloForm() {
        this.tituloLbl.waitForDisplayed();
        expect(this.tituloLbl.getText()).to.contain("Student Registration Form")
    }

    //Cadastro Student
    informarDadosStudent() {
        this.firstNameTxt.waitForDisplayed();
        this.firstNameTxt.setValue("Lucas Augusto");
        this.middleNameTxt.setValue("Garcia de Figueiredo");
        this.lastNameTxt.setValue("Barros");
        this.monthBirthVal.selectByVisibleText("September");
        this.dayhirthVal.selectByVisibleText("9");
        this.yearBirthVal.selectByVisibleText("1984");
        this.genderStudentVal.selectByVisibleText("Male");
    }

    //Endereço Student
    informarEndereco() {
        this.adressTxt.waitForDisplayed();
        this.adressTxt.setValue("Rua Alta Floresta 112");
        this.adressStreetTxt.setValue("Fundos Hospital Julio Muller");
        this.cityTxt.setValue("Cuiabá");
        this.stateTxt.setValue("Mato Grosso");
        this.zipCodeTxt.setValue("78000000");
    }

    //Dados Adicionais Student
    informarDadosAdicionais() {
        this.emailTxt.waitForDisplayed();
        this.emailTxt.setValue("lucas.augusto@lucas.com.br");
        this.mobileNumberTxt.setValue("6592108952");
        this.phoneNumberTxt.setValue("6592108952");
        this.workNumberTxt.setValue("6592108952");
        this.companyNameTxt.setValue("Lucas Barros");
        this.courseVal.selectByVisibleText("History 101");
        this.additionalCommentTxt.setValue("Teste de inclusão de comentário");
    }

    //Salvar Cadastro
    submitStudent() {
        this.submitBtn.waitForClickable();
        this.submitBtn.click();
    }
}
module.exports = FormCadEstudantePage;