import React, {useContext} from 'react';

import {makeStyles} from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
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

        <Typography variant="h4" component="h1" gutterBottom color="secondary">
          count:{count}
        </Typography>

        <Button className={classes.button} onClick={() => increment()}>increment</Button>

        <Button className={classes.button} onClick={() => decrement()}>decrement</Button>

        <Button className={classes.button} onClick={() => reset()}>reset</Button>


        <Typography variant="h6" component="h6" gutterBottom>
          <Link href="/">Go to the main page</Link>
        </Typography>

        <ProTip/>
      </Box>
    </Container>
  );
}