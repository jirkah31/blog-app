/// <reference types="cypress" />

describe("Click on article link and open the recent article", () => {
  beforeEach("Visit recent article", () => {
    cy.viewport("macbook-16");
    cy.visit("http://localhost:3000/");
  });

  it('Find articles links and click first article link', () => {
    cy.get('[data-cy="article"]')
      .find('[data-cy="article-link"]').first().click()

    cy.url().should('include', '/recent-article/')
    cy.get('[data-cy="title"]').invoke('text').then((text) => {
      expect(text.length).to.be.at.least(1);
    })
  })

  it('Backwards to homepage', () => {
    cy.get('[data-cy="article"]')
      .find('[data-cy="article-link"]').first().click()
    cy.get('[data-cy="navigation"]').get('button').contains('Bulldogs Article').click();
    cy.url().should('eq', 'http://localhost:3000/')
  })

});
