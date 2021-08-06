/// <reference types="cypress" />

describe('Example Setup', () => {
  let customer;
  let provider;
  
  before(() => {
    // This is how you restore the DB so you can re-create accounts etc
    cy.request('GET', `${Cypress.env('backendUrl')}/restore-db`);
    
    // This is how you load the static data from the local fixture files.
    cy.provider().then(r => (provider = r));
    cy.customer().then(r => (customer = r));
    
    // This is how you, once logged in, disable all tooltips
    cy.setTooltips();
  });
  
  it('visit dooli', () => {
    cy.visit('/');
    cy.url().should('contain', '/');
  });
})
