import { Suspense } from 'react';
import { Route, RouteProps, Routes } from 'react-router';
import { routeConfig } from './config';

const AppRouter = () => {
  const withRouter = (route: RouteProps) => {
    const element = <Suspense fallback="Loading...">{route.element}</Suspense>;
    return (
      <Route
        key={route.path}
        path={route.path}
        element={element}
      />
    );
  };
  return <Routes>{Object.values(routeConfig).map(withRouter)}</Routes>;
};

export default AppRouter;
