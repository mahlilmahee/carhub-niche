import React from 'react';
import NagigationTopForUnique from '../../Components/Navigation/NagigationTopForUnique';
import Footer from '../../Components/Footer/Footer';
import { useState } from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SingleCar from './../Home/SingleCar/SingleCar';
import useAuth from '../Hooks/Auth/useAuth';
import { Skeleton } from '@mui/material';
const Explore = () => {
    const {user}=useAuth()
    const [cars,setCars]=useState([])
    useEffect(()=>{
        fetch('https://carhub-server-side.vercel.app/explore')
        .then(res=>res.json())
        .then(data=>setCars(data))
    },[user])
    return (
        <div>
            <NagigationTopForUnique></NagigationTopForUnique>
            <h2> Explore our shop online </h2>
            <Box style={{margin:'10px auto'}} sx={{ flexGrow: 1 }}>
      <Grid style={{margin:'10px auto'}} container spacing={2}>

      {cars.length>0 ? cars?.map((data, i) =>
            data ? (
           
                <SingleCar key={data._id} data={data} ></SingleCar>
            
            ) : (
                <Box sx={{width:400}}>
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          {/* For other variants, adjust the size with `width` and `height` */}
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" width={210} height={60} />
          <Skeleton variant="rounded" width={210} height={60} />
          </Box>
            )
          )  :  <Box sx={{width:1000}}>
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
    {/* For other variants, adjust the size with `width` and `height` */}
    <Skeleton variant="circular" width={40} height={40} />
    <Skeleton variant="rectangular" width={210} height={60} />
    <Skeleton variant="rounded" width={210} height={60} />
    </Box>}
         {/* {cars.map(data=><SingleCar key={data._id} data={data} ></SingleCar>)}   */}
      </Grid>
    </Box>
            <Footer></Footer>
        </div>
    );
};

export default Explore;