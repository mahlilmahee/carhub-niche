import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Button, Skeleton } from "@mui/material";
import "./SingleCar.css";
import { useHistory } from "react-router-dom";
const SingleCar = (props) => {
  const { name,price, image, _id } = props.data;
  const history = useHistory();
  // console.log(name,price,'matro akhan theke')
  const handlingPurchase = () => {
    history.push(`/purchase/${_id}`);
  };
  return (
    <Grid
    style={{padding:0}}
      item
      sx={{
        p: 0,
        m: 2,
      }}
      xs={12}
      sm={12}
      md={3}
      lg={3}
      className="singleCar"
    >
      {image ? (
        <img src={image} className="img-fluid carimage" alt="" />
      ) : (
        <Box sx={{width:300}}>
          <Skeleton
          sx={{ bgcolor: "grey.700" }}
          variant="rectangular"
          width={410}
          height={338}
        />
        </Box>
      )}
      {name ? <h3> {name}</h3> :<Box sx={{width:300}}><Skeleton animation="wave" />  </Box> }
      {/* <h5>Have a look on it: {description.slice(0, 150)}</h5> */}
      
      {
        price ?<h3> Price: ${price}</h3>    : <Box sx={{ width: 300 }}>
        <Skeleton />
        
      </Box>
      }
      <Button className="btn-grad" onClick={handlingPurchase}>
        Purchase
      </Button>
    </Grid>
  );
};

export default SingleCar;
