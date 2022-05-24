const express = require('express');
const lhci = require('@lhci/server');

(async () => {
  const app = express();
  const {app: lhciApp} = await lhci.createApp({
    storage: {
      storageMethod: 'sql',
      sqlDialect: 'sqlite',
      // see configuration...
    },
  });

  app.use((req, res, next) => handleCustomAuthentication(req, res, next));
  app.use(lhciApp);
  app.listen();
})();