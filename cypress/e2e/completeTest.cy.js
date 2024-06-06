describe("All tests", () => {
    it("should do all the test correctly", () => {
      cy.visit("/teacher");
  
      cy.get('[data-cy="add_teacher_modal_button"]').click();
  
      cy.get("[data-cy=nationalId_input]").type("123456789");
      cy.get("[data-cy=firstName_input]").type("Bruno");
      cy.get("[data-cy=surname_input]").type("Carmena");
      cy.get("[data-cy=dob_input]").type("2000-01-01");
      cy.get("[data-cy=phone_input]").type("1234567890");
      cy.get("[data-cy=salary_input]").type("1234567890");
      cy.get("[data-cy=title_input]").select("Professor");
  
      cy.get("[data-cy=add_teacher_button]").click();
  
      cy.wait(3000);
      cy.contains("Professor adicionado com sucesso!").should("be.visible");
  
      cy.get(".ant-modal-content").should("not.exist");

      cy.get('[data-cy="update_teacher_modal_button"]').first().click();
  
      cy.get("[data-cy=nationalId_input]").clear();
      cy.get("[data-cy=firstName_input]").clear();
      cy.get("[data-cy=surname_input]").clear();
      cy.get("[data-cy=dob_input]").clear();
      cy.get("[data-cy=phone_input]").clear();
      cy.get("[data-cy=salary_input]").clear();

      cy.get("[data-cy=nationalId_input]").type("0987654321");
      cy.get("[data-cy=firstName_input]").type("Gustavo");
      cy.get("[data-cy=surname_input]").type("Silva");
      cy.get("[data-cy=dob_input]").type("2003-11-21");
      cy.get("[data-cy=phone_input]").type("0987654321");
      cy.get("[data-cy=salary_input]").type("0987654321");
      cy.get("[data-cy=title_input]").select("Doutor");
  
      cy.get("[data-cy=update_teacher_button]").click();
  
      cy.wait(3000);
      cy.contains("Professor atualizado com sucesso!").should("be.visible");
  
      cy.get(".ant-modal-content").should("not.exist");

      cy.get('[data-cy="delete_teacher_modal_button"]').first().click();
  
      cy.get("[data-cy=delete_teacher_button]").click();
  
      cy.wait(3000);
      cy.contains("Professor deletado com sucesso!").should("be.visible");
  
      cy.get(".ant-modal-content").should("not.exist");

      cy.visit("/student");

      cy.get('[data-cy="add_student_button"]').click();
  
      cy.get("[data-cy=nationalId_input]").type("123456789");
      cy.get("[data-cy=firstName_input]").type("Bruno");
      cy.get("[data-cy=surname_input]").type("Carmena");
      cy.get("[data-cy=dob_input]").type("2000-01-01");
      cy.get("[data-cy=phone_input]").type("1234567890");
  
      cy.get('[data-testid="add_student_form"] > .justify-center').click();
      cy.wait(3000);
      cy.contains("Estudante adicionado com sucesso!").should("be.visible");
  
      cy.get(".ant-modal-content").should("not.exist");
    });
  });
  