import React, { useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
import Navigation from "./../../Components/Navigation/Navigation";
import SingleCar from "./SingleCar/SingleCar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import HomeExtra from "./SingleCar/HomeExtra/HomeExtra";
import Review from "./Review/Review";
import { Container, Skeleton, Stack } from "@mui/material";
import Newsletter from "../../HomeComponent/Newsletter";
import Feature from "../../HomeComponent/Feature";
import Vedio from "../../HomeComponent/Vedio";
import Accord from "../../HomeComponent/Accord";
const Home = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/cars")
      .then((res) => res.json())
      .then((data) => setCars(data.slice(0, 6)));
  }, []);

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div
      style={{ color: "black", backgroundColor: "white", overflow: "hidden" }}
    >
      <Navigation></Navigation>
      <Container>
        <HomeExtra></HomeExtra>
        <Feature></Feature>
        <Vedio></Vedio>
      </Container>
      <h2> Our top rated Cars Choosen by the our customers . </h2>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {cars.map((data, i) =>
            data ? (
              <SingleCar key={i} data={data}></SingleCar>
            ) : (
              <Stack spacing={1}>
                {/* For variant="text", adjust the height via font-size */}
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                {/* For other variants, adjust the size with `width` and `height` */}
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="rectangular" width={210} height={60} />
                <Skeleton variant="rounded" width={210} height={60} />
              </Stack>
            )
          )}
        </Grid>
      </Box>
      {/* here I am gonna put my review system  */}
      <h1 className="my-5 text-info fs-italic">
        {" "}
        Please Look what our customer say about us{" "}
      </h1>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container rowSpacing={2}>
            {reviews.map((data, i) => (
              <Review key={i} data={data}></Review>
            ))}
          </Grid>
        </Box>

      </Container>
      <Newsletter></Newsletter>
<Accord></Accord>
      <Footer></Footer>
    </div>
  );
};

export default Home;
