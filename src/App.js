import { Switch } from 'react-router-dom';
import { FrontloadProvider } from 'react-frontload';
import AppRouter from 'config/router/app-router';

const App = ({ frontloadState }) => (
  <FrontloadProvider initialState={frontloadState}>
    <Switch>
      <AppRouter />
    </Switch>
  </FrontloadProvider>
);

export default App;
