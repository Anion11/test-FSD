import { Layout, Row, Typography } from 'antd';
import styles from './styles.module.scss';
import TaskList from '../../widgets/TasksList/Taskslist';

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
          <TaskList />
        </Row>
      </Layout.Content>
    </Layout>
  );
};

export default MainPage;
