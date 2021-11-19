import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import { HamburgerMenu } from "./utils.js";
import "@fontsource/roboto";
import { useState, useEffect, memo, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useLocation,
} from "react-router-dom";
import useMeasure from "react-use-measure";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import {
  useSpring,
  animated,
  config,
  useSpringRef,
  useChain,
  useTransition,
} from "react-spring";

import About from "./About";
import Skills from "./Skills";
import Work from "./Work";
import Home from "./Home";
import Logo from "./Logo.js";
import Intro from "./Intro.js";
import MovingItems from "./MovingItems";
import {
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
  makeStyles,
  Button,
  IconButton,
  AppBar,
  responsiveFontSizes,
  Slide,
  CssBaseline,
} from "@material-ui/core";
import Fab from "@material-ui/core/Fab";

import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { Toolbar } from "@material-ui/core";
import Contact from "./Contact";

const theme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: [
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      h1: {
        fontWeight: 900,
      },
      body1: {
        paddingBottom: 10,
      },
    },

    overrides: {
      // Style sheet name
      MuiOutlinedInput: {
        root: {
          color: "#fff",
        },
      },
      MuiInputLabel: {
        root: {
          color: "#fff",
        },
      },
      MuiInput: {
        root: {
          color: "#fff",
        },
      },
      MuiButton: {
        // Name of the rule
        text: {
          // Some CSS
          color: "white",
        },
      },
      MuiCssBaseline: {
        "@global": {
          "*": { "scrollbar-width": "thin" },
          "*::-webkit-scrollbar": {
            width: "8px",
            height: "6px",
          },
          "*::-webkit-scrollbar-track": {
            "-webkit-box-shadow": "none !important",
            backgroundColor: "#1d1d1d",
          },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: "#9e9e9e",
            borderRadius: 10,
          },
          "*::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#f3e6e6",
          },
          body: {
            zIndex: 1,
            backgroundColor: "#1d1d1d",
            color: "#fff",
            "overflow-x": "hidden",
          },
          strong: {
            color: "#23a3d0",
          },
        },
      },
    },
  })
);

const useStyles = makeStyles({
  bottomNav: {
    position: "fixed",
    bottom: 5,
  },
  topNav: {
    marginLeft: "auto",
    "& *": {
      textDecoration: "none",
      display: (props) => (props.smallScreen ? "block" : "inline-block"),
    },
    marginRight: "auto",
    display: (props) =>
      !props.clicked && props.smallScreen
        ? "none"
        : props.smallScreen && props.clicked
        ? "grid"
        : "",
    placeItems: (props) => (props.clicked ? "center" : ""),
    height: (props) => (props.clicked ? "100vh" : "auto"),
    transition: "height 1s",
  },
  home: {
    float: "left",
    margin: 0,
    borderRadius: "5px",
    backgroundColor: "rgba(0.5,0,0,0.5)",
  },
  navItem: {
    "& h5": {
      marginRight: "30px",
      color: "#fff",
      "&:hover": {
        color: `${theme.palette.primary.main}`,
        fontSize: "20px",
        cursor: "pointer",
      },
      transition: "font 0.5s, color 0.5s ",
      fontSize: "16px",
    },
  },
  appBar: {
    "backdrop-filter": "blur(8px)",
    zIndex: 99,
    height: (props) => (props.clicked ? "100vh" : "auto"),
  },
  icons: {
    cursor: "pointer",
    color: "#7F776F",
    "&:hover": {
      color: "#fff",
      fontSize: "45px",
    },
    transition: "font 0.3s, color 0.3s",
  },

  bottomShaddow: {
    "box-shadow": "none",
  },
});

const TopNav = ({ clicked = false, setClicked = (f) => f, smallScreen }) => {
  const classes = useStyles({ clicked, smallScreen });
  let time = 300;
  const [scrollY, setScrollY] = useState(0);
  const [topNavClass, setTopNavClass] = useState("");
  const [navAppear, setNavAppear] = useState(true);
  console.log({ smallScreen });
  function handleScroll() {
    setScrollY(window.pageYOffset);
    if (window.pageYOffset === 0) setTopNavClass(classes.bottomShaddow);
    else setTopNavClass("");
    if (window.pageYOffset > scrollY) setNavAppear(false);
    else setNavAppear(true);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <Slide in={navAppear} timeout={time}>
      <AppBar
        color="transparent"
        position="fixed"
        className={`${classes.appBar} ${topNavClass} `}
      >
        <Toolbar className={classes.navItem}>
          <Link to="/" style={{ position: "absolute", left: 0, top: 0 }}>
            <Logo />
          </Link>
          <nav className={classes.topNav}>
            <Link to="/about">
              <Typography variant="h5">About</Typography>
            </Link>
            <Link to="/skills">
              <Typography variant="h5">Skills</Typography>
            </Link>
            <Link to="experience">
              <Typography variant="h5">Work</Typography>
            </Link>
            <Link to="contact">
              <Typography variant="h5">Contact</Typography>
            </Link>
          </nav>
          <HamburgerMenu {...{ clicked, setClicked, smallScreen }} />
        </Toolbar>
      </AppBar>
    </Slide>
  );
};

const Error = () => <div>Error Not found</div>;
function App() {
  const classes = useStyles();
  const location = useLocation();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [loader, setLoader] = useState(true);
  const transition = useTransition(location, {
    key: location.pathname,
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
    config: config.stiff,
  });
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    if (loader) {
      setTimeout(() => setLoader(false), 3000);
    }
  }, [loader]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {loader ? <Intro /> : null}
      {loader ? null : <TopNav {...{ clicked, setClicked, smallScreen }} />}

      {/* <MovingItems numberOfItems={8} /> */}
      <div
        style={{
          height: "100vh",
          overflow: `${smallScreen && clicked ? "hidden" : ""}`,
        }}
      >
        {loader
          ? null
          : transition((props, item, t, key) => (
              <animated.div key={key} style={props}>
                <Switch location={item}>
                  <Route path="/" exact>
                    <Home />
                  </Route>
                  <Route path="/about">
                    <About />
                  </Route>
                  <Route path="/skills">
                    <Skills />
                  </Route>
                  <Route path="/experience">
                    <Work />
                  </Route>
                  <Route path="/contact">
                    <Contact />
                  </Route>
                  <Route path="*">
                    <Error />
                  </Route>
                </Switch>
              </animated.div>
            ))}
      </div>
      {loader ? null : (
        <Grid
          container
          item
          alignItems="center"
          justifyContent="center"
          className={classes.bottomNav}
          spacing={3}
        >
          <Grid item>
            <a
              href="https://www.linkedin.com/in/anas-melkaoui/"
              target="_blank"
            >
              <LinkedInIcon fontSize="large" className={classes.icons} />
            </a>
          </Grid>

          <Grid item>
            <a href="https://github.com/melkanas" target="_blank">
              <GitHubIcon fontSize="large" className={classes.icons} />
            </a>
          </Grid>
          <Grid item>
            <a href="https://twitter.com/nasmelk" target="_blank">
              <TwitterIcon fontSize="large" className={classes.icons} />
            </a>
          </Grid>

          <Grid item>
            <a
              href="https://www.youtube.com/channel/UCShzPOSgVxrsdV3G3-VqZuA"
              target="_blank"
            >
              <YouTubeIcon fontSize="large" className={classes.icons} />
            </a>
          </Grid>
        </Grid>
      )}
    </ThemeProvider>
  );
}

export default App;
