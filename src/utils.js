import { makeStyles } from "@material-ui/core";
import { useEffect, useRef, useState } from "react";
import {
  useSpring,
  useSprings,
  animated,
  config,
  useSpringRef,
  useChain,
} from "react-spring";

export const useDrawSVG = ({ delay = 800, step = 0 } = {}) => {
  const iconsRef = useRef(null);
  const [iconsLength, setIconsLength] = useState([]);
  useEffect(() => {
    if (iconsRef.current)
      setIconsLength(
        [...iconsRef.current.getElementsByTagName("path")].map((elt) =>
          elt.getTotalLength()
        )
      );
  }, [iconsRef.current, setIconsLength]);
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
    delay: delay + step * index * delay,
  }));

  return [iconsRef, springs, api];
};
const useStyles = makeStyles({
  hamBtn: {
    display: (props) => (props.smallScreen ? "flex" : "none"),

    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    cursor: "pointer",
    position: "absolute",
    top: 0,
    right: 0,
  },
  hamBtnBurger: {
    width: 50,
    height: 6,
    backgroundColor: "#fff",
    borderRadius: 5,
    boxShaddow: "0 2px 5px rgba(255,101,47,.2)",
    transition: "all .2s ease-in-out",

    "&::before ": {
      content: '""',
      position: "absolute",
      width: 50,
      height: 6,
      borderRadius: 5,
      background: "#fff",
      boxShaddow: "0 2px 5px rgba(255,101,47,.2)",
      transition: "all .2s ease-in-out",
      transform: "translateY(-16px)",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      width: 50,
      height: 6,
      borderRadius: 5,
      background: "#fff",
      boxShaddow: "0 2px 5px rgba(255,101,47,.2)",
      transition: "all .2s ease-in-out",
      transform: "translateY(16px)",
    },
  },
  clicked: {
    "& $hamBtnBurger": {
      transform: "translateX(-50px)",
      background: "transparent",
      boxShaddow: "none",
      "&::after": {
        transform: "rotate(-45deg) translate(35px,35px)",
      },
      "&::before": {
        transform: "rotate(45deg) translate(35px,-35px)",
      },
    },
  },
});
export const HamburgerMenu = ({
  clicked = false,
  setClicked = (f) => f,
  smallScreen,
}) => {
  const classes = useStyles({ smallScreen });
  console.log({ clicked });
  return (
    <div
      className={`${classes.hamBtn} ${clicked ? classes.clicked : ""}`}
      onClick={() => setClicked((prev) => !prev)}
    >
      <div className={classes.hamBtnBurger}></div>
    </div>
  );
};
