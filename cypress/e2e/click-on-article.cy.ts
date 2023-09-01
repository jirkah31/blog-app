/// <reference types="cypress" />

describe("Click on article link and open the recent article", () => {
  beforeEach("Visit recent article", () => {
    cy.visit("http://localhost:3000/");
  });

  it('Find articles links and click first article link', () => {
    cy.get('[data-cy="article"]')
      .find('[data-cy="article-link"]').first().click()

    cy.url().should('include', '/recent-article/')
  })

});
