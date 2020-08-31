import React from 'react';
import NavBar from './navbar';
import { makeStyles } from '@material-ui/core/styles';
import {Paper,TextField,Button } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  root: {
    
  
    marginTop:10

   
    
  },
  paper:{
   
    width:400,
    margin:'0 auto',
    textAlign:'center',
    padding:'15 0'
  
  },
  input:{
    width:'95%',
    marginBottom:15
  }
}));


function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
            <NavBar/>
      <Paper elevation={3} className={classes.paper} >

      <h1>Login</h1>
      <form className={classes.root} noValidate autoComplete="off">
      <TextField  label="Enter Email" className={classes.input} />
      <TextField  label="Enter Password" className={classes.input} />
     
    </form>
    <Button variant="contained" color="primary" className={classes.input}>
        Login
      </Button>
    </Paper>
    </div>
  );
}

export default App;