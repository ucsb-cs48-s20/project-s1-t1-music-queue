
describe("Login to Rooms", () => {
      context("When I am logged in", () => {
        beforeEach(() => {
            cy.visit("http://localhost:3000/Rooms");
          });
        it("shows me the option to create a MusicQ", () => {
          cy.contains("Create a MusicQ");
        });
        it("shows me the option to join a MusicQ", () => {
          cy.contains("Join a MusicQ");
        });
        it("shows me the option to logout of Spotify", () => {
          cy.get('.btnLogout').click()
            cy.wait(500);
            cy.url().should('include', '/Login')
        });
    
    });


});


  