import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import {
  createFrontloadState,
  frontloadServerRender
} from 'react-frontload';
import { Helmet } from "react-helmet";
import cssLinksFromAssets from 'server/utils/cssLinksFromAssets';
import jsScriptTagsFromAssets from 'server/utils/jsScriptTagsFromAssets';
import App from 'App';


async function renderApp(req, res) {

  const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

  const context = {};
  const frontloadState = createFrontloadState.server({
    context: context
  });

  const helmet = Helmet.renderStatic();

  const {
    rendered,
    data
  } = await frontloadServerRender({
    frontloadState,
    render: () => renderToString(
      <StaticRouter context={context} location={req.url}>
        <App frontloadState={frontloadState} />
      </StaticRouter>
    )
  });

  const cssLinks = cssLinksFromAssets(assets, 'client');
  const scriptTags = jsScriptTagsFromAssets(assets, 'client', ' defer crossorigin');
  const title = helmet.title.toString();
  const meta = helmet.meta.toString();
  const link = helmet.link.toString();

  return {
    context,
    rendered,
    cssLinks,
    scriptTags,
    data,
    title,
    meta,
    link
  };

}

export default renderApp;
