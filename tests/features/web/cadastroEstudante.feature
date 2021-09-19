# Arquivo : cadastroEmpresa.feature
# Autor   : Lucas Barros
# Data    : 19/09/2021
Feature: Realizar cadastro de Estudante
    Como usuário do sistema JotFormz
    Eu desejo poder realizar cadastros de Estudante
    Para que possa ter o registro de futuros Estudantes.

    Scenario: Cadastrar um Estudante com sucesso.
        Given eu estou na página de cadastro de Estudante
        When eu preencho todos os campos de Estudante solicitados
        Then eu visualizo a mensagem de "Thank You!"