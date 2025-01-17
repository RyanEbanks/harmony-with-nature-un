describe('Page Navigation', () => {

  //Before Each test visit the home page
  beforeEach(() => {
    cy.visit('localhost:3000')
  });

  it('should display logos and menu button on small screens', () => {
    cy.viewport('iphone-6'); // Simulate mobile view
    cy.get('img[alt="Main Website Logo"]').should('be.visible');
    cy.get('img[alt="Affiliated Website Logo"]').should('be.visible');
    cy.get('button').contains('CiMenuBurger').should('exist');
  });
})