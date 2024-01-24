/// <reference types="cypress" />

import loginObjects from "../../pageObjects/loginObjects"

describe('Testing homepage',()=>{

    const loginPage = new loginObjects()

    beforeEach(()=>{
        cy.visit('/auth/login')
        cy.uiLogin('Admin','admin123')
        loginPage.getLoginBtn().click()
    })
    it.only('click  clock icon in Time at Work and set new time',()=>{
        cy.get('.orangehrm-attendance-card-bar')
        .find('button')
        .click()

        cy.get('.oxd-date-wrapper')
        .click()

        cy.get('.oxd-date-input-calendar')
        .contains('2')
        .click()

        cy.get('[placeholder="Type here"]')
        .clear()
        .type('Testing browserStack integration')

        cy.get('[type="submit"]').click()

        cy.get('.oxd-toast').should('be.visible')
    })
})