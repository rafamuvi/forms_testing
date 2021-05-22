import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import { Usuarios } from '../pages/Usuarios'

const usuarios = new Usuarios()

Given('estou na página de usuários', () => {
    usuarios.navigate()
})

When(/eu cadastro usuario "(.*)" com email "(.*)"/, (nome, email) => {
    usuarios.nomeInput(nome)
    usuarios.emailInput(email)
})

When('clico no botão Salvar', () => {
    usuarios.clicaSalvar()
})

Then(/usuario cadastrado, "(.*)" "(.*)", deve aparecer na lista/, (nome, email) => {
    usuarios.validaUsuario(nome, email)
})