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
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useDrawSVG } from "./utils";
import { useSpring } from "react-spring";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";
import { useState, useEffect } from "react";
import { useTransition, animated, config } from "react-spring";
import Tilt from "react-parallax-tilt";
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
  educ: {
    padding: "5px",
    textTransform: "uppercase",
    fontSize: 40,

    backgroundColor: "transparent",

    lineHeight: "0.70em",
    color: "#0e3742",
    fontFamily: "Arial",
    fontWeight: 700,
    animation: "$light 10s infinite",
    WebkitBoxReflect: "below 1px linear-gradient(transparent,#0008)",

    zIndex: 99,
  },
  "@keyframes light": {
    "0%,18%,20%,50.1%,60%,65.1%,80%,90.1%,92%": {
      color: "#0e3742",
      textShadow: "none",
    },
    "18.1%,20.1%,30%,50%,60.1%,65%,80.1%,90%,92.1%,100%": {
      color: "#fff",
      textShadow:
        "0 0 10px #03bcf4,0 0 20px #03bcf4,0 0 40px #03bcf4,0 0 160px #03bcf4",
    },
  },
  box: {
    transform: "perspective(2em) rotateX(2deg)  ",
    borderRadius: "10px",
    marginBottom: "50px",
    width: "300px",
    height: "110px",
    overflow: "hidden",
    zIndex: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    background: "rgb(48 50 68)",
    "&::before": {
      boxSizing: "border-box",
      display: "inline-block",
      content: '""',
      position: "absolute",
      width: "400px",
      height: "50px",
      background: "linear-gradient(#00ccff,#d400d4)",
      animation: "$boxlight 10s infinite",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      inset: "4px",
      background: "#1d1d1d",
      borderRadius: "10px",
    },
    "&:hover": {
      transform: "perspective(2em) translate3d(0,0,5px) rotateX(2deg)",
    },
    transition: "transform 500ms",
  },
  "@keyframes boxlight": {
    "0%": {
      transform: "roatate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
  glassCard: {
    width: "auto",
    maxWidth: "300px",
    height: "auto",
    marginBottom: 50,
    boxShadow: "20px 30px 50px rgba(0,0,0,0.5)",
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: "15px",
    borderTop: "1px solid rgba(255,255,255,0.5)",
    borderLeft: "1px solid rgba(255,255,255,0.5)",
    backdropFilter: "blur(5px)",
    padding: 5,
    display: "grid",
    placeItems: "center",

    "& $h1": {
      color: "rgba(255,255,255,0.05)",
      marginBottom: 0,
    },
    "& $h2": {
      marginTop: 0,
      fontSize: "14px",
    },
    "& $a": {
      display: "inline-block",
      background: "#fff",
      color: "#000",
      borderRadius: "20px",
      marginBottom: "10px",
      padding: "10px 20px",
      textDecoration: "none",
    },
  },
  tiltFix: {
    "& .glare-wrapper": {
      pointerEvents: "none",
    },
  },
}));

const Neon = ({ title }) => {
  const matches = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const classes = useStyles({ matches });

  return (
    <div className={classes.box}>
      <div className={classes.educ}>{title}</div>
    </div>
  );
};

const GlassCard = ({ title = "", period = "", subtitle = "", skills = [] }) => {
  const classes = useStyles();
  return (
    <Tilt glareEnable className={classes.tiltFix}>
      <div className={classes.glassCard}>
        <h1>{title}</h1>
        <h2>{period}</h2>
        <p>
          {subtitle}
          <ul>
            {skills.map((elt) => (
              <li>{elt}</li>
            ))}
          </ul>
        </p>
        <a href="#">Read More</a>
      </div>
    </Tilt>
  );
};
const Skills = () => {
  let classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container direction="column">
        <Grid item>
          <Typography variant="h2" style={{ marginBottom: 60 }}>
            Skills & Experience
          </Typography>
          <Typography variant="body1">
            I was introduced to programming {new Date().getFullYear() - 2015}{" "}
            years ago.
          </Typography>
        </Grid>

        <Grid container item direction="row" justifyContent="space-between">
          <Grid item>
            <Neon title="education" />
            <GlassCard
              title="Mohammadia School of Engineering"
              subtitle="Modeling and scientific computation"
              period="2016 - 2019"
              skills={[
                "Modeling and solving systems in Matlab",
                "Business simulation",
                "Programming and algorithms in C and Java",
                "Pricing financial products : options and bonds",
              ]}
            />
          </Grid>
          <Grid item>
            <Neon title="internships" />
            <GlassCard
              title="Internships in web dev and data analytics"
              subtitle=""
              period="2016 - 2019"
              skills={[
                "Intern as web dev: developping a task manager in JEE",
                "Intern at ministry of finance:the impact of venture capital in Morocco, benchmarking to France and US. ",
                "Intern at Royal Air Maroc: developped a dashboard for cost data analysis using NodeJs,Express and D3.js",
              ]}
            />
          </Grid>
          <Grid item>
            <Neon title="current job" />
            <GlassCard
              title="Treasury and Bonds manager"
              subtitle="Trader in the investment bank of Credit Agricole Morocco"
              period="2019 - 2021"
              skills={[
                "Developped a web plateform for managing operations and reporting",
                "Managed the treasury and Bonds portfolios",
                "Respect of financial ratios LCR, portfolio Duration",
              ]}
            />
          </Grid>
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
