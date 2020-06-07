
describe("Join a MusicQ", () => {
    context("When I am joining a MusicQ", () => {
      beforeEach(() => {
          cy.visit("http://localhost:3000/JoinRoom");
        });
        it("shows me the option to enter a Roomcode", () => {
          cy.contains("Join MusicQ")
        
        });

      it("shows me the option to enter a Roomcode", () => {
        cy.get('.btn').click()
        cy.contains("Wrong Key, please enter a new Key")
      
      });
  
  });

});