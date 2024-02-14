import { Layout, Row, Col, Typography, Spin, Empty } from 'antd';
import { variant, list } from '@effector/reflect';
import { combine } from 'effector';
import styles from './styles.module.scss';
import Task from '../../entities/task/ui';
import {
  $tasksFiltered,
  $tasksListEmpty,
  $tasksListLoading,
  effects,
} from '../../entities/task/model';

const MainPage = () => {
  return (
    <Layout className={styles.root}>
      <Layout className={styles.toolbar}>
        {/* ~ Layout.Toolbar */}
        <Row justify="center">
          <Typography.Title level={1}>Tasks List</Typography.Title>
        </Row>
      </Layout>
      <Layout.Content className={styles.content}>
        <Row
          className={styles.contentRow}
          gutter={[0, 20]}
          justify="center"
        >
          <PageContent />
        </Row>
      </Layout.Content>
    </Layout>
  );
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
        titleHref={`/${task.id}`}
      />
    </Col>
  );
};

// Использование effector-reflect здесь опционально и некритично в рамках методологии
const TasksList = list({
  view: ListItemView,
  source: $tasksFiltered,
  bind: {},
  mapItem: {
    task: (task) => task,
  },
});
// Использование effector-reflect здесь опционально и некритично в рамках методологии
const PageContent = variant({
  source: combine(
    {
      isLoading: $tasksListLoading,
      isEmpty: $tasksListEmpty,
    },
    ({ isLoading, isEmpty }) => {
      if (isLoading) return 'loading';
      if (isEmpty) return 'empty';
      return 'ready';
    },
  ),
  cases: {
    loading: () => <Spin size="large" />,
    empty: () => <Empty description="No tasks found" />,
    ready: TasksList,
  },
  hooks: {
    mounted: effects.getTasksListFx.prepend(() => {}),
  },
});

export default MainPage;
