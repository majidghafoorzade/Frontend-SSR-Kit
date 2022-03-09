import express from 'express';
import renderApp from 'server/utils/renderApp';

const server = express();
server.set('view engine', 'hbs');
server.set('views', 'src/server');

server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', async (req, res) => {

    const {
      context,
      rendered,
      cssLinks,
      scriptTags,
      data
    } = await renderApp(req, res);

    if (context.url) {
      res.redirect(context.url);
    } else {
      res.render('template', {
        markup: rendered,
        cssLinks: cssLinks,
        scriptTags: scriptTags,
        data: JSON.stringify(data),
      });
    }

  });

export default server;
