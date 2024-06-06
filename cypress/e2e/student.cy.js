describe("Go to the Student Page", () => {
  beforeEach(() => {
    cy.visit("/student");
  });

  it("should click on the Add Student button", () => {
    cy.get('[data-cy="add_student_button"]').click();
  });
});
