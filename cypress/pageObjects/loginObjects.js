/// <reference types="cypress" />

export default class loginObjects {
    getAlert(){
        return cy.get('[role="alert"]')
    }
    getLoginBtn(){
        return cy.contains('button',' Login ')
    }
}