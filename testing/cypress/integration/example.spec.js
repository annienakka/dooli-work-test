/// <reference types="cypress" />

describe('Example Setup', () => {
  let customer;
  let provider;
  
  before(() => {
    cy.request('GET', `${Cypress.env('backendUrl')}/restore-db`);
    cy.provider().then(r => (provider = r));
    cy.customer().then(r => (customer = r));
  });
  
  it('visit dooli', () => {
    cy.visit('/');
    cy.url().should('contain', '/');
  });
})
