import React from "react";
import Grid from "@mui/material/Grid";
import { Button, Skeleton } from "@mui/material";
import "./SingleCar.css";
import { useHistory } from "react-router-dom";
const SingleCar = (props) => {
  const { name, price, image, description, _id } = props.data;
  const history = useHistory();
  // console.log(name,price,'matro akhan theke')
  const handlingPurchase = () => {
    history.push(`/purchase/${_id}`);
  };
  return (
    <Grid
      item
      sx={{
        margin: "15px auto",
        padding: "20px",
        alignItems: "center",
        overflow: "hidden",
      }}
      xs={12}
      sm={12}
      md={5}
      lg={5}
      className="singleCar"
    >
     { image? <img src={image} className="img-fluid singlecar" alt="" /> :
      <Skeleton
        sx={{ bgcolor: "grey.700" }}
        variant="rectangular"
        width={410}
        height={318}
      />}
    { name ? <h3> {name}</h3> :   <Skeleton animation="wave" />}
      {/* <h5>Have a look on it: {description.slice(0, 150)}</h5> */}
      <h3> Price: ${price}</h3>
      <Button variant="contained" onClick={handlingPurchase} color="primary">
        Purchase
      </Button>
    </Grid>
  );
};

export default SingleCar;
