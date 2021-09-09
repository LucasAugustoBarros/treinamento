# Arquivo : cadastroEmpresa.feature
# Autor   : Lucas Barros
# Data    : 31/08/2021
Feature: Realizar cadastro de QA
    Como usuário do sistema JotFormz
    Eu desejo poder realizar cadastros de QAs
    Para que possa ter o registro de futuros colaboradores.

    @teste
    Scenario: Cadastrar um QA com sucesso.
        Given eu estou na página de cadastro de QA
        When eu preencho todos os campos de QA solicitados
        Then eu visualizo a mensagem de "Obrigado!"