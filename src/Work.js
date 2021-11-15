import { Typography, Grid, makeStyles } from "@material-ui/core";
import ReactPlayer from "react-player/youtube";

import Slider from "react-slick";
const useStyles = makeStyles({
  container: {
    color: "#fff",
    position: "absolute",
    width: "100vw",
    paddingLeft: "100px",
    height: "100vh",
    paddingTop: 60,
  },
});
const Work = () => {
  let classes = useStyles();
  const settings = {
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          infinite: true,
          swipeToSlide: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Grid container className={classes.container} direction="row">
      <Grid item md={2}>
        <Typography variant="h3">Portfolio</Typography>
      </Grid>

      <Grid container item direction="row" spacing={1} justifyContent="center">
        <Grid item md={8} style={{ "min-height": 0, "min-width": 0 }}>
          <Slider {...settings}>
            <div>
              <Typography variant="h5">Airline Dashboard</Typography>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=1hm5T7lEFzw"
                loop={true}
                width={"100%"}
                controls={true}
              />
              <Typography variant="h5">Project Description</Typography>
              <Typography variant="body1">
                Dashboard for visualizing Moroccan airline costs. project
                includes :
                <ul>
                  <li>
                    Database modeling and implementation in SQL Server 2012
                  </li>
                  <li> Server implemented in nodejs, express</li>
                  <li> responsive design with bootstrap </li>
                  <li> interractive and responsive graphs with D3.js </li>
                </ul>
              </Typography>
            </div>
            <div>
              <Typography variant="h5">Restaurant Landing page</Typography>

              <ReactPlayer
                url="https://www.youtube.com/watch?v=DNXw9UCs1zc"
                loop={true}
                width={"100%"}
                controls={true}
              />
              <Typography variant="h5">Project Description</Typography>
              <Typography variant="body1">
                Restaurant as Subscription service landing page. Present all the
                offers in a beautiful way. Built with vanilla js, html and css.
              </Typography>
            </div>
          </Slider>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Work;
