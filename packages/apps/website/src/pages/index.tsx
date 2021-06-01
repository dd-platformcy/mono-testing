import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Utils } from '@platform/functions/index';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

export default function Index() {
  const classes = useStyles();
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {}, []);
  const checkIfNumber = (number: any) => {
    if (typeof number === 'number') {
      return number;
    }
    return 0;
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <TextField
            label='First Number'
            onChange={e =>
              setFirstNumber(checkIfNumber(parseInt(e.target.value)))
            }
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            label='Second Number'
            onChange={e =>
              setSecondNumber(checkIfNumber(parseInt(e.target.value)))
            }
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            Difference is : {Utils.subtract(firstNumber, secondNumber)}
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            Sum is : {Utils.sum(firstNumber, secondNumber)}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
