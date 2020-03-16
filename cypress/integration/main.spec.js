it('should verify link text', () => {
    cy.visit('/');
  cy.get('.App-link').should('contain', 'Learn React');
  cy.get('.App-link').click();
});
