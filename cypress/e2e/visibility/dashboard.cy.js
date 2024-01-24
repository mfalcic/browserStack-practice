/// <reference types="cypress" />

import loginObjects from "../../pageObjects/loginObjects"

describe('Testing homepage',()=>{

    const loginPage = new loginObjects()

    beforeEach(()=>{
        cy.visit('/auth/login')
        cy.uiLogin('Admin','admin123')
        loginPage.getLoginBtn().click()
    })
    it.only('validate dashboard cards are visible',()=>{
        cy.get('.oxd-sheet--white')
        .should('be.visible')
    })
})