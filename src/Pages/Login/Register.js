import React from 'react';
import NagigationTopForUnique from '../../Components/Navigation/NagigationTopForUnique';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import image from '../../images/images.jpg'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
const Register = () => {
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
      const [logindata,SetLoginData]=useState({});
    //   const [value,setValue]=useState({});

    //     const handlingSubmit =e=>{
    //       e.preventDefault();
    //        console.log(value)
    //   }
    // //   setting input value taker 
    //   const handlingInput =e=>{
    // //   const field =e.target.name;
    // //   const value =e.target.value;
    //   const field=e.target.name;
    //   const value=e.target.value;
    //   const newLoginData={...value};
    //   newLoginData[field]=value;
    //   setValue(newLoginData)
    //   }+
    const handlingSubmit=e=>{
        e.preventDefault();
        console.log(logindata);
      
        // PasswordSignIn(logindata.email,logindata.password,history,location)
    }
    const handlingOnChange=e=>{
        const field=e.target.name;
        const value=e.target.value;
        const newLoginData={...logindata};
        newLoginData[field]=value;
        SetLoginData(newLoginData)
        
    }
    return (
        <div>
          <NagigationTopForUnique></NagigationTopForUnique>
        <Box sx={{ flexGrow: 1 , marginTop:'30px'}}>
      <Grid container spacing={2} sx={{display:'flex', justifyContent:'center' ,alignItems:'center'}}>
        
        <Grid item xs={12} sm={12} md={7} lg={7}>
        <img src={image} className="img-fluid" alt="" />
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5}>
        <Typography variant="h4" gutterBottom component="div">
      Please Login Here   <br/>
      </Typography>
     <form onSubmit={handlingSubmit}>
     <Typography>
      <TextField id="filled-basic" sx={{width:'60%' , marginBottom:'4px'}} onChange={handlingOnChange} name="displayName" label="Your name" variant="outlined" />
          </Typography>
     <Typography>
      <TextField id="filled-basic" sx={{width:'60%' , marginBottom:'4px'}} onChange={handlingOnChange} name="email" label="Your email" variant="outlined" />
          </Typography>
      <Typography>
      <TextField  onChange={handlingOnChange} sx={{width:'60%'}} id="filled-basic" name="password" label="Your password" variant="outlined" />
      <br />
      <Button variant="contained" color="success" type="submit">Login</Button>
          </Typography>
          <Typography>
          <h3> Already User?  <Link to="/login"> Login here please </Link> </h3>
          </Typography>
          <Typography>
          {/* <h3> Or Sign In with google here  </h3> */}
          {/* <Button variant="contained" onClick={handlingGoogleSignIn} >Login</Button> */}
          </Typography>
     </form>
        </Grid>
       
      </Grid>
    </Box>

        </div>
    );
};

export default Register;