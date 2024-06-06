import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import StudentList from '../StudentList';
import StyledComponentsRegistry from '../../../lib/AntdesignRegistry';
import { ReduxProvider } from '../../../redux/provider';

// jest.mock('../../../redux/api/studentApi');

it('should render a table with columns for student first name, surname, phone number, national ID, and date of birth', () => {
  // Arrange
  const mockData = [
    { firstname: 'John', surname: 'Doe', student_number: '1234567890', nationalId: '123456789', dob: '1990-01-01' },
    { firstname: 'Jane', surname: 'Smith', student_number: '0987654321', nationalId: '987654321', dob: '1995-05-05' },
  ];

  window.matchMedia = jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // You can also use jest.fn() for addListener and removeListener if needed
    removeListener: jest.fn(),
  }));
  
  // Mock the useGetStudentsQuery hook

  jest.mock('../../../redux/api/studentApi', () => ({
        useGetStudentsQuery: jest.fn(() => ({
          data: {
            data: mockData
          },
          isLoading: false,
          isSuccess: true,
          isError: false,
          error: null
        }))
      }));
  // Render the component
  render(
    <ReduxProvider>
      <StyledComponentsRegistry>
        <StudentList />
      </StyledComponentsRegistry>
    </ReduxProvider>
  );

  // Assert
   expect(screen.getByText('First Name')).toBeInTheDocument();
      expect(screen.getByText('Surname')).toBeInTheDocument();
      expect(screen.getByText('Phone Number')).toBeInTheDocument();
      expect(screen.getByText('National ID')).toBeInTheDocument();
      expect(screen.getByText('Date of Birth')).toBeInTheDocument();
}
);
