import { makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useForm, SubmitHandler } from 'react-hook-form';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  paper: {
    padding: theme.spacing(2),
    marginHorizontal: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  formClass: {},
  submitBtn: {
    marginTop: '10px',
    marginBottom: '10px'
  },
  loginContainer: {
    padding: theme.spacing(3)
  },
  submitContainer: {
    display: 'flex',
    justifyContent: 'center'
  }
}));
type Inputs = {
  username: string;
  password: string;
};
export default function Index() {
  const classes = useStyles();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => {
    window.location.replace('/dashboard');
  };

  return (
    <div className={classes.root}>
      <Grid container direction='row' justify='center' alignItems='center'>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Paper elevation={3} className={classes.loginContainer}>
            <Typography component='h2' align='center'>
              Login
            </Typography>
            <form
              className={classes.formClass}
              noValidate
              autoComplete='off'
              onSubmit={handleSubmit(onSubmit)}
            >
              <TextField
                id='username_field'
                label='User Name'
                fullWidth
                margin='normal'
                {...register('username', { required: true })}
              />
              <TextField
                id='password_Field'
                label='Password'
                fullWidth
                margin='normal'
                error={Boolean(errors.password)}
                {...register('password', { required: true })}
              />
              <div className={classes.submitContainer}>
                <Button
                  className={classes.submitBtn}
                  type='submit'
                  color='primary'
                  variant='contained'
                >
                  Login
                </Button>
              </div>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
