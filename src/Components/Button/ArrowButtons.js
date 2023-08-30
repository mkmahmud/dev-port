import React, { useState } from "react";
import {
  RiArrowDownSFill,
  RiArrowLeftSFill,
  RiArrowRightSFill,
  RiArrowUpSFill,
} from "react-icons/ri";

function ArrowKeyButtons() {
  const [upActive, setUpActive] = useState(false);
  const [downActive, setDownActive] = useState(false);
  const [leftActive, setLeftActive] = useState(false);
  const [rightActive, setRightActive] = useState(false);
  //   setPlayGame(true);

  const handleKeyDown = (event) => {
    switch (event.keyCode) {
      case 37: // Left arrow key
        setLeftActive(true);

        break;
      case 38: // Up arrow key
        setUpActive(true);

        break;
      case 39: // Right arrow key
        setRightActive(true);

        break;
      case 40: // Down arrow key
        setDownActive(true);

        break;
      default:
        break;
    }
  };

  const handleKeyUp = (event) => {
    switch (event.keyCode) {
      case 37: // Left arrow key
        setLeftActive(false);
        break;
      case 38: // Up arrow key
        setUpActive(false);
        break;
      case 39: // Right arrow key
        setRightActive(false);
        break;
      case 40: // Down arrow key
        setDownActive(false);
        break;
      default:
        break;
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    // <div>
    <>
      <div className={`${upActive ? "arrow-btn w-12 h-8 bg-p1 rounded-lg mx-auto text-white flex justify-center items-center bg-[#000000]" : "arrow-btn w-12 h-8 bg-p1 rounded-lg mx-auto text-white flex justify-center items-center"} flex justify-center`}>
        <RiArrowUpSFill />
      </div>
      <div className="flex justify-evenly items-center mt-1">
        <div className={`${leftActive ? "arrow-btn w-12 h-8 bg-p1 rounded-lg mx-auto text-white flex justify-center items-center bg-[#000000]" : "w-12 h-8 bg-p1 rounded-lg mx-auto text-white flex justify-center items-center"}`}>
          <RiArrowLeftSFill />
        </div>
        <div className={`${downActive ? "arrow-btn w-12 h-8 bg-p1 rounded-lg mx-auto text-white flex justify-center items-center bg-[#000000]" : "w-12 h-8 bg-p1 rounded-lg mx-auto text-white flex justify-center items-center"}`}>
          <RiArrowDownSFill />
        </div>
        <div className={`${rightActive ? "arrow-btn w-12 h-8 bg-p1 rounded-lg mx-auto text-white flex justify-center items-center bg-[#000000]" : "w-12 h-8 bg-p1 rounded-lg mx-auto text-white flex justify-center items-center"}`}>
          <RiArrowRightSFill />
        </div>
      </div>
    </>
  );
}

export default ArrowKeyButtons;