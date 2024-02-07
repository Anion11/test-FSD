import { lazy } from 'react';
import { Route } from 'react-router-dom';

const TestPage = lazy(() => import('./test/test'));

export const Routing = () => {
  return (
    <Route
      path="/"
      element={<TestPage />}
    />
  );
};
