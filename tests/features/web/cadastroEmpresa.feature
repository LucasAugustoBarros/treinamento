# Arquivo : cadastroEmpresa.feature
# Autor   : Lucas Barros
# Data    : 31/08/2021
Feature: Realizar cadastro de Empresa
    Como usuário do sistema JotFormz
    Eu desejo poder cadastrar empresas
    Para que possa ter o registro de futuros clientes.

    Scenario: Cadastrar Empresa com sucesso.
        Given eu estou na página de cadastro de empresa do sistema JotFormz
        When eu preencho todos os campos solicitados
        Then eu visualizo a mensagem de "Enviado com sucesso!"