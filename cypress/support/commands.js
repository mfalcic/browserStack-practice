Cypress.Commands.add('uiLogin',(username,password) =>{
    
    cy.get('[name="username"]')
    .clear()
    .type(username)

    cy.get('[name="password"]')
    .clear()
    .type(password)
})
