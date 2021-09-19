/**
 * File: questionarioEstudanteStep.js
 * Author: Lucas Barros
 * Date: 19/09/2021
 */
const { Given, When, Then } = require('cucumber');
const FormSocioEconomico = require('../../pages/web/formSocioEconomico');

const formSocioEconomico = new FormSocioEconomico();

Given(/^eu estou na página do questionario$/, () => {
    formSocioEconomico.open();
    formSocioEconomico.validarTituloForm();
});

When(/^eu preencho todos os campos do formulario Socio economico$/, () => {
    formSocioEconomico.informarDadosEstudante();
    formSocioEconomico.informarDadosEconomico();
    formSocioEconomico.clicarTermos();
    formSocioEconomico.enviarSocioEconomico();
});