import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';

import ProTip from '../components/ProTip';
import Link from '../components/Link';

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Built with love by the '}
      <MuiLink color="inherit" href="https://material-ui.com/">
        Material-UI
      </MuiLink>
      {' team.'}
    </Typography>
  );
}

export default function About() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>

        <Typography variant="h4" component="h1" gutterBottom>
          Next.js v4-alpha example
        </Typography>

        <Typography variant="body1" component="h6" gutterBottom>
          <Link href="/">Go to the main page</Link>
        </Typography>


        <ProTip/>

        <MadeWithLove/>

      </Box>
    </Container>
  );
}