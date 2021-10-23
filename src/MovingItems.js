import { makeStyles } from "@material-ui/core";
import useWindowDimensions from "./useWindowDimension";
import {
  useSpring,
  animated,
  config,
  useSpringRef,
  useChain,
  useSprings,
} from "react-spring";
let boundNumber = (number, min, max) => {
  if (number < min) return min;
  if (number > max) return max;
  return number;
};
const MovingItems = ({ numberOfItems }) => {
  const { height, width } = useWindowDimensions();
  let initialPos = [...Array(numberOfItems)].map(() => ({
    x: Math.floor(Math.random() * width),
    y: Math.floor(Math.random() * (height - 100) + 100),
    rotateZ: Math.floor(Math.random() * 180),
    stroke: "#fff",
  }));
  const [springs, api] = useSprings(numberOfItems, (index) => ({
    from: {
      x: initialPos[index].x,
      y: initialPos[index].y,
      rotateZ: initialPos[index].rotateZ,
      stroke: "#23a3d0",
    },
    to: {
      x: boundNumber(
        initialPos[index].x + Math.floor(Math.random() * -2 + 1) * 200,
        0,
        width
      ),
      y: boundNumber(
        initialPos[index].y + Math.floor(Math.random() * -2 + 1) * 200,
        0,
        height
      ),
      rotateZ: Math.floor(Math.random() * 360),
      stroke: "#be3e32",
    },
    onRest: () => {
      api.start((index) => ({
        to: {
          x: boundNumber(
            initialPos[index].x + Math.floor(Math.random() * -2 + 1) * 200,
            0,
            width
          ),
          y: boundNumber(
            initialPos[index].y + Math.floor(Math.random() * -2 + 1) * 200,
            0,
            height
          ),
          rotateZ: Math.floor(Math.random() * 360),
        },
      }));
    },
    config: { ...config.molasses },
  }));
  console.log({ springs });
  return springs.map((styles) => (
    <animated.svg
      style={{
        position: "absolute",
        width: "40px",
        fill: "transparent",
        strokeWidth: "10px",
        ...styles,
      }}
      width="100px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 184.38 113.84"
    >
      <svg>
        <path d="M79.26 0v32.44L34.49 57l44.77 24.58v32.26L0 70.5V43.25z" />
      </svg>
    </animated.svg>
  ));
};

export default MovingItems;
