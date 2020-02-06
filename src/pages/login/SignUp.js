import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
  Avatar, 
  Button,
  CssBaseline, 
  TextField, 
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  RadioGroup,
  Radio,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core';
import Gavel from '@material-ui/icons/Gavel';
import './SignUp.css';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function fakeList() {
  return new Promise((r, rj) => {
    setTimeout(() => {
      r([
        {name: 'Oyo Life 1', val: 546},
        {name: 'Oyo Life 2', val: 548},
        {name: 'Oyo Life 3', val: 5423},
        {name: 'Oyo Life 4', val: 540}
      ])
    }, 1000);
  })
  // return ([
  //   {item: 'Oyo Life 1', val: 546},
  //   {item: 'Oyo Life 2', val: 548},
  //   {item: 'Oyo Life 3', val: 5423},
  //   {item: 'Oyo Life 4', val: 540}
  // ]);
}
export default function SignUp() {
  const classes = useStyles();
  const [selectedPg, setSelectedPg] = React.useState('');

  const [value, setValue] = React.useState({
    defaultRadio: 'tenant',
    pgList: [{
      val: '',
      name: 'select one',
      selectWidth: 200
    }]
  });
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  const handleRoleChange = event => {
    console.log({value});
    setValue({...value, age: Math.random() * 340});
    console.log({event: event.target.value});
    // setValue(event.target.value);
  }

  const handlePgChange = event => {
    console.log('select', event);
    setSelectedPg(event.target.value);
  }

  const fetchList = () => {
    console.log('999')
    fakeList().then(r => setValue({...value,pgList: r}));
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <Gavel /> 
        </Avatar>
        <Typography component="h1" variant="h5">
          Pg Bhaiya
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <RadioGroup id="user-role" defaultValue="tenant" aria-label="gender" name="customized-radios" onChange={handleRoleChange}> 
                <FormControlLabel value="tenant" control={<Radio />} label="Tenant" /> 
                <FormControlLabel value="manager" control={<Radio />} label="Manager" /> 
              </RadioGroup>
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel ref={inputLabel}  id="demo-simple-select-outlined-label">
                  Select a PG
                </InputLabel>
                <Select
                  labelWidth={labelWidth}
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  onChange={handlePgChange}
                  value={selectedPg}
                  style={{ width: 390}}
                  onOpen = {fetchList}
                >
                  {
                    value.pgList.map(
                      (pg, _i) => <MenuItem key={'pg_'+_i} value={pg.val}>{pg.name}</MenuItem>
                    )
                  }
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}