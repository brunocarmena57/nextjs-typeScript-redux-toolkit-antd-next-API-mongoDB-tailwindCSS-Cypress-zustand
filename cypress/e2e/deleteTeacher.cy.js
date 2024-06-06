describe("Delete Teacher", () => {
    it("should delete an existing teacher", () => {
      // Visit the page where the component is rendered
      cy.visit("/teacher");

      // Open the delete Teacher modal
      cy.get('[data-cy="delete_teacher_modal_button"]').first().click();
  
      // Submit the form
      cy.get("[data-cy=delete_teacher_button]").click();
  
      // Wait for success
      cy.wait(3000);
      cy.contains("Professor deletado com sucesso!").should("be.visible");
  
      // Confirm that the modal is closed
      cy.get(".ant-modal-content").should("not.exist");
    });
  });
  