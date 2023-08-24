import React from "react";
import headerDrop from "../../Assets/icons/headerDrop.png";

import "./Skills.css";
import { useGetUserQuery } from "../../redux/features/api/createAPI";

const Skills = () => {
  const { data, isLoading } = useGetUserQuery("mahmudulmk4@gmail.com");
  return (
    <div className="md:flex h-full skills overflow-scroll hidenScroll">
      <div className="md:w-2/12 border-r border-border-bg md:flex ">
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
        <div className="circle relative w-[300px] h-[300px] md:w-[600px] md:h-[600px]  rounded-full">
          <div className="relative h-full w-full -left-[50%] flex justify-center items-center">
            {data?.data?.skills &&
              data?.data?.skills.map((skill, index) => (
                <div
                  style={{ "--i": index + 1 }} 
                  className="w-[40px] h-[40px] md:w-[100px] md:h-[100px] rounded-full  skillBox bg-blue-500 absolute"
                >
                  <img
                    className="insideImg h-8 w-8 md:h-20 md:w-20 mx-auto block animate-pulse	"
                    src={skill.techImage}
                    alt=""
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
