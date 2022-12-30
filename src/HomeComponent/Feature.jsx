import { Grid } from "@mui/material";
import React from "react";
import "./feature.css";

const Feature = () => {
  return (
    <>
      <h1 className="toptext"> What extra features you will 
        have with our cars  </h1>
        <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, quis laborum? Quae molestiae quis delectus suscipit. Error minima odio nisi, amet in sed modi, quaerat nostrum officiis assumenda cumque laudantium!</p>
      <Grid container sx={{mb:10}} spacing={2}>
        <Grid xs={10} md={4} lg={4}>
          <div className="main">
            <img
              className="imageone"
              src="https://i.ibb.co/2Nn3Jpr/b227216ed07e8dcb5ae4dff05bf365f3-removebg-preview.png"
              width="200"
              height="200"
              alt=""
            />
            <div className="two">
              <h3>Next to home delivery</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elitinus
                cupiditate distinctio nisi alias eveniet nemo at maiores saepe
                enim blpore eos?
              </p>
            </div>
          </div>
        </Grid>
        <Grid xs={10} md={4} lg={4}>
          <div className="maintwo">
            <img
              className="imageone"
              src="https://i.ibb.co/MMTrYDJ/Cartoon-House-removebg-preview.png"
              width="200"
              height="200"
              alt=""
            />
            <div className="two">
              <h3>Anywhere in world</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elitinus
                cupiditate distinctio nisi alias eveniet nemo at maiores saepe
                enim blpore eos?
              </p>
            </div>
          </div>
        </Grid>
        <Grid xs={10} md={4} lg={4}>
          <div className="mainthree">
            <img
              className="imageone"
              src="https://i.ibb.co/4Vdbc51/Maintenance-Transparent-Images.png"
              width="200"
              height="200"
              alt=""
            />
            <div className="two">
              <h3>Next to home delivery</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elitinus
                cupiditate distinctio nisi alias eveniet nemo at maiores saepe
                enim blpore eos?
              </p>
            </div>
          </div>
        </Grid>
    
      </Grid>
    </>
  );
};

export default Feature;
