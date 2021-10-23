import {
  Grid,
  makeStyles,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Card,
  CardHeader,
  CardContent,
  Divider,
  IconButton,
  Button,
} from "@material-ui/core";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";
import { useState, useEffect } from "react";
import { useTransition, animated, config } from "react-spring";
const useStyles = makeStyles((theme) => ({
  container: {
    color: "#fff",
    position: "absolute",
    paddingLeft: "100px",
    width: "100vw",
    height: "100vh",
    padding: 8,
    paddingTop: 60,
  },
  skillBox: {
    border: "1px solid",
    padding: 8,
  },
  list: {
    "& .MuiListItem-root": {
      border: 0,
      color: "red",
      transition: "color 0.25s",
      "& ::before ::after": {
        "box-sizing": "inherit",
        content: "",
        position: "absolute",
        width: "100%",
        height: "100%",
      },
    },
    "& .MuiListItem-root:hover": {},
  },
}));
const Skills = () => {
  let classes = useStyles();
  const [skillBox, setSkillBox] = useState("eng");

  return (
    <div className={classes.container}>
      <Grid container direction="column">
        <Grid item>
          <Typography variant="h2" style={{ marginBottom: 60 }}>
            Skills & Experience
          </Typography>
          <Typography variant="body1">
            I was introduced to programming {new Date().getFullYear() - 2015}{" "}
            years, this is my path from then.
          </Typography>
        </Grid>

        <Grid container item direction="row" alignItems="center" spacing={2}>
          <Grid item xs={6} md={3}>
            <List
              component="nav"
              aria-label="my professional timeline"
              style={{ "max-width": 300 }}
              className={classes.list}
            >
              <ListItem button onClick={() => setSkillBox("eng")}>
                <ListItemText>Engineering Studies</ListItemText>
                <ListItemIcon>
                  <PlayArrowIcon />
                </ListItemIcon>
              </ListItem>
              <ListItem button onClick={() => setSkillBox("int")}>
                <ListItemText>Internships</ListItemText>
                <ListItemIcon>
                  <PlayArrowIcon />
                </ListItemIcon>
              </ListItem>
              <ListItem button onClick={() => setSkillBox("work")}>
                <ListItemText>Work</ListItemText>
                <ListItemIcon>
                  <PlayArrowIcon />
                </ListItemIcon>
              </ListItem>
            </List>
          </Grid>
          {skillBox === "eng" ? (
            <Grid item xs={6} md={3} className={classes.skillBox}>
              I then went on to pursue engineering in modeling and scientific
              computation. I learned algorithms, math, simulation and applied
              these knowledge to finance to price options and bonds with VBA
              programming language.
            </Grid>
          ) : skillBox === "int" ? (
            <Grid item xs={6} md={3} className={classes.skillBox}>
              During my internships I designed and implemented internal web
              apps. I landed a job in the rates department of Credit Agricole
              Morocco, as a treasury and bonds portfolio manager, then
              implemented a real time web app to automate reporting, pricing and
              data analysis.
            </Grid>
          ) : skillBox === "work" ? (
            <Grid item xs={6} md={3} className={classes.skillBox}>
              I have skills in the fullstack development space. from databases
              to backend and front-end development. I'm eager to learn more
              technologies and get more experience.
            </Grid>
          ) : (
            false
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Skills;
{
  /* <Typography variant="body1">
          I then went on to pursue engineering in modeling and scientific
          computation. I learned algorithms, math, simulation and applied these
          knowledge to finance to price options and bonds with VBA programming
          language.
        </Typography>
        <Typography variant="body1">
          During my internships I designed and implemented internal web apps. I
          landed a job in the rates department of Credit Agricole Morocco, as a
          treasury and bonds portfolio manager, then implemented a real time web
          app to automate reporting, pricing and data analysis.
        </Typography>
        <Typography variant="body1">
          I have skills in the fullstack development space. from databases to
          backend and front-end development. I'm eager to learn more
          technologies and get more experience.
        </Typography>
        <Typography variant="body1">
          I'm currently looking for web development opportunities, and working
          on freelance projects. You can grab a copy of my resume HERE
        </Typography> */
}
