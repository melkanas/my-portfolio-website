import { Typography, Grid, makeStyles } from "@material-ui/core";

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
  return (
    <Grid container className={classes.container} direction="column">
      <Grid item xs={12} md={6}>
        <Typography variant="h3">
          Carousel of Videos and Description of project
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Work;
