import React, {useContext} from 'react';

import {makeStyles} from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import ProTip from '../components/ProTip';
import Link from '../components/Link';

import {CounterContext} from "../contexts/counter"

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  }
}));

export default function Counter() {

  const {
    count,
    reset,
    increment,
    decrement,
  } = useContext(CounterContext);

  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Box my={4}>

        <Typography variant="h4" component="h1" gutterBottom>
          Next.js v4-alpha example
        </Typography>

        <Grid container justify="center" alignItems="center">
          <Grid item>
            <Typography variant="h4" component="h1" gutterBottom>
              Count:{count}
            </Typography>
          </Grid>
        </Grid>

        <Grid container justify="center" alignItems="center">

          <Grid item>
            <Button variant="outlined"
                    color="primary"
                    className={classes.button}
                    onClick={() => increment()}>Increment</Button>

          </Grid>
          <Grid item>
            <Button variant="outlined"
                    color="secondary"
                    className={classes.button}
                    onClick={() => decrement()}>Decrement</Button>
          </Grid>
          <Grid item>

            <Button variant="outlined"
                    color="default"
                    className={classes.button}
                    onClick={() => reset()}>Reset</Button>

          </Grid>
        </Grid>

        <Typography variant="body1" component="h6" gutterBottom>
          <Link href="/">Go to the main page</Link>
        </Typography>

        <ProTip/>

      </Box>
    </Container>
  );
}