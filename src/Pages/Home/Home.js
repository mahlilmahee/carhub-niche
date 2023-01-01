import React, { useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
import "./home.css";
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
import { Carousel } from "react-responsive-carousel";
const Home = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("https://carhub-server-side.vercel.app/cars")
      .then((res) => res.json())
      .then((data) => setCars(data.slice(0, 6)));
  }, [cars]);

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://carhub-server-side.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [reviews]);

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
        <Grid
          container
          spacing={4}
          padding={0}
          style={{ margin: "2px auto", justifyContent: "center" }}
          sx={{ p: 0 }}
        >
          {cars.length > 0 ? (
            cars?.map((data, i) =>
              data ? (
                <SingleCar key={i} data={data}></SingleCar>
              ) : (
                <Box sx={{ width: 400 }}>
                  <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                  {/* For other variants, adjust the size with `width` and `height` */}
                  <Skeleton variant="circular" width={40} height={40} />
                  <Skeleton variant="rectangular" width={210} height={60} />
                  <Skeleton variant="rounded" width={210} height={60} />
                </Box>
              )
            )
          ) : (
            <Box sx={{ width: 900 }}>
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              {/* For other variants, adjust the size with `width` and `height` */}
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="rectangular" width={210} height={60} />
              <Skeleton variant="rounded" width={210} height={60} />
            </Box>
          )}
        </Grid>
      </Box>

      <Newsletter></Newsletter>
      <Accord></Accord>
      <h1 className="my-5 text-info fs-italic">
        {" "}
        Please Look what our customer say about us{" "}
      </h1>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          {/* <Grid container rowSpacing={2}> */}
          <Carousel
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
            }}
            className="jumka"
            width="40%"
            showThumbs={false}
            transitionTime="1000"
            useKeyboardArrows={true}
            interval="3001"
            infiniteLoop="true"
            autoPlay={true}
          >
            { reviews.length>0 ? reviews.map((data, i) => (
              <Review key={i} data={data}></Review>
            ))   : <Box sx={{w:400}}>
              <Skeleton></Skeleton>
              <Skeleton></Skeleton>
              <Skeleton></Skeleton>
              <Skeleton></Skeleton>
              <Skeleton></Skeleton>
              <Skeleton></Skeleton>
              </Box>}
            {/* </Grid> */}
          </Carousel>
        </Box>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Home;
