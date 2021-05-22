Feature: Cadastro de usuarios

    Como cliente quero ser capaz de cadastrar usuários

    Scenario Outline: Cadastro de usuário
        Given estou na página de usuários
        When eu cadastro usuario "<Nome>" com email "<Email>"
        And clico no botão Salvar
        Then usuario cadastrado, "<Nome>" "<Email>", deve aparecer na lista

        Examples:
            | Nome  | Email           |
            | Teste | teste@gmail.com |
