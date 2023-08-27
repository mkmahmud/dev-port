import React, { useEffect, useState } from "react";
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

// Import Swiper styles
import "swiper/css";
import "./Projects.css";

import { Autoplay, Pagination, Navigation } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { setOpenProject, toggleProject } from "../../redux/features/project/projectSlice";
import { useGetprojectsQuery } from "../../redux/features/api/createAPI";

const Projects = () => {
  const myProjects = useSelector((state) => state.myProjects);

  const { projectTitle } = myProjects?.detailsProject;

  const dispatch = useDispatch();
  const { data, isLoading } = useGetprojectsQuery("mahmudulmk4@gmail.com");

  return (
    <div className="md:flex h-full bg-sec-bg">
      <div className="md:w-2/12 border-r border-border-bg md:flex pl-4">
        <div className="w-full ">
          <div className="text-left flex items-center p-2 w-full  border-b border-border-bg">
            <img src={headerDrop} className="pr-4" alt="" />
            <h2 className="text-lg font-normal ">Projects</h2>
          </div>
          <ul className="p-2">
            <LanguageCard
              language={reactImage}
              languageContent="React"
            ></LanguageCard>
            <LanguageCard
              language={htmlImage}
              languageContent="HTML"
            ></LanguageCard>
            <LanguageCard
              language={cssImage}
              languageContent="CSS"
            ></LanguageCard>
            <LanguageCard
              language={gatsImage}
              languageContent="Gatsby"
            ></LanguageCard>
          </ul>
        </div>
      </div>
      <div className="md:w-10/12  overflow-scroll projects-board text-text relative">
        <div className="p-2 text-left border-b border-border-bg absolute w-full">
          <h2 className="text-lg text-text flex justify-between">
            <span>Projects</span> <img className="px-10 h-8" onClick={() => {dispatch(setOpenProject())}} src={cross} alt="" />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 pt-20">
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
          {data?.data &&
            !myProjects.openProject &&
            data?.data.map((project) => (
              <ProjectsCard data={project} key={project._id}>
                {" "}
              </ProjectsCard>
            ))}
        </div>

        {/* Details Project */}
        <div>
          {myProjects.detailsProject && myProjects.openProject && (
            <div>
              <h2>{projectTitle}</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
