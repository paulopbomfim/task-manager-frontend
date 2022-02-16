import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { api } from '../services/api';
import { App } from '../App';

jest.mock('../services/api');

describe('Test render all tasks', () => {
  const apiData = {
    data: {
      tasks: [
        {
          id: 1,
          description: 'Finalizar front end',
          createdAt: '2022-02-15T16:13:20.489Z',
          status: 'pending',
        },
        {
          id: 2,
          description: 'Finalizar back end',
          createdAt: '2022-02-15T16:13:20.489Z',
          status: 'doing',
        },
        {
          id: 3,
          description: 'Finalizar projeto',
          createdAt: '2022-02-15T16:13:20.489Z',
          status: 'complete',
        },
      ],
    }
  }


  it('Should render a table with tasks from api', async () => {

    api.get.mockResolvedValue(apiData);
    

    render(<App />);

    const task = await screen.findByText(/finalizar front end/i);
    expect(task).toBeInTheDocument();
    
    const taskCell = screen.getByRole('cell', { name: /finalizar back end/i });
    expect(taskCell.nodeName).toBe('TD');
    expect(taskCell.parentElement.nodeName).toBe('TR');

    const selectTag = screen.getAllByRole('combobox');
    expect(selectTag[0].nodeName).toBe('SELECT');
    expect(selectTag[0].children.length).toBe(3);
  });
});
