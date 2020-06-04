describe("Home Page", () => {
    beforeEach(() => {
      // runs before each test in the block
      cy.visit("http://localhost:3000");
    });
  
    it("has a Header", () => {
      // a header element with class Login-header
      cy.get("header.Login-header").should("exist");
    });
  
  });