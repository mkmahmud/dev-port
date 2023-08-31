import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { useGetUserQuery } from "../../redux/features/api/createAPI";
import nav from "../../Assets/icons/nav.png";
import cross from "../../Assets/icons/nav-cross.png";
import { motion } from "framer-motion";
const Navbar = () => {
  const { data } = useGetUserQuery("mahmudulmk4@gmail.com");
  const [mobileMenus, setMobileMenus] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const toggleMobileMenus = () => {
    setMobileMenus(!mobileMenus);
  };

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <div className="md:flex">
      {/* Logo and hambargar */}
      <div className="flex justify-between items-center p-[18px] border-b border-border-bg md:w-2/12">
        {data?.data && (
          <motion.h2
          initial={{ opacity: 0, x:-100 }}
          animate={{ opacity: 1 , x:0}}
          transition={{ duration: 0.3 }}
          className="text-text font-[450] flex items-center">
            <img src={data?.data?.userLogo} className="h-6 w-6 mx-2" alt="" />{" "}
            {data?.data?.userName}
          </motion.h2>
        )}
        <div className="md:hidden" onClick={toggleMobileMenus}>
          <img src={mobileMenus ? cross : nav} alt="" />
        </div>
      </div>

      {/* Mobile Menus */}
      <motion.div
        initial={{ opacity: 0.6 }}
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
          
        }}
        whileTap={{ scale: 0.9 }}
        whileInView={{ opacity: 1 }}

        className={`${
          mobileMenus ? "block" : "hidden"
        } fixed w-full bg-[#011627eb] top-0 h-screen flex flex-col justify-center items-center transition z-30`}
      >
        <button
          className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-10 transition duration-300 ease-in-out hover:text-red-500"
          onClick={toggleMobileMenus}
        >
          <img src={mobileMenus ? cross : nav} alt="" />
        </button>
        <ul className="w-full flex flex-col justify-center items-center p-0">
          {["/", "/about", "/projects", "/skills", "/contact"].map((path) => (
            <li
              key={path}
              className={`nav-links w-full text-center py-4 ${
                isActive(path) ? "navActive" : ""
              } `}
              onClick={toggleMobileMenus}
            >
              <Link to={path}>
                {path === "/" ? "_Home" : `_${path.substring(1)}`}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
      {/* Desktop Menus */}
      <ul className="flex md:w-10/12 hidden md:flex">
        {["/", "/about", "/projects", "/skills", "/contact"].map((path) => (
          <li
            key={path}
            className={`nav-links rounded-Border ${
              isActive(path) ? "navActive" : ""
            }`}
          >
            <Link to={path}>
              {path === "/" ? "_Home" : `_${path.substring(1)}`}
            </Link>
          </li>
        ))}
        {data?.data?.resume && (
          <li className="nav-links rounded-Border flex-grow text-right">
            <a
              href={data?.data?.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              _Resume
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
