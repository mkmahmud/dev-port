import React from "react";
import "./Home.css";
import TextAnimation from "react-text-animations";
import { useGetUserQuery } from "../../redux/features/api/createAPI";

const Home = () => {
  const { data, isLoading } = useGetUserQuery("mahmudulmk4@gmail.com");

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
              <h2 className="text-lg font-medium">Hi everybody. I am</h2>
              <h1 className="text-[62px]  leading-[62px]">
                {data?.data?.userName}
              </h1>
              <div className="text-text text-xl flex"> {/* Change <p> to <div> */}
                {"## "}
                <span className="mx-2">{`>`} </span>
                <TextAnimation.Slide
                  target="Merciful"
                  text={data?.data?.userTitles}
                  animation={{
                    duration: 1000,
                    delay: 2000,
                    timingFunction: "ease-out",
                  }}
                >
                  I am a&nbsp;
                </TextAnimation.Slide>
              </div>
            </div>
            <div className="text-sm my-10">
              <p className="text-text hidden md:block ">
                {" "}
                // Press Enter to continue:
              </p>
              <p className="text-text ">// find my profile on Github:</p>
              <a href={data?.data?.githubLink} target="_blank">
                <span className="text-text-blue">const</span>{" "}
                <span className="text-text-green">githubLink</span> ={" "}
                <span className="text-text-orange">
                  “{data?.data?.githubLink}"
                </span>
              </a>
            </div>
          </div>
          <div className="">
            <img
              src={data?.data?.userImage}
              className="h-[300px] w-[300px] block mx-auto my-10 md:h-[500px] md:w-[500px] rounded-full border-b-4 image-shadow border-text-orange"
              alt=""
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
