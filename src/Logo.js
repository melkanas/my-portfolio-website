// import "./App.scss",
import { makeStyles } from "@material-ui/core";
import { forwardRef } from "react";
import clsx from "clsx";

const useStyles = makeStyles({
  open: {
    "& $st0": {
      transform: "translate(-100%, 0%)",
    },
    "& $st1": {
      transform: "translate(50%, 0%)",
    },
    "& $a1letter": {
      transform: "translate(-60px, 0%)",
    },
    "& $nletter": {
      "stroke-dashoffset": 129,
      "stroke-dasharray": 129,
      stroke: "#23a3d0",

      "stroke-width": "2px",
      animation: "$n_write 500ms",
      "animation-fill-mode": "forwards",
      transform: "translate(-60px, 0%)",
    },
    "& $a2letter": {
      "stroke-dashoffset": 141,
      "stroke-dasharray": 141,
      stroke: "#23a3d0",

      "stroke-width": "2px",
      animation: "$a1_write 500ms",
      "animation-fill-mode": "forwards",
      "animation-delay": "500ms",
      transform: "translate(-60px, 0%)",
    },
    "& $sletter": {
      "stroke-dashoffset": 82,
      "stroke-dasharray": 82,
      stroke: "#23a3d0",

      "stroke-width": "2px",
      animation: "$s_write 500ms",
      "animation-fill-mode": "forwards",
      "animation-delay": "1s",

      transform: "translate(-60px, 0%)",
    },
  },
  svgContainer: {
    overflow: "visible",
    "& *": {
      "transform-box": "fill-box",
    },
    "&:hover": {},
  },
  st0: { transition: "all 1s" },
  a1letter: {
    "transform-box": "fill-box",
    "stroke-dashoffset": "141px",
    "stroke-dasharray": "141px",
    stroke: "#23a3d0",
    fill: "transparent",
    "stroke-width": "2px",
    animation: "$a1_write 2s",
    "animation-fill-mode": "forwards",
    "animation-delay": "1s",
    "animation-duration": "500ms",
    transition: "all 500ms",
  },
  st1: {
    transition: "all 1s",
  },
  st2: {
    transition: "all 1s",
  },
  nletter: {
    opacity: 0,
    transition: "transform 500ms",
  },
  a2letter: {
    opacity: 0,
    transition: "transform 500ms",
  },
  sletter: {
    opacity: 0,
    transition: "transform 500ms",
  },
  "@keyframes a1_write": {
    "0%": {
      "stroke-dashoffset": -141,
    },
    "50%": {
      "stroke-dashoffset": 0,
      fill: "transparent",
      "stroke-width": "2px",
    },
    "100%": {
      opacity: 1,
      fill: "#23a3d0",
      "stroke-width": "0px",
    },
  },
  "@keyframes n_write": {
    "0%": {
      "stroke-dashoffset": -128,
    },
    "50%": {
      "stroke-dashoffset": 0,
      fill: "transparent",
      "stroke-width": "2px",
    },
    "100%": {
      opacity: 1,
      fill: "#23a3d0",
      "stroke-width": "0px",
    },
  },
  "@keyframes s_write": {
    "0%": {
      "stroke-dashoffset": -82,
    },
    "50%": {
      "stroke-dashoffset": 0,
      fill: "transparent",
      "stroke-width": "2px",
    },
    "100%": {
      opacity: 1,
      fill: "#23a3d0",
      "stroke-width": "0px",
    },
  },
  "@keyframes st2_fill": {
    "0%": {
      fill: "transparent",
      "stroke-width": "2px",
    },
    "100%": {
      fill: "#23a3d0",
      "stroke-width": "0px",
    },
  },
});
const Logo = forwardRef(({ width = 70, open = false }, ref) => {
  const classes = useStyles();

  return (
    <svg
      width={`${width}px`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 184.38 113.84"
      className={clsx({ [classes.svgContainer]: true, [classes.open]: open })}
      ref={ref}
    >
      <defs>
        <linearGradient id="st0_lr">
          <stop offset="0" stopColor="#be3e32">
            <animate
              dur="1s"
              attributeName="offset"
              fill="freeze"
              from="0"
              to="1"
            />
          </stop>
          <stop offset="0" stopColor="transparent">
            <animate
              dur="1s"
              attributeName="offset"
              fill="freeze"
              from="0"
              to="1"
            />
          </stop>
        </linearGradient>
        <linearGradient id="st1_lr">
          <stop offset="362" stopColor="transparent">
            <animate
              dur="1s"
              attributeName="offset"
              fill="freeze"
              from="1"
              to="0"
            />
          </stop>
          <stop offset="0" stopColor="#fff">
            <animate
              dur="1s"
              attributeName="offset"
              fill="freeze"
              from="1"
              to="0"
            />
          </stop>
        </linearGradient>
      </defs>
      <path
        d="M79.26 0v32.44L34.49 57l44.77 24.58v32.26L0 70.5V43.25z"
        fill="url(#st0_lr)"
        className={classes.st0}
      />
      <path
        d="M84.42 109V88.4l57.28-27.7L84.51 33l-.09-20.46L163.68 52v17.54z"
        fill="url(#st1_lr)"
        className={classes.st1}
      />
      <path
        className={classes.a1letter}
        d="M79.41 59.63V70a16.12 16.12 0 01-2.46.21 15.78 15.78 0 01-11-4A13.22 13.22 0 0166 46.5a15.43 15.43 0 0110.78-4q7.08 0 11.17 3.78t4.08 10.31v13H81.11V57.28A4.86 4.86 0 0080 53.92a3.85 3.85 0 00-3-1.25 4.31 4.31 0 00-3 1.14 3.59 3.59 0 00-1.26 2.73 3.54 3.54 0 001.15 2.72 4.06 4.06 0 002.89 1.07 5.38 5.38 0 002.63-.7z"
      />
      <path
        className={classes.nletter}
        d="M124.46 69.61h-10.95v-15c0-1.53-.69-2.3-2.08-2.3s-2.05.77-2.05 2.3v15H98.44V54.77a11.54 11.54 0 013.77-8.77 14 14 0 0119.29.57q3 3.22 3 9z"
      />
      <path
        className={classes.a2letter}
        d="M147.06 59.63V70a16.12 16.12 0 01-2.46.21 15.78 15.78 0 01-11-4 13.22 13.22 0 010-19.72 15.43 15.43 0 0110.78-4q7.08 0 11.17 3.78t4.08 10.31v13h-10.88v-12.3a4.86 4.86 0 00-1.12-3.36 3.85 3.85 0 00-3-1.25 4.31 4.31 0 00-3 1.14 3.59 3.59 0 00-1.26 2.73 3.54 3.54 0 001.15 2.72 4.06 4.06 0 002.89 1.07 5.38 5.38 0 002.65-.7z"
      />
      <path
        className={classes.sletter}
        d="M184.38 43.38v10.51a4.84 4.84 0 00-3.18.79 4.91 4.91 0 00-1.09 3.11q-.77 7.71-6.56 10.89-3.08 1.65-8.72 1.65h-1.53V59.76h.5a5.61 5.61 0 003.76-1 5 5 0 001.31-3.51 22.43 22.43 0 01.83-5.73 8.31 8.31 0 012.44-3.29q3.23-2.85 8.93-2.85z"
      />
    </svg>
  );
});

export default Logo;
