
describe('My First Test', () => {
    it('Visits the React website', () => {
      cy.visit('http://localhost:3000/');
      cy.wait(1000);
      
    });
  });
  