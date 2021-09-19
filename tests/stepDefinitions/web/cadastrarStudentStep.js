/**
 * File: cadastrarQaStep.js
 * Author: Lucas Barros
 * Date: 19/09/2021
 */
const { Given, When, Then } = require('cucumber');
const FormCadEstudantePage = require('../../pages/web/formCadEstudantePage');

const formCadEstudantePage = new FormCadEstudantePage();

Given(/^eu estou na página de cadastro de Estudante$/, () => {
    formCadEstudantePage.open();
    formCadEstudantePage.validarTituloForm();
});

When(/^eu preencho todos os campos de Estudante solicitados$/, () => {
    formCadEstudantePage.informarDadosStudent();
    formCadEstudantePage.informarEndereco();
    formCadEstudantePage.informarDadosAdicionais();
    formCadEstudantePage.submitStudent();
});