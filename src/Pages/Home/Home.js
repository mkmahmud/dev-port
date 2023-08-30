import React from "react";
import "./Home.css";
import TextAnimation from "react-text-animations";
import { useGetUserQuery } from "../../redux/features/api/createAPI";
import SnackGame from "./SnakeGame/SnakeGame";
import { GiSnake } from "react-icons/gi";
import { RiCloseCircleFill } from "react-icons/ri";
import { SiAmazongames } from "react-icons/si";
import weldoneAudio from "../../Assets/audio/weldone.wav";
import ArrowKeyButtons from "../../Components/Button/ArrowButtons";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Home = () => {
  const { data, isLoading } = useGetUserQuery("mahmudulmk4@gmail.com");
  const [playGame, setPlayGame] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [eatenApples, setEatenApples] = useState(10);
  const [wellDone, setWellDone] = useState(false);

  const playAudio = () => {
    const audio = new Audio(weldoneAudio);
    audio.play();
  };
  useEffect(() => {
    if (eatenApples === 0) {
      playAudio();
      setPlayGame(!playGame);
      setWellDone(true);
    }
  }, [eatenApples]);
  const snakeFood = (
    <>
      <span className=" relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex  h-full w-full rounded-full bg-[#43D9AD] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#43D9AD]"></span>
      </span>
    </>
  );
  const repeatedSnakeFood = Array(eatenApples).fill(snakeFood);

  const subheading = data?.data?.userTitles;
  return (
    <div className="h-full">
      {isLoading && (
        <div className="flex items-center justify-center absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 ">
          <div className="w-80 h-80 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
        </div>
      )}

      {data?.data && (
        <div className="h-full overflow-hidden md:flex justify-evenly items-center">
          <div className="text-left  flex flex-col justify-around h-full items-center md:justify-evenly md:items-baseline p-[27px] ">
            <div className="">
              <motion.h2
              initial={{ opacity: 0, y:-100 }}
              animate={{ opacity: 1 , y:0}}
              transition={{ duration: 0.3 }}
              className="text-lg font-medium">Hi everybody. I am</motion.h2>
              <motion.h1
                initial={{ opacity: 0, x:-100 }}
                animate={{ opacity: 1 , x:0}}
                transition={{ duration: 0.3 }}
                className="text-[62px]  leading-[62px]"
              >
                {data?.data?.userName}
              </motion.h1>
              <div className="text-text text-xl flex">
                {" "}
                {/* Change <p> to <div> */}
                {"## "}
                <span className="mx-2">{` `} </span>
                <Typewriter
                  options={{
                    strings: subheading,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>
            <div className="text-sm my-10">
              <div>
                <p className="text-text ">// find my profile on Github:</p>

                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  href={data?.data?.githubLink}
                  target="_blank"
                >
                  <span className="text-text-blue">const</span>{" "}
                  <span className="text-text-green">githubLink</span> ={" "}
                  <span className="text-text-orange">
                    “{data?.data?.githubLink}"
                  </span>
                </motion.a>
              </div>
              <div className="my-4">
                <p className="text-text ">// Download my resume:</p>

                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  href={data?.data?.resume}
                  target="_blank"
                >
                  <span className="text-text-blue">const</span>{" "}
                  <span className="text-text-green">resume</span> ={" "}
                  <span className="text-text-orange">“resume.pdf"</span>
                </motion.a>
              </div>
            </div>
          </div>

          {/* <img
              src={data?.data?.userImage}
              className="h-[300px] w-[300px] block mx-auto my-10 md:h-[500px] md:w-[500px] rounded-full border-b-4 image-shadow border-text-orange"
              alt=""
            /> */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="z-50 relative  h-full lg:flex hidden justify-start items-center"
          >
            <div
              className="z-50 rounded-lg border-2 border-[#010e0e] px-8 py-7 flex justify-center items-center gap-2"
              style={{
                width: "500px",
                height: "475px",
                background:
                  "linear-gradient(150.26deg, rgba(23, 85, 83, 0.7) 1.7%, rgba(67, 217, 173, 0.091) 81.82%)",
                boxShadow: "inset 1px 5px 11px rgba(2, 18, 27, 0.71)",
                backdropFilter: "blur(32px)",
              }}
            >
              <div
                style={{
                  backgroundColor: "rgba(1, 22, 39, 0.84)",
                  boxShadow: "inset 1px 5px 11px rgba(2, 18, 27, 0.71)",
                }}
                className="w-3/5 h-full rounded-md flex justify-center items-center "
              >
                {playGame ? (
                  <SnackGame
                    isGameOver={setIsGameOver}
                    setPlayGame={setPlayGame}
                    eatenApples={eatenApples}
                    setEatenApples={setEatenApples}
                  />
                ) : (
                  <div
                    data-aos="zoom-in"
                    className="flex flex-col text-7xl text-a2"
                  >
                    <GiSnake />
                    {/* <RiGamepadFill /> */}
                    <SiAmazongames />
                  </div>
                )}
                {wellDone && (
                  <div
                    // data-aos="zoom-in"
                    style={{ background: "rgba(1, 22, 39, 0.84)" }}
                    className="absolute left-9 right-[13.2rem] bottom-36 text-center text-a2 text-2xl uppercase py-2"
                  >
                    well-done!
                  </div>
                )}
                {/* play game button */}

                {isGameOver && (
                  <button
                    onClick={() => {
                      setPlayGame(!playGame);
                      setEatenApples(10);
                      setWellDone(false);
                    }}
                    className="absolute  bottom-16 text-s1 font-semibold px-7 py-3 rounded-lg outline-none"
                  >
                    Play Again
                  </button>
                )}

                {!playGame && (
                  <button
                    // data-aos="zoom-in"
                    disabled={playGame}
                    onClick={() => {
                      setPlayGame(!playGame);
                      setWellDone(false);
                      setEatenApples(10);
                    }}
                    className="absolute bottom-16 bg-a1 text-p1 font-semibold px-4 py-2 rounded-lg outline-none"
                  >
                    play-game
                  </button>
                )}
              </div>
              {/* arrow key button  */}
              <div className="w-2/5 h-full rounded-lg">
                <div
                  style={{ background: "rgba(1, 20, 35, 0.19)" }}
                  className="p-2 rounded-lg"
                >
                  <p className="text-text">
                    {`//use keyboard`} <br /> {`//arrow to play`}
                  </p>
                  <div className="mt-5">
                    <ArrowKeyButtons />
                  </div>
                </div>
                {/* snake food section  */}
                <div className="mt-8 p-2">
                  <p className="text-text">{`//food left`}</p>
                  <div className="mt-4 grid grid-cols-5 gap-4  justify-evenly items-center">
                    {repeatedSnakeFood}
                  </div>
                </div>
                <Link
                  to={"/projects"}
                  onClick={() => {
                    setPlayGame(false);
                    setEatenApples(10);
                  }}
                  className="outline-none absolute bottom-10 right-5 border border-white rounded-xl text-white  px-5 py-2"
                >
                  skip
                </Link>
              </div>
              <span className="absolute top-2 left-2 border border-red border-[#114944] text-[#052130] rounded-full">
                <RiCloseCircleFill />
              </span>
              <span className="absolute top-2 right-2 border border-red border-[#114944] text-[#052130] rounded-full">
                <RiCloseCircleFill />
              </span>
              <span className="absolute bottom-2 left-2 border border-red border-[#114944] text-[#052130] rounded-full">
                <RiCloseCircleFill />
              </span>
              <span className="absolute bottom-2 right-2 border border-red border-[#114944] text-[#052130] rounded-full">
                <RiCloseCircleFill />
              </span>
            </div>
            <div className="absolute w-96 h-80 bg-a2 top-[20%] left-[10%] opacity-40 rotate-[20deg] blur-[87px] "></div>
            <div className="absolute bg-a2 w-40 rounded-3xl h-64 top-5 -left-5 rotate-[-35deg] opacity-40 blur-[87px] "></div>
            <div className="absolute w-80 h-[450px] bg-s3 bottom-0 right-20 rotate-[75deg] blur-[85px]"></div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Home;
