import { useState, useRef, useEffect } from "react";

function useHover() {
  const [hover, setHover] = useState(false);
  const ref = useRef(null);
  const enterMouse = () => setHover(true);
  const leaveMouse = () => setHover(false);
  useEffect(() => {
    ref.current.addEventListener("mouseenter", enterMouse);
    ref.current.addEventListener("mouseleave", leaveMouse);

    return () => {
      ref.current.removeEventListener("mouseenter", enterMouse);
      ref.current.removeEventListener("mouseleave", leaveMouse);
    };
  }, []);

  return [hover, ref]
}

export default useHover;
