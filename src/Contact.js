import { Grid, makeStyles, Typography } from "@material-ui/core";
const useStyles = makeStyles({
  container: {
    color: "#fff",
    position: "absolute",
    paddingLeft: "100px",
    width: "100vw",
    height: "100vh",
  },
});
const Contact = () => {
  let classes = useStyles();
  console.log("contact render");
  return (
    <Grid
      container
      alignItems="center"
      className={classes.container}
      direction="row"
    >
      <Grid item xs={12} md={6}>
        <Typography variant="h1">Contact</Typography>
      </Grid>
    </Grid>
  );
};

export default Contact;
