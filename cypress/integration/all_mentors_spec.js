describe("/mentors", function() {
  it("displays all mentors", function() {
    cy.visit("localhost:3000/#/mentors")
    cy.get(".card-wrapper")
    cy.should("contain", "Newt Scamander")
  });
});