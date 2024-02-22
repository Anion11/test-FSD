import { RouteProps } from 'react-router';
import { TestPage, MainPage } from '../../pages';

export const routeConfig: Record<string, RouteProps> = {
  main: {
    path: '/йцу',
    element: <TestPage />,
  },

  test: {
    path: '/',
    element: <MainPage />,
  },
};
