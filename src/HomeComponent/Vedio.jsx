import { Grid } from '@mui/material';
import React from 'react';
import './vedio.css'
const Vedio = () => {
    return (
        <div className="vediodiv">


<Grid container spacing={2}>
  <Grid sx={{mb:5}}  xs={12} md={7} lg={7}>
    <h1 className="drive">Drive your car in a more fluent way </h1>
  </Grid>
  <Grid sx={{mb:5}} xs={12} md={5} lg={5}>
    <p className="drivetext">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam laboriosam officiis laborum iure quaerat dolorum inventore illo ani qui consequatur maiores sed aliquid? </p>
  </Grid>
  <Grid  xs={12} lg={12} md={12}>
  <iframe  width="1040" height="660" src="https://www.youtube.com/embed/Q_uWV_TWN3c" title="FULL TOUR of My $30 MILLION Hyper & Super Car Collection 2.0!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </Grid>
 
</Grid>
          
            
        </div>
    );
};

export default Vedio;