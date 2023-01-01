import React from "react";
import Grid from "@mui/material/Grid";
import "./Review.css";
import Rating from "react-rating";
import ReactStars from "react-stars";
// import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Review = (props) => {
  const { name, description, rating } = props.data;
  return (
    
  
      <div style={{display:'flex',flexDirection:'column',padding:'20px',borderRadius:'20px',justifyContent:'center',alignItems:'center'}}>
        <img
          src="https://i.ibb.co/WtPMgH9/img-258083.png"
          alt=""
          width=""
          height=""
        />
        <p className="legend">User:  {name}</p>
        <h3 > Review: {description}</h3>
        <ReactStars
          count={5}
          size={34}
          value={rating}
          edit={false}
          color2={"#F10808"}
        />
      </div>
    

    // </Grid>
  );
};

export default Review;
