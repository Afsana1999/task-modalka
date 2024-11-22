import { useEffect, useRef } from "react";

function useOutsideClick(callback) {
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      if (!ref.current.contains(event.target)) {
        callback();
      }
    };
    document.body.addEventListener("click", handleClick);
    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, [callback]);
  return { ref };
}

export default useOutsideClick;
