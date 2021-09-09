/**
 * File: cadastrarEmpresaStep.js
 * Author: Lucas Barros
 * Date: 02/09/2021
 */
const { Given, When, Then } = require('cucumber');
const FormCadEmpresaPage = require('../../pages/web/formCadEmpresaPage');
const SucessoFormPage = require('../../pages/web/sucessoFormPage');

const formCadEmpresaPage = new FormCadEmpresaPage();
const sucessoFormPage = new SucessoFormPage();

Given(/^eu estou na página de cadastro de empresa$/, () => {
    formCadEmpresaPage.open();
    formCadEmpresaPage.validarTituloForm();
});

When(/^eu preencho todos os campos solicitados$/, () => {
    formCadEmpresaPage.informarDadosEmpresa();
    formCadEmpresaPage.informarEndereco();
    formCadEmpresaPage.informarDtPagamento();
    formCadEmpresaPage.clicarProximo();
    formCadEmpresaPage.informarRespEmpresa();
    formCadEmpresaPage.informarRespFinanEmpresa();
    formCadEmpresaPage.informarDadosContabilidade();
    formCadEmpresaPage.enviarComprovantes();
    formCadEmpresaPage.enviarFormEmpresa();
});

Then(/^eu visualizo a mensagem de "([^"]*)"$/, (mensagem) => {
    sucessoFormPage.validarMsgSucesso(mensagem);
});