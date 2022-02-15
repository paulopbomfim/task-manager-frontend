import { useState, useEffect } from 'react';

import { api } from './services/api';
import { NewTask } from './components/NewTask';
import { AllTasks } from './components/AllTasks';

import './styles/global.scss';

export function App() {
  const [apiData, setApiData] = useState([]);
  const [inputEntry, setInputEntry] = useState('');

  useEffect(() => {
    api.get('/tasks')
      .then((response) => setApiData(response.data.tasks));
  }, []);

  async function handleCreateNewTask() {
    const newTask = {
      description: inputEntry,
      createdAt: new Date(),
      status: 'pending',
    };

    const { data: { task } } = await api.post('/tasks', newTask);

    setApiData([
      ...apiData,
      task,
    ]);
  }

  return (
    <main>
      <NewTask
        inputEntry={inputEntry}
        onInputChange={setInputEntry}
        onCreateNewTask={() => handleCreateNewTask()}
      />
      <AllTasks apiData={apiData} />
    </main>
  );
}
