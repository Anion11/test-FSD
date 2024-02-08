import { RouteProps } from 'react-router';
import { TestPage, MainPage } from '@/pages';

export const routeConfig: Record<string, RouteProps> = {
  main: {
    path: '/test',
    element: <TestPage />,
  },

  // last
  test: {
    path: '/',
    element: <MainPage />,
  },
};
