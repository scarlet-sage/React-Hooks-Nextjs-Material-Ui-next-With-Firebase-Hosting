const path = require('path');
const functions = require('firebase-functions');
const next = require('next');

/**
 *
 * @type {boolean}
 */
var dev = process.env.NODE_ENV !== 'production';
/**
 *
 * @type {DevServer}
 */
var app = next({dev, conf: {distDir: `${path.relative(process.cwd(), __dirname)}/next`}});
/**
 *
 */
var handle = app.getRequestHandler();

/**
 *
 * @type {HttpsFunction}
 */
exports.next = functions.https.onRequest((req, res) => {
  // log the page.js file that is being requested
  console.log('File: ' + req.originalUrl);

  return app.prepare().then(() => handle(req, res));

});
