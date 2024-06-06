describe("Update Teacher", () => {
    it("should update an existing teacher", () => {
      // Visit the page where the component is rendered
      cy.visit("/teacher");

      // Open the update Teacher modal
      cy.get('[data-cy="update_teacher_modal_button"]').first().click();
  
      // Clear Form
      cy.get("[data-cy=nationalId_input]").clear();
      cy.get("[data-cy=firstName_input]").clear();
      cy.get("[data-cy=surname_input]").clear();
      cy.get("[data-cy=dob_input]").clear();
      cy.get("[data-cy=phone_input]").clear();
      cy.get("[data-cy=salary_input]").clear();

      // Fill in the form
      cy.get("[data-cy=nationalId_input]").type("0987654321");
      cy.get("[data-cy=firstName_input]").type("Gustavo");
      cy.get("[data-cy=surname_input]").type("Silva");
      cy.get("[data-cy=dob_input]").type("2003-11-21");
      cy.get("[data-cy=phone_input]").type("0987654321");
      cy.get("[data-cy=salary_input]").type("0987654321");
      cy.get("[data-cy=title_input]").select("Doutor");
  
      // Submit the form
      cy.get("[data-cy=update_teacher_button]").click();
  
      // Wait for success
      cy.wait(3000);
      cy.contains("Professor atualizado com sucesso!").should("be.visible");
  
      // Confirm that the modal is closed
      cy.get(".ant-modal-content").should("not.exist");
    });
  });
  