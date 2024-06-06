import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import AddStudentModal from '../AddStudentModal';
import StyledComponentsRegistry  from '../../../lib/AntdesignRegistry';
import { ReduxProvider } from '../../../redux/provider'

    // Renders a modal with input fields for national ID, first name, surname, date of birth, and phone number.
    it('should render a modal with input fields for national ID, first name, surname, date of birth, and phone number', () => {
      // Arrange
      const isModalOpen = true;
      const setOpenModal = jest.fn();
  
      // Act
      render(<ReduxProvider>
          <StyledComponentsRegistry>
            <AddStudentModal
              isModalOpen={isModalOpen}
              setOpenModal={setOpenModal}
            />
          </StyledComponentsRegistry>
        </ReduxProvider>);
  
      // Assert
      expect(screen.getByTestId('nationalId')).toBeInTheDocument();
      expect(screen.getByTestId('firstName')).toBeInTheDocument();
      expect(screen.getByTestId('surname')).toBeInTheDocument();
      expect(screen.getByTestId('dob')).toBeInTheDocument();
      expect(screen.getByTestId('phoneNumber')).toBeInTheDocument();
    });