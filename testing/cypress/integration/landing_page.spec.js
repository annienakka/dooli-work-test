/// <reference types="cypress" />

describe('My First Test', () => {
  it('visit dooli', () => {
    cy.visit('/');
    cy.url().should('contain', '/');
  })
  
  it('Here comes the first step', () => {
    expect(true).to.equal(true)
  })
  
  it('Here comes the second step', () => {
    expect(true).to.equal(true)
  })
})
