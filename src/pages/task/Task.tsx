import { getTaskById } from '../../shared/api/typicode';

const TaskPage = () => {
  const Task = getTaskById( {taskId: 10} );
  Task.then((val) => {
    return (
      <div>
        <span>
          {val.data.id}
        </span>
      </div>
    );
  })
};



export default TaskPage;
