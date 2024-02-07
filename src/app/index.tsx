import { Routing } from '../pages/index';
import { withProviders } from './providers';

const App = () => {
  return (
    <div className="app">
      <Routing />
    </div>
  );
};

export default withProviders(App);
