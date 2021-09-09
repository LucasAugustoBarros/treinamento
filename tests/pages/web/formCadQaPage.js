/**
 * File: formCadQaPage.js
 * Autor: Lucas Barros
 * Data: 09/09/2021
 */

const expect = require('chai').expect;
const path = require('path');

class FormCadQaPage {
    // define os elementos
    get subTituloLbl() { return $('#header_1') }
    //Dados QA
    get nomaQaTxt() { return $('#first_4') }
    get sobrenomeQaTxt() { return $('#last_4') }
    get celularQaTxt() { return $('#input_6_full') }
    get emailQaTxt() { return $('input[type="email"]') }
    // Endereço QA
    get endereçoQaTxt() { return $('#input_12_addr_line1') }
    get cidadeQaTxt() { return $('#input_12_city') }
    get estadoQATxt() { return $('#input_12_state') }
    //Comprovante Residencia
    get uploadArquivoUp() { return $('.fileupload-input') }
    get uploadArquivoLbl() { return $('.qq-upload-file') }
    // Clicar Termos
    get termos0Lbl() { return $('label[class="Concordo com os "]') }
    get termosLbl() { return $('div#cid_11 > div > div > input[id="widget_settings_11"]') }
    get termos1Lbl() { return $('input[id="input_11"]') }
    get termos2Lbl() { return $('div[data-widget-name="Termos e Condições"]') }
    // Botões voltar e enviar
    get enviarBtn() { return $('#input_2') } // Botão de enviar

    /**
     * Método de chamada de URL
     */
    open() {
        browser.url("/212447091627052");
    }

    /**
    * Método de elementos de ação
    */

    validarTituloForm() {
        this.subTituloLbl.waitForDisplayed();
        expect(this.subTituloLbl.getText()).to.contain("Cadastro de QAs")
    }

    //Cadastro QA
    informarDadosQA() {
        this.nomaQaTxt.waitForDisplayed();
        this.nomaQaTxt.setValue("Lucas Augusto");
        this.sobrenomeQaTxt.setValue("Barros");
        this.celularQaTxt.setValue("65992108952");
    }

    //Endereço QA
    informarEndereco() {
        this.endereçoQaTxt.waitForDisplayed();
        this.endereçoQaTxt.setValue("Rua Canjica");
        this.cidadeQaTxt.setValue("Cuiabá");
        this.estadoQATxt.setValue("Mato Grosso");
    }

    //Upload de Arquivo
    enviarComprovantes() {
        const filePath = path.join(__dirname, '../../support/util/upload/comprovativo-situacao-cnpj.jpg');
        const remoteFilePath = browser.uploadFile(filePath);
        this.uploadArquivoUp.setValue(remoteFilePath);
        expect(this.uploadArquivoLbl.getText()).to.equal("comprovativo-situacao-cnpj.jpg");
    }
    //Clicar Concordo com os Termos
    clicarTermos() {
        this.uploadArquivoLbl.waitForDisplayed();
        this.uploadArquivoLbl.click();
        browser.pause(2000);
        browser.keys('Tab');
        browser.keys('Tab');
        browser.keys('Space');
        browser.pause(2000);
    }

    //Salvar Cadastro
    enviarFormQa() {
        this.enviarBtn.waitForClickable();
        browser.pause(1000);
        this.enviarBtn.click();
    }
}
module.exports = FormCadQaPage;