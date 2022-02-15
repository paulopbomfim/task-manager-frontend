import { useState } from 'react';
import { PropTypes } from 'prop-types';

import AddImg from '../../assets/add.svg';

export function NewTask({ inputEntry, onInputChange, onRequestCreateNewTask }) {
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
        <input
          type="text"
          placeholder="Nova tarefa"
          value={inputEntry}
          onChange={(event) => onInputChange(event.target.value)}
        />
        <button
          type="button"
          data-testid="addTaskButton"
          onClick={onRequestCreateNewTask}
        >
          Adicionar tarefa
        </button>
      </div>
    );
}

NewTask.propTypes = {
  inputEntry: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onRequestCreateNewTask: PropTypes.func.isRequired,
};
