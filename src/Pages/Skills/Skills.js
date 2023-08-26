import React from "react";
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
import demo from "../../Assets/logo.png";

const Skills = () => {
  const { data, isLoading } = useGetUserQuery("mahmudulmk4@gmail.com");
  SwiperCore.use([Navigation, Pagination, Autoplay]);

  const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    // Add more image URLs here
  ];

  return (
    <div className="md:flex h-full skills overflow-scroll hidenScroll">
      <div className="md:w-2/12 border-r border-border-bg pl-4 md:flex ">
        <div className="md:w-10/12 w-full">
          <div>
            <div className="text-left flex items-center p-2 w-full border-b border-border-bg">
              <img src={headerDrop} className="pr-4" alt="" />
              <h2 className="text-lg font-normal">Skills</h2>
            </div>
          </div>
        </div>
      </div>

      <div className=" md:w-10/12 h-full overflow-scroll hidenScroll text-left  flex justify-center items-center">
        <div className="circle relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] border border-border-bg  rounded-full">
          <div className="relative h-full w-full -left-[50%] flex justify-center items-center">
            {data?.data?.skills &&
              data?.data?.skills.map((skill, index) => (
                <div
                  style={{ "--i": index + 1 }}
                  className="w-[40px] h-[40px] md:w-[100px] md:h-[100px] rounded-full  skillBox bg-blue-500 absolute"
                >
                  <img
                    className="insideImg h-8 w-8 md:h-20 md:w-20 mx-auto block 	"
                    src={skill.techImage}
                    alt=""
                  />
                </div>
              ))}
          </div>
          <div className="content">
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
                data?.data?.skills.map((skill) => (
                  <SwiperSlide>
                    <img
                      src={skill.techImage}
                      alt={skill.techImage}
                      className="rounded-full"
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
