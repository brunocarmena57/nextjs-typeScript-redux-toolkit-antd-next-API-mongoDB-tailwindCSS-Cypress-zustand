describe("Add Teacher", () => {
  it("should add a new teacher", () => {
    // Visit the page where the component is rendered
    cy.visit("/teacher");

    // Open the add teacher modal
    cy.get('[data-cy="add_teacher_modal_button"]').click();

    // Fill in the form
    cy.get("[data-cy=nationalId_input]").type("123456789");
    cy.get("[data-cy=firstName_input]").type("Bruno");
    cy.get("[data-cy=surname_input]").type("Carmena");
    cy.get("[data-cy=dob_input]").type("2000-01-01");
    cy.get("[data-cy=phone_input]").type("1234567890");
    cy.get("[data-cy=salary_input]").type("1234567890");
    cy.get("[data-cy=title_input]").select("Professor");

    // Submit the form
    cy.get("[data-cy=add_teacher_button]").click();

    // Wait for success
    cy.wait(3000);
    cy.contains("Professor adicionado com sucesso!").should("be.visible");

    // Confirm that the modal is closed
    cy.get(".ant-modal-content").should("not.exist");
  });
});
