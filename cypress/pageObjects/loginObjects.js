/// <reference types="cypress" />

export default class loginObjects {

    getUsername(){
        return cy.get('[name="username"]')
    }
    getPassword(){
        return cy.get('[name="password"]')
    }
    getAlert(){
        return cy.get('[role="alert"]')
    }
    getLoginBtn(){
        return cy.contains('button',' Login ')
    }
}