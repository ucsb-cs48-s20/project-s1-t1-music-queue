describe("Login to Rooms", () => {
    context("When I am logged out", () => {
      beforeEach(() => {
          cy.visit("http://localhost:3000/App");
        });
      it("takes me to the login page", () => {
          cy.url().should('include', '/Login')
      });
  
  });


});