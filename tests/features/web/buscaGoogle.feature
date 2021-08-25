Feature: Realizar busca de Framework no Google
    Como usuário do buscador google
    Eu desejo poder realizar buscas no google
    Para que possa pesquisar os framework de automação de teste

    Scenario: Buscar por Robot Framework
        Given estou na página de busca do google
        When informo o framework desejado "Robot Framework"
        Then visualizo o Feedback do google sobre a pesquisa "Robot Framework"