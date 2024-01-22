/// <reference types="cypress" />

import loginObjects from "../../pageObjects/loginObjects"

describe('testing login page', ()=>{

    const loginPage = new loginObjects()

    before(() => {

        cy.fixture('loginUsers').then((users) => {
    
          globalThis.users = users
    
        })
    
      })
    

    beforeEach(()=>{
        cy.visit('/auth/login')
    })
    it('Login with valid credential',()=>{
        cy.uiLogin('Admin','admin123')

        loginPage.getLoginBtn().click()
        
        cy.url().should('include','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

    })
    it('Login with invalid username',()=>{

        cy.uiLogin('badUser','admin123')

        loginPage.getLoginBtn().click()

        loginPage
        .getAlert()
        .should('be.visible')
        .contains('Invalid credentials')

        cy.url().should('include','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })
    it('Login with invalid password',()=>{
        cy.uiLogin('Admin','badPass')

        loginPage.getLoginBtn().click()

        loginPage
        .getAlert()
        .should('be.visible')
        .contains('Invalid credentials')

        cy.url().should('include','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })
    it('Login with valid invalid credential',()=>{
        cy.uiLogin('badUser','badPass')

        loginPage.getLoginBtn().click()

        loginPage
        .getAlert()
        .should('be.visible')
        .contains('Invalid credentials')

        cy.url().should('include','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })
    it('Login with empty username',()=>{
        cy.uiLogin('something','admin123')
        cy.get('[name="username"]').clear()

        loginPage.getLoginBtn().click()

        cy
        .get('.oxd-input--error')
        .then((error)=>{
            cy.get(error).should('be.visible')
        })

        cy.url().should('include','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })
    it('Login with empty password',()=>{
        cy.uiLogin('Admin','something')
        cy.get('[name="password"]').clear()
        loginPage.getLoginBtn().click()

        cy
        .get('.oxd-input--error')
        .then((error)=>{
            cy.get(error).should('be.visible')
        })

        cy.url().should('include','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })
    it('click the login button',()=>{
        cy.uiLogin('something','something')
        cy.get('[name="username"]').clear()
        cy.get('[name="password"]').clear()
        loginPage.getLoginBtn().click()

        cy.get('.oxd-input-field-error-message').should('have.length', 2)
    })
})