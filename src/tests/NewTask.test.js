import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { App } from '../App';

describe('Test new task component', () => {
  it('Should render the entry input', () => {
    render(<App />);

    const newTaskButton = screen.getByTestId('newTaskButton') ;
    fireEvent.click(newTaskButton);
    
    expect(screen.getByPlaceholderText(/Nova tarefa/i)).toBeInTheDocument();
  });
  
  it('Should render the add task button', () => {
    render(<App />);

    const newTaskButton = screen.getByTestId('newTaskButton') ;
    fireEvent.click(newTaskButton);
    
    expect(screen.getByTestId('addTaskButton')).toBeInTheDocument();
  });
});
