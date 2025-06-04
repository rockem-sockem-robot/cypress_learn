// describe('My first test', () => {
//   it('Visits the kitchen sink', () => {
//     cy.visit('https://example.cypress.io')

//     cy.contains('type').click()
//     cy.url().should('include', '/commands/actions')
//     cy.get('.action-email').type('fake@email.com')
//     cy.get('.action-email').should('have.value', 'fake@email.com')
//   })
// })

// I used firefox to dig into all the elements to find out what the hell they are called
// references:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date

describe('My second test', () => {
  it('visits a site and books tickets', () =>{
    const today = new Date()
    const departDate = new Date()
    const returnDate = new Date()
    departDate.setDate(today.getDate()+3)
    returnDate.setDate(today.getDate()+5)
    const formatDate = (date) => date.toLocaleDateString('en-GB').replace(/\//g, '-'); // DD-MM-YYYY
    cy.visit('https://www.cp.pt/passageiros/en/buy-tickets')
    // cy.contains('From')
    cy.get('[name="textBoxPartida"]').type('Lagos')
    cy.wait(1000) // there's a ui interaction that I don't know
    cy.get('[name="textBoxPartida"]').type('{enter}')
    cy.get('[name="textBoxPartida"]').should('have.value', 'Lagos')
    cy.get('[name="textBoxChegada"]').type('Porto Campanha')
    cy.wait(1000)
    cy.get('[name="textBoxChegada"]').type('{enter}')
    cy.get('[name="textBoxChegada"]').should('have.value', 'Porto Campanha')

    // Dates need to be selected with the date picker and not text. Annoying
    cy.get('[name="departDate"]').click()
    cy.get('.picker__day')
    .not('.picker__day--outfocus') // Avoid inactive days from other months
    .contains(departDate.getDay())
    .click()
    cy.get('.picker__day').should('not.be.visible')
    // The date picker is shared between calendars or something. The return date can't be selected easily because the old one is still active

    cy.get('[name="returnDate"]').click()
    cy.get('.picker__day')
    .not('.picker__day--outfocus') // Avoid inactive days from other months
    .contains(returnDate.getDay())
    .click()
    
    cy.get('#btnBuy').click()
  })
})