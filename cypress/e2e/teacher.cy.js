describe("Go to the Student Page", () => {
  beforeEach(() => {
    cy.visit("/teacher");
  });

  it("should click on the Add Teacher button", () => {
    cy.get('[data-cy="add_teacher_modal_button"]').click();
  });

  it("should click on all Update Teacher buttons", () => {
    cy.get('[data-cy="update_teacher_modal_button"]').first().click();
  });
});
