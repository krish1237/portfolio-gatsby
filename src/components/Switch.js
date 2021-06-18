import React, { useEffect, useRef } from "react";

const Switch = ({ on, switchProps, className, ...props }) => {
  const animationClass = "translate-x-4";
  const switchRef = useRef(null);
  switchProps = switchProps || {};
  useEffect(() => {
    if (on) {
      switchRef.current.classList.add(animationClass);
    } else {
      switchRef.current.classList.remove(animationClass);
    }
  }, [on]);
  return (
    <div
      {...props}
      className={
        "flex w-10 h-6 bg-gray-300 dark:bg-blue-900 rounded-full self-center items-center p-1 cursor-pointer " +
          className || ""
      }
    >
      <div
        ref={switchRef}
        className={
          "absolute block rounded-full w-4 h-4 bg-white transition-transform duration-300 transform " +
            switchProps.className || ""
        }
      ></div>
    </div>
  );
};

export default Switch;
