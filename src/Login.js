import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'grid',
    alignItems: 'center',
    justifyItems: 'center',
    marginTop: '35vh'
  },
  textField: {
    display: 'block'
  },
  button: {
    margin: theme.spacing(1)
  }
}));
function Login() {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <div>
        <TextField
          id="standard-basic"
          className={classes.textField}
          label="Email"
          margin="normal"
        />
        <TextField
          id="standard-basic"
          className={classes.textField}
          label="Password"
          margin="normal"
        />
      </div>
      <div>
        <Button
          variant="outlined"
          className={classes.button}
          containerElement={<Link to="/dashboard" />}
          linkButton={true}
        >
          Login
        </Button>
        <Button variant="outlined" color="primary" className={classes.button}>
          Sign up
        </Button>
      </div>
    </form>
  );
}

export default Login;
