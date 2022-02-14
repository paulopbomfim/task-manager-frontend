import { useState } from 'react';

import AddImg from '../../assets/add.svg';

export function NewTask() {
  const [isAddingNewTask, setIsAddingNewTask] = useState(false);

  return !isAddingNewTask
    ? (
      <button
        type="button"
        data-testid="newTaskButton"
        onClick={() => setIsAddingNewTask(true)}
      >
        <img src={AddImg} alt="Ícone de adicionar tarefa" />
        <span>Adicionar tarefa</span>
      </button>
    )
    : (
      <div>
        <input type="text" placeholder="Nova tarefa" />
        <button type="button" data-testid="addTaskButton">Adicionar tarefa</button>
      </div>
    );
}
