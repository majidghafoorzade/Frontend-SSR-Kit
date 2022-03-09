import { renderRoutes } from 'react-router-config';
import routes from 'config/router/view-renderer';

function AppRouter() {
  return renderRoutes(routes);
}

export default AppRouter;
