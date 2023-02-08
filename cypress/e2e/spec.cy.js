/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit('https://example.cypress.io')

    cy.request({
      url: 'https://cypress.io',
      qs: {
        shouldBeAnArray: [1]
      }
    })
  })
})
