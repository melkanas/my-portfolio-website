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
