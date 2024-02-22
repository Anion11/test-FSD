import { RouteProps } from 'react-router';
import { TestPage, MainPage } from '../../pages';
import TaskPage from '../../pages/task/Task';
export const routeConfig: Record<string, RouteProps> = {
  main: {
    path: '/',
    element: <MainPage />,
  },

  test: {
    path: '/test',
    element: <TestPage />,
  },

  task: {
    path: '/task/',
    element: <TaskPage />,
  },
};
