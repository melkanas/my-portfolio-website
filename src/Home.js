import { Grid, Typography, makeStyles, Button } from "@material-ui/core";
import { memo } from "react";
import Typist from "react-typist";
import Logo from "./Logo";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  container: {
    color: "#fff",
    paddingLeft: "10px",
    height: "100vh",
    position: "absolute",
  },
  contact: {
    marginTop: "50px",
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingRight: "30px",
    paddingLeft: "30px",
    fontSize: "20px",
    textTransform: "none",
  },
  logo: {
    fontSize: "200px",
  },
});
const Home = () => {
  const classes = useStyles();
  console.log("home render");
  return (
    <Grid
      container
      alignItems="center"
      alignContent="center"
      className={classes.container}
      direction="row"
    >
      <Grid item>
        <Typography variant="h5" component="h1" style={{ color: "#be3e32" }}>
          <Typist startDelay={1000} cursor={{ hideWhenDone: true }}>
            Hi, my name is
          </Typist>
        </Typography>
        <Typography variant="h1" component="h1" style={{ color: "#3C91E6" }}>
          <Typist startDelay={2000} cursor={{ hideWhenDone: true }}>
            Anas Melkaoui
          </Typist>
        </Typography>
        <Typography variant="h3" component="h1" style={{ color: "#FFFFFF" }}>
          <Typist startDelay={3000} cursor={{ hideWhenDone: true }}>
            I create web apps to make business better
          </Typist>
        </Typography>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <Button
            variant="outlined"
            color="primary"
            className={classes.contact}
          >
            Get in Touch
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Home;
