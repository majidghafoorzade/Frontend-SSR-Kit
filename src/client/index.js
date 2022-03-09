import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createFrontloadState } from 'react-frontload';
import App from 'App';

const frontloadState = createFrontloadState.client({
  context: {},
  serverRenderedData: window._clientData
});

hydrate(
  <BrowserRouter>
    <App frontloadState={frontloadState} />
  </BrowserRouter>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
