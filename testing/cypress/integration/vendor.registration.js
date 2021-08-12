/// <reference types="cypress" />

describe('Vendor registrations', () => {
  let customer;
  let provider;

  before(() => {
    // This is how you load the static data from the local fixture files.
    cy.provider().then(r => (provider = r));
    cy.customer().then(r => (customer = r));

    // This is how you restore the DB so you can re-create accounts etc
    cy.request('GET', `${Cypress.env('backendUrl')}/restore-db`);
  });

  it('Use Case 0: Open GUI, has web FE deployed successfully', () => {
    cy.visit('/');
    cy.url().should('contain', '/');
  });

  it('Use Case 1: Register a valid vendor with one profile category, option: bankgiro, option: phone, option: newsletter', () => {
    const companyName = "Murarbolaget AB";
    const companyDescripton = "Erfaret team av murare, 25 år i branschen. Referensprojekt: Badstugan AB 2020, oms ca 2.5 MSEK. Maila/ring oss för kontaktuppgifter ang. detta projekt. Vi har AAA kreditrating.";
    cy.visit('/');
    cy.url().should('contain', '/');
    cy.contains(/Anslut f/).click();
    cy.log(" ** Register new company - page 1 - pnumber + bankid");
    cy.getByTestId("input-pnr").type(provider["pnr"]);

    cy.getByTestId("accept-terms").get('[type="checkbox"]').check({force: true});
    cy.getByTestId("button-submit").click();
    cy.log(" ** Register new company - page 2 - orgnr, billing, contact+");
    cy.log("Verify new page is loaded");
    cy.getByTestId("input-orgNr").should('exist');
    cy.getByTestId("input-orgNr").should('be.visible');
    //
    cy.log("** Workaround: force input element 'input-orgNr' to be ready for input by adding dummy data, ");
    cy.log("on Ubuntu 20.04, chrome amd64-90.0.4430.72");
    cy.log("1-6 initial characters was dropped intermittently");
    cy.log("same behavior was observed on three browsers: chrome 90.0.4430.72, firefox 90 and cypress electron 87");
    cy.getByTestId("input-orgNr").type("{shift}", {delay: 1 });
    cy.getByTestId("input-orgNr").type("{end}{backspace}", {delay: 1 });
    //
    // TODO product/backend side improvement: do a prefetch of org numbers before validation data is used, since it takes long time
    cy.getByTestId("input-orgNr").type(provider["orgNr"]);
    cy.getByTestId("input-bankgiroNr").should('exist');
    cy.getByTestId("input-bankgiroNr").type(provider["bankgiroNr"]);
    cy.getByTestId("input-email").should('exist');
    cy.getByTestId("input-email").type(provider["email"]);
    cy.getByTestId("input-phone").should('exist');
    cy.getByTestId("input-phone").type(provider["phone"]);
    cy.get('[type="checkbox"]').check({force: true});
    //
    cy.log("This call can be very long until clickable, possibly due to execution time of verification of orgnr that is not predictable.");
    cy.getByTestId("button-submit").get('[class="icon-button"]', { timeout: 90000 });
    cy.getByTestId("button-submit").click();
    //
    cy.log(" ** Register new company - page 3 - category");
    cy.log("Verify page is loaded, check on clickable category.");
    cy.getByTestId("construction").should('be.visible');
    //
    cy.getByTestId("construction").should('be.visible');
    cy.getByTestId("construction").click();
    cy.getByTestId("brickLayer").should('be.visible');
    cy.getByTestId("brickLayer").click();
    cy.getByTestId("brickFacade").should('be.visible');
    cy.getByTestId("brickFacade").click();
    //
    cy.log("Assert visibility of choice");
    cy.log("Assert category included in dynamic url");
    cy.getByTestId("button-submit").should('have.attr', 'href').and('include', 'brickFacade');
    cy.getByTestId("button-submit").click();
    cy.log(" ** Register new company - page 4 - company name+");
    cy.log("Check that page has loaded.");
    cy.getByTestId("button-submit-wide").should('be.visible');
    // Workaround:
    cy.getByTestId("input-profileName").type("{shift}a");
    cy.getByTestId("input-profileName").type("{end}{backspace}");
    //
    cy.getByTestId("input-profileName").type(companyName, {delay: 1 });
    cy.getByTestId("input-profileDescription").type(companyDescripton, {delay: 1 });
    cy.getByTestId("button-submit-wide").click();
    //
    cy.visit("/account");
    cy.log("Wait for the page to be loaded");
    cy.get('[href="/profile/create?return_url=%2Faccount"]').should('be.visible');
    //
    cy.log("Verify that company has been created with company name.");
    cy.get('p')
        .each(($p, index, $ps) => {
          if ($p.text() === companyName) {
            cy.log($p.text());
            assert(true, "company name was found on /account");
          }
        });
  });

  it('Use Case 2: Negative: Register a vendor with an invalid organisation id', () => {
    // test parameter data
    const pNr = "197711112222";
    const orgNr = "5565444444";
    const errorTextLocaleSwe = "Organisationsnumret kunde inte hittas";
    //
    cy.visit('/');
    cy.url().should('contain', '/');
    cy.contains(/Anslut f/).click();
    cy.log(" ** Register new company - page 1 - pnumber + bankid");
    cy.getByTestId("input-pnr").type(pNr);
    //
    cy.getByTestId("accept-terms").get('[type="checkbox"]').check({force: true});
    cy.getByTestId("button-submit").click();
    cy.log(" ** Register new company - page 2 - WRONG orgnr, billing, contact+");
    cy.log("Verify new page is loaded");
    cy.log("Can be very slow to load on occasion, therefore a higher timeout");

    cy.getByTestId("input-orgNr").should('exist');
    cy.getByTestId("input-orgNr").should('be.visible');
    //
    cy.log("** Workaround: force input element 'input-orgNr' to be ready for input by adding dummy data, ");
    cy.log("on Ubuntu 20.04, chrome amd64-90.0.4430.72");
    cy.log("1-6 initial characters was dropped intermittently");
    cy.log("same behavior was observed on three browsers: chrome 90.0.4430.72, firefox 90 and cypress electron 87");
    cy.getByTestId("input-orgNr").type("{shift}", {delay: 1 });
    cy.getByTestId("input-orgNr").type("{end}{backspace}", {delay: 1 });
    //
    cy.getByTestId("input-orgNr").type(orgNr);
    cy.getByTestId("input-bankgiroNr").should('exist');
    cy.getByTestId("input-bankgiroNr").type(provider["bankgiroNr"]);
    cy.getByTestId("input-email").should('exist');
    cy.getByTestId("input-email").type(provider["email"]);
    // TODO product/backend side improvement add "data-test-id" selector on the error text element
    cy.get("p", { timeout: 120000 }).get('[class="error-text summary"]', { timeout: 120000 }).should('contain', errorTextLocaleSwe);
    cy.log("Check that the button has not switched to enabled, after above error message has displayed.");
    // TODO product/backend side improvement add "data-test-id" selector on the different state of the button states: enabled or disabled
    cy.getByTestId("button-submit").get('[class="icon-button disabled"]').should('be.visible');
  });
})

