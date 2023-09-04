import React, { useState } from "react";
import headerDrop from "../../Assets/icons/headerDrop.png";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.min.css";

import "./Skills.css";
import { useGetUserQuery } from "../../redux/features/api/createAPI";

import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Skills = () => {
  const { data, isLoading } = useGetUserQuery("mahmudulmk4@gmail.com");
  SwiperCore.use([Navigation, Pagination, Autoplay]);
  const [isOpenSkills, setisOpenSkills] = useState(true);
  const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    // Add more image URLs here
  ];

  return (
    <div className="md:flex h-full skills overflow-scroll hidenScroll">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mahmudul Hasan MK - Skills</title>
      </Helmet>
      <div className="md:w-2/12 border-r border-border-bg pl-4 md:flex ">
        <div className="md:w-10/12 w-full">
          <div>
            <div
              className="text-left flex items-center p-2 w-full border-b border-border-bg cursor-pointer"
              onClick={() => {
                setisOpenSkills(!isOpenSkills);
              }}
            >
              {isOpenSkills ? (
                <img src={headerDrop} className="pr-4 " alt="" />
              ) : (
                <img src={headerDrop} className="pr-4 -rotate-90 " alt="" />
              )}
              <h2 className="text-lg font-normal">Skills</h2>
            </div>
            {isOpenSkills && (
              <div>
                {data?.data?.sideSkills &&
                  data?.data?.sideSkills.map((side, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: -100 }}
                      animate={{ x: 0 }}
                      transition={{ type: "spring", mass: 0.3 * (index + 1) }}
                      className="text-left text-text my-6"
                    >
                      <h2 className="text-bold  text-xl  ">
                        {side.skillsTitle}
                      </h2>
                      <p>{side.details}</p>
                    </motion.div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className=" md:w-10/12 h-full overflow-scroll hidenScroll text-left  flex justify-center items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", mass: 0.5 }}
          className="circle relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] border border-border-bg  rounded-full"
        >
          <div className="relative h-full w-full -left-[50%] flex justify-center items-center">
            {data?.data?.skills &&
              data?.data?.skills.map((skill, index) => (
                <div
                  key={index}
                  style={{ "--i": index + 1 }}
                  className="w-[40px] h-[40px] md:w-[100px] md:h-[100px] rounded-full  skillBox bg-blue-500 absolute"
                >
                  <motion.img
                    className="insideImg h-8 w-8 md:h-20 md:w-20 mx-auto block 	"
                    src={skill.techImage}
                    alt=""
                  />
                </div>
              ))}
          </div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", mass: 0.9 }}
            className="content"
          >
            <div className="carosul_content"></div>
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              autoplay={{ delay: 500 }}
              loop={true}
              effect="fade"
              style={{ width: "40%", textAlign: "center" }}
              fadeEffect={{
                crossFade: true, // Enable cross fade animation
                duration: 800, // Set the duration in milliseconds
              }}
            >
              {data?.data?.skills &&
                data?.data?.skills.map((skill, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={skill.techImage}
                      alt={skill.techImage}
                      className="rounded-full"
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
