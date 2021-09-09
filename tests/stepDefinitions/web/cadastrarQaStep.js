/**
 * File: cadastrarQaStep.js
 * Author: Lucas Barros
 * Date: 09/09/2021
 */
const { Given, When, Then } = require('cucumber');
const FormCadQaPage = require('../../pages/web/formCadQaPage');
const SucessoFormPage = require('../../pages/web/sucessoFormPage');

const formCadQaPage = new FormCadQaPage();
const sucessoFormPage = new SucessoFormPage();

Given(/^eu estou na página de cadastro de QA$/, () => {
    formCadQaPage.open();
    formCadQaPage.validarTituloForm();
});

When(/^eu preencho todos os campos de QA solicitados$/, () => {
    formCadQaPage.informarDadosQA();
    formCadQaPage.informarEndereco();
    formCadQaPage.enviarComprovantes();
    formCadQaPage.clicarTermos();
    formCadQaPage.enviarFormQa();
});

Then(/^eu visualizo a mensagem "([^"]*)"$/, (mensagem) => {
    sucessoFormPage.validarMsgSucesso(mensagem);
});