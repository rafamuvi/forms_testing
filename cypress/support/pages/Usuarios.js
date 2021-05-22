/// <reference types='cypress'/>

export class Usuarios {

    constructor(){
        this.seletorNomeInput = ''
        this.seletorEmailInput = ''
        this.botaoSalvar = ''
        this.liUsuario = ''
        this.seletorCampoNome = ''
        this.seletorCampoEmail = ''
    }

    validaInput(valor, seletor){
        cy.get(seletor).should('have.value', valor)
    }
    
    validaCampo(valor, seletor){
        cy.get(seletor).should('have.text', valor)
    }

    navigate(){
        cy.visit('/');
    }

    nomeInput(nome){
        cy.get(this.seletorNomeInput)
            .type(nome)
        this.validaInput(nome, this.seletorNomeInput)
    }

    emailInput(email){
        cy.get(this.seletorEmailInput)
            .type(email)
        this.validaInput(email, this.seletorEmailInput)
    }

    clicaSalvar(){
        cy.get(this.botaoSalvar)
            .click()
    }

    validaUsuario(nome, email){
        cy.get(this.liUsuario)
        this.validaCampo(nome, this.seletorCampoNome)
        this.validaCampo(email, this.seletorCampoEmail)
    }

}