// describe('My first test', () => {
//   it('Visits the kitchen sink', () => {
//     cy.visit('https://example.cypress.io')

//     cy.contains('type').click()
//     cy.url().should('include', '/commands/actions')
//     cy.get('.action-email').type('fake@email.com')
//     cy.get('.action-email').should('have.value', 'fake@email.com')
//   })
// })

describe('My second test', () => {
  it('visits a site and books tickets', () =>{
    cy.visit('https://www.cp.pt/passageiros/en/buy-tickets')
    // cy.contains('From')
    cy.get('[name="textBoxPartida"]').type('Lagos')
    cy.wait(1000)
    cy.get('[name="textBoxPartida"]').type('{enter}')
    cy.get('[name="textBoxPartida"]').should('have.value', 'Lagos')
    cy.get('[name="textBoxChegada"]').type('Porto Campanha')
    cy.wait(1000)
    cy.get('[name="textBoxChegada"]').type('{enter}')
    cy.get('[name="textBoxChegada"]').should('have.value', 'Porto Campanha')
    cy.get('[name="departDate"]').click()
    cy.get('button').contains('8').click()
  })
})