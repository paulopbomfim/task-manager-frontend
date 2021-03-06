import { PropTypes } from 'prop-types';

import TrashImg from '../../assets/trash.svg';

export function AllTasks({ apiData, onRequestDeleteTask, onRequestUpdateTaskStatus }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Data de criação</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            apiData.map((data) => (
              <tr key={data.id}>
                <td>{data.description}</td>
                <td>{data.createdAt}</td>
                <td>
                  <select
                    value={data.status}
                    onChange={({ target }) => onRequestUpdateTaskStatus(data.id, target.value)}
                  >
                    <option value="pending">Pendente</option>
                    <option value="doing">Em andamento</option>
                    <option value="complete">Concluído</option>
                  </select>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => onRequestDeleteTask(data.id)}
                  >
                    <img src={TrashImg} alt="Remover tarefa" />
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

AllTasks.propTypes = {
  apiData: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRequestDeleteTask: PropTypes.func.isRequired,
  onRequestUpdateTaskStatus: PropTypes.func.isRequired,
};
