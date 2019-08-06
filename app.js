const express = require('express');
const path = require('path');
const fs = require('fs');
const https = require('https');

require('events').defaultMaxListeners = Infinity;
// 환경세팅
const environment = require('./config/environment');

// 라우터 세팅
const route = require('./config/routes');

// 1. Run server
(() => {
  const app = express();

  environment(app);
  route(app);

  if (global.config.app.env !== 'production') {
    app.use('/apidocs', express.static(path.join(__dirname, './docs')));
  }

  if (global.config.http.enable) {
    const httpServ = app.listen(global.config.http.port, () => {
      console.log('[%s] (http) listening on port [%s]', global.config.app.name, httpServ.address().port);
      console.log('---------------------------------------------------------------');
    });
  }

  if (global.config.https.enable) {
    const httpsServ = https.createServer({
      key: fs.readFileSync(global.config.https.key),
      cert: fs.readFileSync(global.config.https.cert),
      passphrase: global.config.https.passphrase,
    }, app);
    httpsServ.listen(global.config.https.port, () => {
      console.log('[%s] (https) listening on port [%s]', global.config.app.name, httpsServ.address().port);
      console.log('---------------------------------------------------------------');
    });
  }
})();

function shutdown(e) {
  console.error(e);
  Promise.all([
  /*
    new Promise((rs, rj) => {
        mongo.close(() => {
            return rs();
        });
    }),
    new Promise((rs, rj) => {
        redis.close(() => {
            return rs();
        });
    })

  */
  ]).then(() => {
    setTimeout(() => {
      console.log('* Closed all connections');
      process.exit(0);
    }, 300);
  }).catch((err) => {
    setTimeout(() => {
      console.error('* Error has occurred when closing connections');
      console.error(err);
      process.exit(1);
    }, 300);
  });
}

// 2. Close connection before shutdown
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
