# Arquivo : socioEconomico.feature
# Autor   : Lucas Barros
# Data    : 19/09/2021
Feature: Realizar socio Economico Estudante
    Como usuário do sistema JotFormz
    Eu desejo poder realizar formaulrio Socio Economico dos Estudante
    Para que possa ter o registros socios economicos dos Estudantes.

    @teste
    Scenario: Cadastrar um Estudante com sucesso.
        Given eu estou na página do questionario
        When eu preencho todos os campos do formulario Socio economico
        Then eu visualizo a mensagem de "Thank You!"