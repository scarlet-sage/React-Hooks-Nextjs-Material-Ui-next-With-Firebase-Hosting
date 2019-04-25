// https://github.com/zeit/next.js/#custom-document
/**
 * React
 */
import React from 'react';
/**
 * Next
 */
import Document, {Head, Main, NextScript} from 'next/document';
/**
 * Material-UI
 */
import {ServerStyleSheets} from '@material-ui/styles';
import flush from 'styled-jsx/server';
import theme from '../config/theme';

/**
 * MuiDocument
 */
class MuiDocument extends Document {
  render() {
    return (
      <html lang="ja">
      <Head>
        <meta charSet="utf-8"/>
        {/* Use minimum-scale=1 to enable GPU rasterization */}
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"/>
        {/* PWA primary color */}
        <meta name="theme-color" content={theme.palette.primary.main}/>
        <link rel='preload' as='style' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500'/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"/>
      </Head>
      <body>
      <Main/>
      <NextScript/>
      </body>
      </html>
    );
  }
}

/**
 * @param ctx
 * @returns {Promise<*>}
 */
MuiDocument.getInitialProps = async ctx => {
  /*
   * Resolution order
   *
   * On the server:
   * 1. app.getInitialProps
   * 2. page.getInitialProps
   * 3. document.getInitialProps
   * 4. app.render
   * 5. page.render
   * 6. document.render
   *
   * On the server with error:
   * 1. document.getInitialProps
   * 2. app.render
   * 3. page.render
   * 4. document.render
   *
   * On the client
   * 1. app.getInitialProps
   * 2. page.getInitialProps
   * 3. app.render
   * 4. page.render
   */

  // Wraps styled Provider
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;
  ctx.renderPage = () => originalRenderPage({enhanceApp: App => props => sheets.collect(<App {...props} />)});

  // Get existing props
  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: (
      <React.Fragment>
        {sheets.getStyleElement()}
        {flush() || null}
      </React.Fragment>
    ),
  };
};

export default MuiDocument;
