import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Utils } from '@platform/functions/index';
import { ItemApi } from '@platform/api';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Page } from '@platform/theme/Page';
import ExampleApi from '@platform/api/Example';

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
  const [dashboardItems, setDashboardItems] = useState({});
  useEffect(() => {
    setDashboardItems(ExampleApi());
    setLoading(false);
  }, []);
  const checkIfNumber = (number: any) => {
    if (typeof number === 'number') {
      return number;
    }
    return 0;
  };
  return (
    <Page>
      <div className={classes.root}>
        <Typography variant='h4' component='h2'>
          This is the Admin App
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={3}>
            <TextField
              fullWidth={true}
              label='First Number'
              onChange={e =>
                setFirstNumber(checkIfNumber(parseInt(e.target.value)))
              }
            />
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <TextField
              fullWidth
              label='Second Number'
              onChange={e =>
                setSecondNumber(checkIfNumber(parseInt(e.target.value)))
              }
            />
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <Paper className={classes.paper}>
              Difference is : {Utils.subtract(firstNumber, secondNumber)}
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <Paper className={classes.paper}>
              Sum is : {Utils.sum(firstNumber, secondNumber)} Souvlakia & loukaniko
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Page>
  );
}
