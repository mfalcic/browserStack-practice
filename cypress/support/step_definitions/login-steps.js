import { Before,Given,When,And, Then} from "cypress-cucumber-preprocessor"

Given('I access the OrangeHM login page',()=>{
    cy.visit('/ ')
})
When('I enter a username {word}',(userName)=>{
    cy.get('[name="username"]')
    .clear()
    .type(userName)
})