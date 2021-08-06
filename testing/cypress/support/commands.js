// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

let customer;
let provider;

/**
 * A command to extract the provider data in the fixture files
 */
Cypress.Commands.add('provider', () => {
  if (provider) return cy.wrap(provider);
  cy.fixture('provider').then((res) => {
    provider = res;
    cy.wrap(provider);
  });
});

/**
 * A command to extract the customer data in the fixture files
 */
Cypress.Commands.add('customer', () => {
  if (customer) return cy.wrap(customer);
  cy.fixture('customer').then((res) => {
    customer = res;
    cy.wrap(customer);
  });
});

/**
 * A command to more easily get an element that has a data-test-id attribute
 */
Cypress.Commands.add('getByTestId', (selector, timeout?) => {
  return cy.get(`[data-test-id="${selector}"]`, { timeout });
});
