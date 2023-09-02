/// <reference types="cypress" />

describe("Click on article link and open the recent article", () => {
  beforeEach("Visit recent article", () => {
    cy.viewport("macbook-16");
    cy.visit("http://localhost:3000/");
  });

  it('Click on Log In in nav', () => {
    cy.get('[data-cy="navigation"]').get('button').contains('Log In').click();
    cy.get('[data-cy="email-input"]').type('Jirka');
    cy.get('[data-cy="password-input"]').type('12345');
    cy.get('[data-cy="login-form"]').find('button').contains('Log In').click()
    cy.url().should('eq', 'http://localhost:3000/my-articles')
  })
})
