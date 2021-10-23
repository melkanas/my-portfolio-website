import { Grid, makeStyles, Typography, Link, Tooltip } from "@material-ui/core";
import { memo, useEffect, useMemo, useRef, useState } from "react";
import useMeasure from "react-use-measure";

import {
  FaNodeJs,
  FaHtml5,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaCss3Alt,
  FaGithub,
  FaDigitalOcean,
} from "react-icons/fa";
import {
  SiMicrosoftsqlserver,
  SiMongodb,
  SiD3DotJs,
  SiNpm,
  SiYarn,
  SiHeroku,
  SiJsonwebtokens,
  SiVisualstudiocode,
  SiRedux,
  SiPython,
  SiMicrosoftexcel,
  SiC,
} from "react-icons/si";
import {
  useSpring,
  useSprings,
  animated,
  config,
  useSpringRef,
  useChain,
} from "react-spring";
const useStyles = makeStyles({
  container: {
    paddingLeft: "100px",
    height: "100vh",
    position: "absolute",
    width: "100vw",
    padding: 60,
  },
  story: {
    marginBottom: "50px",
  },
  content: {
    "& *": {
      marginBottom: "20px",
    },
  },
  skillIcon: {
    fontSize: 60,
    fill: "transparent",
    "transform-box": "fill-box",
    stroke: "#23a3d0",

    "& :hover": {
      fill: "#fff",
      opacity: 1,
      cursor: "pointer",
      transition: "fill 0.5s",
    },
  },
});

const useStylesBootstrap = makeStyles((theme) => ({
  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
  },
}));
const About = () => {
  const iconsRef = useRef(null);
  const [iconsLength, setIconsLength] = useState([]);
  const tooltipClass = useStylesBootstrap();
  useEffect(() => {
    if (iconsRef.current)
      setIconsLength(
        [...iconsRef.current.getElementsByTagName("path")].map((elt) =>
          elt.getTotalLength()
        )
      );
  }, [iconsRef.current, setIconsLength]);
  const classes = useStyles();
  const [springs, api] = useSprings(iconsLength.length, (index) => ({
    fill: "transparent",
    from: {
      strokeDashoffset: 0,
    },
    strokeDashoffset: iconsLength[index],
    strokeDasharray: iconsLength[index],
    config: { ...config.molasses },
    reverse: true,
    scale: 1,
    delay: 800,
  }));

  let faIcons = [
    { icon: FaNodeJs, link: "https://nodejs.org", name: "NodeJS" },
    { icon: FaHtml5, link: "https://www.w3schools.com/html/", name: "HTML5" },
    { icon: FaReact, link: "https://reactjs.org/", name: "ReactJS" },
    { icon: FaBootstrap, link: "https://getbootstrap.com/", name: "Bootstrap" },
    { icon: FaCss3Alt, link: "https://www.w3schools.com/css/", name: "CSS3" },
    {
      icon: FaDigitalOcean,
      link: "https://www.digitalocean.com/",
      name: "DigitalOcean",
    },
  ];
  let faIconComponents = faIcons.map((icon) => ({
    component: icon.icon,
    style: { "stroke-width": "15px" },
    link: icon.link,
    title: icon.name,
  }));
  let siIcons = [
    {
      icon: SiMicrosoftsqlserver,
      link: "https://www.w3schools.com/sql/",
      name: "SQL Server",
    },
    { icon: SiMongodb, link: "https://www.mongodb.com/", name: "MongoDB" },
    { icon: SiD3DotJs, link: "https://d3js.org/", name: "D3.js" },
    { icon: SiNpm, link: "https://www.npmjs.com/", name: "npm" },
    { icon: SiYarn, link: "https://yarnpkg.com/", name: "yarn" },
    { icon: SiHeroku, link: "https://www.heroku.com/", name: "Heroku" },
    { icon: SiJsonwebtokens, link: "https://jwt.io/", name: "JWT" },
    {
      icon: SiVisualstudiocode,
      link: "https://code.visualstudio.com/",
      name: "Visual Studio Code",
    },
    { icon: SiRedux, link: "https://redux.js.org/", name: "Redux" },
    { icon: SiPython, link: "https://www.python.org/", name: "Python" },
  ];
  let siIconComponents = siIcons.map((icon) => ({
    component: icon.icon,
    style: { "stroke-width": "1px" },
    link: icon.link,
    title: icon.name,
  }));
  let allAnimatedIcons = [...faIconComponents, ...siIconComponents].map(
    (icon, index) => {
      return { ...icon, style: { ...icon.style, ...springs[index] } };
    }
  );
  //arrange the component in 4 rows
  let rowsIcons = allAnimatedIcons.reduce((acc, curr, index) => {
    let rowIndex = Math.floor(index / 4);
    acc[rowIndex] = [...(acc[rowIndex] ? acc[rowIndex] : []), curr];
    return acc;
  }, []);
  return (
    <div className={classes.container}>
      <Grid container direction="row" spacing={1}>
        <Grid item xs={12} md={6}>
          <Typography variant="h2" className={classes.story}>
            My Story.
          </Typography>

          <div className={classes.content}>
            <Typography variant="body1">
              I'm Anas Melkaoui, I'm a <strong> fullstack web developer</strong>{" "}
              based in Morocco.I have a passion for learning and understanding
              how things work while. I implemented web apps during my internship
              and work to meet business requirements.
            </Typography>

            <Typography variant="body1">
              I'am a <strong> problem solver</strong>, so I love to work on a
              project from every prespective. Starting from the
              <strong> business side</strong> like delivering creative ideas and
              suggestions on the product to the <strong> technical side</strong>{" "}
              of implementing the ideas with the latest technologies and best
              performance.
            </Typography>
            <Typography variant="body1">
              I'm eager to <strong>learn</strong> more technologies both on the
              frontend and the backend, by creating{" "}
              <strong> great products</strong> that scale. I'm interested in
              furthering my knowledge and experience on web and mobile
              technologies, as well as learning about artificial intelligence.
            </Typography>
          </div>
        </Grid>

        <Grid
          item
          container
          xs={12}
          md={6}
          style={{ alignSelf: "center" }}
          ref={iconsRef}
        >
          {rowsIcons.map((row, rowIndex) => {
            return (
              <Grid container justifyContent="center" spacing={1}>
                {row.map((icon, iconIndex) => {
                  return (
                    <Grid
                      item
                      onMouseEnter={() =>
                        api.start((index) => {
                          let props =
                            index == iconIndex + 4 * rowIndex
                              ? { scale: 1.5 }
                              : { reverse: true };
                          return props;
                        })
                      }
                      onMouseLeave={() =>
                        api.start((index) => {
                          let props =
                            index == iconIndex + 4 * rowIndex
                              ? { scale: 1 }
                              : { reverse: true };
                          return props;
                        })
                      }
                    >
                      <Link href={icon.link} target="_blank">
                        <Tooltip
                          title={icon.title}
                          arrow
                          classes={tooltipClass}
                        >
                          <animated.div style={{ ...icon.style }}>
                            <icon.component
                              style={{ ...icon.style }}
                              className={classes.skillIcon}
                            />
                          </animated.div>
                        </Tooltip>
                      </Link>
                    </Grid>
                  );
                })}
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
};
export default About;
