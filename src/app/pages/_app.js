import React from 'react';
import App, {Container} from 'next/app';

/**
 * Mui
 */
import {ThemeProvider} from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../config/theme';

/**
 * Contexts
 */
import {CounterProvider} from '../contexts/counter';

/**
 *
 */
class MuiApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const {Component, pageProps} = this.props;
    return (
      <Container>
        <ThemeProvider theme={theme}>
          <CounterProvider>
            <CssBaseline/>
            <Component {...pageProps} />
          </CounterProvider>
        </ThemeProvider>
      </Container>
    );
  }
}

export default MuiApp;
