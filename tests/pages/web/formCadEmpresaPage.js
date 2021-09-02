/**
 * File: formCadEmpresaPage.js
 * Autor: Lucas Barros
 * Data: 31/08/2020
 */

const expect = require('chai').expect;
const path = require('path');

class FormCadEmpresaPage {
    // define os elementos
    get subTituloLbl() { return $('div[id="subHeader_1"]') }  // "Preencha o formulário com as informações da sua empresa"
    //Dados Empresa
    get razaoSocialTxt() { return $('input[name="q5_razaoSocial"]') }
    get nomeFantasiaTxt() { return $('input[id="input_7"]') }
    get cnpjTxt() { return $('input[name="q10_cnpj"]') }
    get iETxt() { return $('input[name="q11_inscricaoEstadual"]') } // Campo Inscrição Estadual
    get proprietarioNomeTxt() { return $('input[name="q3_nome3[first]"]') }
    get proprietarioSobrenomeTxt() { return $('input[id="last_3"]') }
    get telefonePropTxt() { return $('input[placeholder="(00) 0000-0000"]') }
    // Endereço Empresa
    get enderecoTxt() { return $('input[id="input_13_addr_line1"]') }
    get enderecoContinuacaoTxt() { return $('input[id="input_13_addr_line2"]') }
    get cidadeTxt() { return $('input[name="q13_endereco[city]"]') }
    get estadoTxt() { return $('input[id="input_13_state"]') }
    get cepTxt() { return $('input[id="input_13_postal"]') }
    // Parametro de Pagamento empresa
    get diaPagamentoBoletoTxt() { return $('input[id="input_15"]') } // Campo  Melhor Dia do Mês Para Envio do Boleto
    // Botão
    get proximoBtn() { return $('button[id="form-pagebreak-next_14"]') } // Botão próximo
    // Segundo Formulário Responsável empresa
    get respNomeTxt() { return $('input[id="first_16"]') } // Campo Nome Responsável empresa
    get respSobrenomeTxt() { return $('input[id="last_16"]') } // Campo Nome Responsável empresa
    get celularRespTxt() { return $('input[name="q17_celularDo17[full]"]') }
    get cpfRespTxt() { return $('input[name="q18_cpfDo"]') }
    // Segundo Formulário Responsável Financeiro empresa
    get respFinanNomeTxt() { return $('input[id="first_19"]') } // Campo Nome Responsável Financeiro empresa
    get respFinanSobrenomeTxt() { return $('input[id="last_19"]') } // Campo Nome Responsável Financeiro empresa
    get telefoneRespFinanTxt() { return $('input[id="input_20_full"]') } // Campo Telefone Responsável Financeiro empresa
    // Segundo Formulário Responsável Contabilidade
    get nomeContabilidadeTxt() { return $('input[name="q21_nomeDa"]') }
    get contadorNomeTxt() { return $('input[id="first_22"]') } // Nome Contador Contabilidade
    get contadorSobrenomeTxt() { return $('input[name="q22_nomeDo22[last]"]') } // Sobrenome Contador Contabilidade
    get emailContadortxt() { return $('input[name="q23_emailDo"]') }
    get celularContadorTxt() { return $('input[id="input_24_full"]') }
    //Arquivo
    get uploadArquivoUp() { return $('input[class="fileupload-input"]') }
    get uploadArquivoLbl() { return $('.qq-upload-file') }
    // Botões voltar e enviar
    get voltarBtn() { return $('button[id="form-pagebreak-next_14"]') } // Botão de voltar
    get enviarBtn() { return $('#input_2') } // Botão de enviar
    // Mensagem enviado
    get msgSucessoLbl() { return $('.thankyou-main-text.ty-text"]') } // mensagem de sucesso "Enviado com sucesso!"

    /**
     * Método de chamada de URL
     */
    open() {
        browser.url("/212417581425655");
    }

    /**
    * Método de elementos de ação
    */

    validarTituloForm() {
        this.subTituloLbl.waitForDisplayed();
        expect(this.subTituloLbl.getText()).to.contain("Preencha o formulário com as informações da sua empresa")
    }

    //Cadastro empresa
    informarDadosEmpresa() {
        this.razaoSocialTxt.waitForDisplayed();
        this.razaoSocialTxt.setValue("Razão Social Lucas");
        this.nomeFantasiaTxt.setValue("Nome Fantasia Lucas Barros");
        this.cnpjTxt.setValue("01010101010101");
        this.iETxt.setValue("13123456");
        this.proprietarioNomeTxt.setValue("Lucas Augusto");
        this.proprietarioSobrenomeTxt.setValue("Barros");
        this.telefonePropTxt.setValue("6592108952");
    }

    //Endereço empresa
    informarEndereco() {
        this.enderecoTxt.waitForDisplayed();
        this.enderecoTxt.setValue("Rua Canjica");
        this.enderecoContinuacaoTxt.setValue("São João 2021");
        this.cidadeTxt.setValue("Cuiabá");
        this.estadoTxt.setValue("Mato Grosso");
        this.cepTxt.setValue("78000000");
    }

    //Informar melhor data Pagamento
    informarDtPagamento() {
        this.diaPagamentoBoletoTxt.waitForDisplayed();
        this.diaPagamentoBoletoTxt.setValue("15");
    }

    //Botão Proximo
    clicarProximo() {
        this.proximoBtn.waitForDisplayed();
        this.proximoBtn.click();
    }

    //Responsável Empresa
    informarRespEmpresa() {
        this.respNomeTxt.waitForDisplayed();
        this.respNomeTxt.setValue("Lucas Augusto");
        this.respSobrenomeTxt.setValue("Barros");
        this.celularRespTxt.setValue("65992108952");
        this.cpfRespTxt.setValue("09887665428");
    }

    //Responsável Finaneciro Empresa
    informarRespFinanEmpresa() {
        this.respFinanNomeTxt.waitForDisplayed();
        this.respFinanNomeTxt.setValue("Lucas Augusto");
        this.respFinanSobrenomeTxt.setValue("Barros");
        this.telefoneRespFinanTxt.setValue("6592108952");
    }

    //Responsável Contabilidade
    informarDadosContabilidade() {
        this.nomeContabilidadeTxt.waitForDisplayed();
        this.nomeContabilidadeTxt.setValue("Conta com a Gente");
        this.contadorNomeTxt.setValue("Contador");
        this.contadorSobrenomeTxt.setValue("de história");
        this.emailContadortxt.setValue("contador@contacomagente.com.br");
        this.celularContadorTxt.setValue("65999999999");
    }

    //Upload de Arquivo
    enviarComprovantes() {
        const filePath = path.join(__dirname, '../../support/util/upload/comprovativo-situacao-cnpj.jpg');
        const remoteFilePath = browser.uploadFile(filePath);
        this.uploadArquivoUp.setValue(remoteFilePath);
        expect(this.uploadArquivoLbl.getText()).to.equal("comprovativo-situacao-cnpj.jpg");
    }

    //Salvar Cadastro
    enviarFormEmpresa() {
        this.enviarBtn.waitForClickable();
        this.enviarBtn.click();
    }
}
module.exports = FormCadEmpresaPage;