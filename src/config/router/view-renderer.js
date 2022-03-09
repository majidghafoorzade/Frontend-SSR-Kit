import { createElement } from 'react';
import routesList from "config/router";
import SSRHOC from 'server/utils/SSRHOC';


function View({ component }) {
  return (
    <SSRHOC
      getInitialData={component.getInitialData}
    >
      {createElement(component, {})}
    </SSRHOC>
  );
}

const routes = routesList.map((route) => {
  return {
    component: () => createElement(
      View, {
      component: route.component
    }
    ),
    path: route.path,
    exact: route.exact
  }
});


export default routes;
