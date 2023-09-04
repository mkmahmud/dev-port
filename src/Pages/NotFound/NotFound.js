import React from "react";
import { Link } from "react-router-dom";
import SecondButton from "../../Components/Button/SecondButton";
import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <div className="h-screen w-full relative ">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Not Found</title>
      </Helmet>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h2 className="text-[35px] text-text">error</h2>
        <h2 className="text-[70px] text-text-yellow">404</h2>
        <p className="text-[50px] text-text-orange">page-Not-Found</p>

        <SecondButton path="/" text="_go-home"></SecondButton>
      </div>
    </div>
  );
};

export default NotFound;
