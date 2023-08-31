import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import headerDrop from "../../Assets/icons/headerDrop.png";
import cross from "../../Assets/icons/close-icon.png";
import LanguageCard from "./LanguageCard/LanguageCard";
import reactImage from "../../Assets/icons/languages/react.png";
import htmlImage from "../../Assets/icons/languages/html.png";
import cssImage from "../../Assets/icons/languages/css.png";
import gatsImage from "../../Assets/icons/languages/gatsby.png";
import ProjectsCard from "./ProjectsCard/ProjectsCard";
import TagButton from "../../Components/Button/TagButton";
import SecondButton from "../../Components/Button/SecondButton";
import starfill from "../../Assets/icons/starfill.png";
import staroutline from "../../Assets/icons/staroutline.png";
import sideArrow from "../../Assets/icons/sideArrow.png";
import { motion, layout } from "framer-motion";
// Import Swiper styles
import "swiper/css";
import "./Projects.css";

import { Autoplay, Pagination, Navigation } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { setOpenProject } from "../../redux/features/project/projectSlice";
import {
  useGetUserQuery,
  useGetprojectsQuery,
} from "../../redux/features/api/createAPI";
import SideProjectCard from "./ProjectsCard/SideProjectCard";

const Projects = () => {
  const myProjects = useSelector((state) => state.myProjects);
  const sortProject = useSelector((state) => state.myProjects.sortProject);

  const {
    projectTitle,
    projectKeyWord,
    gellaryImages,
    overview,
    developersRole,
    Duration,
    challenges,
    features,
    Technologies,
    Result,
  } = myProjects?.detailsProject;

  const dispatch = useDispatch();
  const { data, isLoading } = useGetprojectsQuery("mahmudulmk4@gmail.com");
  const { data: userData, isLoading: userLoading } = useGetUserQuery(
    "mahmudulmk4@gmail.com"
  );
  const [sideProject, setSideProject] = useState(true);

  const detailsProjectRef = useRef(null); // Create a ref for the details-project section

  useEffect(() => {
    // Scroll the details-project section into view when details change
    if (
      detailsProjectRef.current &&
      myProjects.detailsProject &&
      myProjects.openProject
    ) {
      detailsProjectRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [myProjects.detailsProject, myProjects.openProject]);

  const filteredAndSortedData = data?.data
    ? data.data.filter((project) =>
        project.projectCategory.some((category) =>
          sortProject.some((input) =>
            category.toLowerCase().includes(input.toLowerCase())
          )
        )
      )
    : [];

  console.log(filteredAndSortedData);

  return (
    <div className="md:flex h-full bg-sec-bg   md:overflow-hidden ">
      <div className="sticky top-0 z-20 bg-cardBG about-profile  overflow-scroll md:static md:w-2/12 border-r border-border-bg md:flex pl-4">
        <motion.div
          layout
          animate={{ opacity: 0.9 }}
          transition={{
            opacity: { ease: "linear" },
            layout: { duration: 0.3 },
          }}
          className="w-full overflow-scroll about-profile"
        >
          <div
            onClick={() => {
              setSideProject(!sideProject);
            }}
            className="cursor-pointer text-left flex items-center   p-2 w-full bg-cardBG   sticky top-0 z-10   border-b border-border-bg"
          >
            <h2 className="text-lg font-normal ">Projects</h2>
            {sideProject ? (
              <img
                src={sideArrow}
                className=" h-8  bloxk mx-auto rotate-90"
                alt=""
              />
            ) : (
              <img src={sideArrow} className=" h-8  bloxk mx-auto" alt="" />
            )}
          </div>

          {!myProjects.openProject && sideProject && (
            <motion.ul
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ type: "spring", mass: 0.3 }}
              className="p-2"
            >
              {userData?.data?.shortTechnologies &&
                userData?.data?.shortTechnologies.map((shortTechnologie) => (
                  <LanguageCard
                    language={shortTechnologie.img}
                    languageContent={shortTechnologie.name}
                  ></LanguageCard>
                ))}
            </motion.ul>
          )}

          {data?.data &&
            myProjects.openProject &&
            sideProject &&
            data?.data.map((project) => (
              <SideProjectCard data={project} key={project._id}>
                {" "}
              </SideProjectCard>
            ))}
        </motion.div>
      </div>

      <div className="md:w-10/12  overflow-scroll projects-board text-text relative">
        <div className="p-2 text-left border-b border-border-bg  sticky top-0 z-10 bg-cardBG w-full header">
          <h2 className="text-lg text-text flex justify-between">
            <span>
              {" "}
              {myProjects.detailsProject && myProjects.openProject
                ? `#_${projectKeyWord}`
                : "Projects"}{" "}
            </span>{" "}
            {myProjects.detailsProject && myProjects.openProject ? (
              <img
                className="px-10 h-8"
                onClick={() => {
                  dispatch(setOpenProject());
                }}
                src={cross}
                alt=""
              />
            ) : (
              ""
            )}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3  ">
          {isLoading && (
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div
                class=" animate-spin inline-block w-20 h-20 border-[3px] border-current border-t-transparent text-blue-600 rounded-full"
                role="status"
                aria-label="loading"
              >
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          )}
          {filteredAndSortedData.length
            ? filteredAndSortedData.map((project, index) => (
                <ProjectsCard
                  data={project}
                  projectId={index + 1}
                  key={project._id}
                >
                  {" "}
                </ProjectsCard>
              ))
            : data?.data &&
              !myProjects.openProject &&
              data?.data.map((project, index) => (
                <ProjectsCard
                  data={project}
                  projectId={index + 1}
                  key={project._id}
                >
                  {" "}
                </ProjectsCard>
              ))}
        </div>

        {/* Details Project */}
        <div className="details-project" ref={detailsProjectRef}>
          {myProjects.detailsProject && myProjects.openProject && (
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ type: "spring", mass: 0.3 }}
              className="overflow-hidden "
            >
              <div className="mx-4 my-2 text-left">
                <div className="">
                  <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log("slide change")}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    {gellaryImages.map((img) => (
                      <SwiperSlide>
                        {" "}
                        <img
                          src={img}
                          alt=""
                          className="my-2 h-[200px] md:h-[600px] w-full rounded-lg"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <h2 className="text-white text-[24px] md:text-[30px] py-2 font-semibold text-left ">
                  {projectTitle}
                </h2>
                <div className="md:flex my-10">
                  <h2 className="text-xl">Overview:</h2>
                  <div>
                    {overview.map((i) => (
                      <p className="p-2">{i}</p>
                    ))}
                  </div>
                </div>
                <div className="md:flex items-center my-10">
                  <h2 className="text-xl">Timeline:</h2>
                  <p className="px-2">{Duration}</p>
                </div>
                <div className="md:flex items-center my-10">
                  <h2 className="text-xl">Team:</h2>
                  <p className="px-2">{developersRole}</p>
                </div>
                <div className=" my-10">
                  <h2 className="text-xl">Challenges:</h2>
                  <ul className="px-2">
                    {challenges.map((challange) => (
                      <li className="flex items-start md:pl-10 my-4">
                        <img src={staroutline} alt="" />{" "}
                        <span className="px-2 text-lg">{challange} </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className=" my-10">
                  <h2 className="text-xl">Features:</h2>
                  <ul className="px-2">
                    {features.map((feature) => (
                      <li className="flex items-start md:pl-10 my-4">
                        <img src={starfill} alt="" />{" "}
                        <span className="px-2 text-lg">{feature} </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:flex my-10">
                  <h2 className="text-xl">Technologies:</h2>
                  <div className="px-2">
                    {Technologies.map((i, index) => (
                      <TagButton text={i} key={index.key}></TagButton>
                    ))}
                  </div>
                </div>
                <div className="md:flex  my-10">
                  <h2 className="text-xl">Result:</h2>
                  <p className="px-2">{Result}</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
