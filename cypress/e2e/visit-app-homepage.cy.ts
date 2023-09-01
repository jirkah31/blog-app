/// <reference types="cypress" />

describe("Load app", () => {
  beforeEach("Visit app", () => {
    cy.visit("http://localhost:3000/");
  });

  it('Home page have navigation with buttons', () => {
    cy.get('[data-cy="navigation"]')
      .find('li')
      .children('button')
      .children('a')
      .should('have.length.at.least', 3)
  })

  it('Home page have at least one article', () => {
    cy.get('[data-cy="article"]').should('have.length.at.least', 1);
  });
});
