it('should verify link text', () => {
    cy.visit('/');
  cy.get('.App-link').should('contain', 'Learn React');
});
