import { Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const Intro = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setTimeout(() => setOpen(true), 1500);
  }, [open]);
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      alignContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Logo width={200} open={open} />
    </Grid>
  );
};

export default Intro;
