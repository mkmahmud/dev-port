import React from "react";
import { Link } from "react-router-dom";
import github from "../../Assets/icons/social/github.png";
import linkedin from "../../Assets/icons/linkedin-fill.png";
import facebook from "../../Assets/icons/social/facebook.png";
import stackOverflow from "../../Assets/icons/social/stack-overflow-line.png";
import { useGetUserQuery } from "../../redux/features/api/createAPI";
import { motion } from "framer-motion";

const Footer = () => {
  const { data } = useGetUserQuery("mahmudulmk4@gmail.com");

  return (
    <div className="border-t border-b border-border-bg ">
      <div className=" flex  items-center">
        <motion.h2
        initial={{ opacity: 0, x:-100 }}
        animate={{ opacity: 1 , x:0}}
        transition={{ duration: 0.3 }}
         className="text-text text-left pl-[18px] font-[450] pr-4 md:w-2/12">
          find me in also:
        </motion.h2>
        <ul className="flex md:w-10/12">
          <li className="footer-links border-x">
            <motiona href={data?.data?.linkedinLink} target="_blank">
              <img src={linkedin} alt="" />
            </motiona>
          </li>
          {/* <li className='footer-links border-x'><a href='https://www.facebook.com/mkmahmuddev/' target='_blank'><img src={facebook} alt="" /></a></li>
                    <li className='footer-links border-x'><a href='https://stackoverflow.com/users/16854390/md-mahmudul-hasan' target='_blank'><img src={stackOverflow} alt="" /></a></li> */}
          <li className="footer-links border-x grow"></li>
          <li className="footer-links ">
            <a
              target="_blank"
              href={data?.data?.githubLink}
              className="flex justify-end"
            >
              <span className="hidden md:block px-2">
                @{data?.data?.githubUserName}
              </span>{" "}
              <img src={github} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
