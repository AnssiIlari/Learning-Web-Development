import { render, screen, fireEvent } from '@testing-library/react';
// import matchers from '@testing-library/jest-dom/matchers';
import '@testing-library/jest-dom';
import App from './App';

// expect.extend(matchers);

// Note! You can also use not keyword if you want to check
// that something doesn't exist, for example
// expect(header).not.toBeInTheDocument().
test('renders App component', () => {
    render(<App />);
    const header = screen.getByText('My Todolist');
    expect(header).toBeInTheDocument();
});

test('add todo',() => {
    render(<App/>);
  
    const desc = screen.getByPlaceholderText('Description');
    fireEvent.change(desc, { target: { value: 'Go to coffee' } });
    const date = screen.getByPlaceholderText('Date');
    fireEvent.change(date, { target: { value: '29.12.2023' } });
    const status = screen.getByPlaceholderText('Status');
    fireEvent.change(status, { target: { value: 'Open' } });
    const button = screen.getByText('Add');
    fireEvent.click(button);

    const table = screen.getByRole('table');
    expect(table).toHaveTextContent('Go to coffee');

    const clearButton = screen.getByText('Clear Todos');
    fireEvent.click(clearButton);

    // Check that the todo item has been removed
    expect(table).not.toHaveTextContent('Go to coffee');
  })