import Task from '../../entities/task/ui';
import { variant, list } from '@effector/reflect';
import { Col, Spin } from 'antd';
import {
  $tasksList,
  $tasksListLoading,
  effects,
} from '../../entities/task/model';
import { combine } from 'effector';

const TaskList = () => {
  return <PageContent />;
};

const ListItemView: React.FC<{ task: import('../../shared/api').Task }> = ({
  task,
}) => {
  return (
    <Col
      key={task.id}
      span={24}
    >
      <Task
        data={task}
        titleHref={`/task/${task.id}`}
      />
    </Col>
  );
};

const TasksList = list({
  view: ListItemView,
  source: $tasksList,
  bind: {},
  mapItem: {
    task: (task) => task,
  },
});

const PageContent = variant({
  source: combine(
    {
      isLoading: $tasksListLoading,
    },
    ({ isLoading }) => {
      if (isLoading) return 'loading';
      return 'ready';
    },
  ),
  cases: {
    loading: () => <Spin size="large" />,
    ready: TasksList,
  },
  hooks: {
    mounted: effects.getTasksListFx.prepend(() => {}),
  },
});

export default TaskList;
