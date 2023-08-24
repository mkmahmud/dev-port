import React, { useState } from "react";
import "./About.css";
import headerDrop from "../../Assets/icons/headerDrop.png";
import folderGreen from "../../Assets/icons/folders/green.png";
import folderOrange from "../../Assets/icons/folders/orange.png";
import folderBlue from "../../Assets/icons/folders/blue.png";
import PersonalInfo from "./PersonalInfoFolder/PersonalInfo";
import email from "../../Assets/icons/mail-icon.png";
import phone from "../../Assets/icons/phone-icon.png";
import cross from "../../Assets/icons/close-icon.png";
import comment from "../../Assets/icons/comments-icon.png";
import starts from "../../Assets/icons/Star.png";
import { useGetUserQuery } from "../../redux/features/api/createAPI";

const About = () => {
  // Show File
  const [showedFile, setShowdFile] = useState("Profile");

  const { data, isLoading } = useGetUserQuery("mahmudulmk4@gmail.com");
  console.log(data.data);
  return (
    <div className="md:flex h-full ">
      <div className="md:w-2/12 border-r border-border-bg md:flex pl-4">
        <div className="md:w-10/12 w-full">
          <div>
            <div className="text-left flex items-center p-2 w-full border-b border-border-bg">
              <img src={headerDrop} className="pr-4" alt="" />
              <h2 className="text-lg font-normal">personal-info</h2>
            </div>
            <ul className="p-2">
              <PersonalInfo
                folder={folderOrange}
                content="bio"
                OpenStatus={true}
                file={{ fileName: "Profile", setShowdFile }}
              ></PersonalInfo>
              <PersonalInfo
                folder={folderGreen}
                content="Experience"
                file={{ fileName: "Experience", setShowdFile }}
              ></PersonalInfo>
              <PersonalInfo
                folder={folderBlue}
                content="educations"
                file={{ fileName: "Education", setShowdFile }}
              ></PersonalInfo>
            </ul>
          </div>
          <div className="my-4">
            <div className="text-left flex items-center p-2 w-full border-b border-t border-border-bg">
              <img src={headerDrop} className="pr-4" alt="" />
              <h2 className="text-lg font-normal">Contacts</h2>
            </div>

            <ul className="p-2">
              <li className="my-2 flex items-center  text-text text-sm">
                <img src={email} className="pr-2" alt="" />
                <a href={`mailto:${data?.data?.email}`}>{data?.data?.email}</a>
              </li>
              <li className="my-2 flex items-center  text-text ">
                <img src={phone} className="pr-2" alt="" />
                <span>{data?.data?.phoneNumber}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="md:w-10/12 h-full overflow-hidden">
        <div className="p-2 text-left border-b border-border-bg">
          <h2 className="text-base text-text flex ">
            <span>
              {showedFile === "Profile" && "Profile"}{" "}
              {showedFile === "Education" && "Education"}{" "}
              {showedFile === "Experience" && "Experience"}
            </span>{" "}
            <img
              onClick={() => {
                setShowdFile("Profile");
              }}
              className="px-10"
              src={cross}
              alt=""
            />
          </h2>
        </div>
        <div className="md:flex md:h-full">
          <div className="md:w-1/2 border-r border-border-bg relative">
            {showedFile === "Profile" && (
              <ul className="text-text text-left py-4 px-6 overflow-scroll h-[80vh] about-profile">
                <li className="text-center text-lg font-bold py-2 ">
                  <span>/** About Me ** /</span>
                </li>

                {data?.data?.aboutMe &&
                  data?.data?.aboutMe.map((singelLine) => (
                    <li className="flex py-4">
                      <span>{singelLine}</span>
                    </li>
                  ))}
              </ul>
            )}
            {showedFile === "Education" && (
              <ul className="text-text text-left py-4 px-6">
                <li className="text-center text-lg font-bold py-2 ">
                  <span>/** Experience ** /</span>
                </li>

                {data?.data?.education &&
                  data?.data?.education.map((edu) => (
                    <li className="px-4 py-6 ">
                      <ul className="flex ">
                        <li className="font-bold">{edu.degreeTitle},</li>
                        <li className="pl-2">{edu.university}</li>
                      </ul>
                      <p className="py-2">{edu.about}</p>
                      <h3 className="font-semibold">{edu.duration}</h3>
                    </li>
                  ))}
              </ul>
            )}
            {showedFile === "Experience" && (
              <ul className="text-text text-left py-4 px-6">
                <li className="text-center text-lg font-bold py-2 ">
                  <span>/** Experience ** /</span>
                </li>

                {data?.data?.experience &&
                  data?.data?.experience.map((exp) => (
                    <li className="px-4 py-6 ">
                      <ul className="flex justify-between">
                        <li className="font-bold">{exp.title}</li>
                        <li>{exp.company}</li>
                      </ul>
                      <p className="py-2">{exp.about}</p>
                      <h3 className="font-semibold">{exp.duration}</h3>
                    </li>
                  ))}
              </ul>
            )}

            <div className="absolute h-full w-5 border-l border-border-bg  top-0 right-0">
              <div className=" bg-border-bg h-3 w-full"></div>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <div className="text-text text-left py-4 px-6">
              <h2 className="text-text">// Code snippet showcase:</h2>
              <div className="my-4">
                <div className="flex justify-between items-center mr-6 my-10">
                  <div className="flex items-center">
                    <img
                      src={data?.data?.userImage}
                      className="h-12 w-12 rounded-full mx-4"
                      alt=""
                    />
                    <div>
                      <p>{data?.data?.githubUserName}</p>
                      <p>created 5 months ago</p>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <h1 className="flex space-x-2">
                      <img src={comment} alt="" /> <span>Details</span>
                    </h1>
                    <h1 className="flex space-x-2">
                      <img src={starts} alt="" /> <span>3</span>{" "}
                      <span>starts</span>
                    </h1>
                  </div>
                </div>

                <div className="bg-[#011221] rounded-2xl px-8 py-6 text-sm">
                  <p>
                    <span className="text-text-orange">function</span>{" "}
                    initializeModelChunk{" "}
                    <span className="text-text-blue">&lt;</span>
                    <span className="text-text-green">T</span>
                    <span className="text-text-blue">&gt;</span> (chunk:
                    ResolvedModelChunk): T{" {"}
                  </p>
                  <div className="pl-4">
                    <p>
                      const value: <span className="text-text-yellow">T</span> ={" "}
                      <span className="text-purple">parseModel</span>( chunk.
                      <span className="text-text-blue">_response</span>, chunk.
                      <span className="text-text-blue">_value</span>);
                    </p>
                    <p>
                      <span className="text-text-orange">const</span>{" "}
                      initializedChunk:{" "}
                      <span className="text-text-yellow">InitializedChunk</span>
                      <span className="text-text-blue">&lt;</span>
                      <span className="text-text-yellow">T</span>
                      <span className="text-text-blue">&gt;</span> = {"{"}{" "}
                      ...chunk, _status: INITIALIZED, _value: value
                      {"}"};
                    </p>
                    <p>
                      initializedChunk.
                      <span className="text-text-blue">_status</span> =
                      INITIALIZED;
                    </p>
                    <p>
                      initializedChunk.
                      <span className="text-text-blue">_value</span> = value;
                    </p>
                    <p>
                      <span className="text-text-orange">return</span> value;
                    </p>
                  </div>
                  <p>{"}"}</p>
                </div>
              </div>
              <div className="my-4">
                <div className="flex justify-between items-center mr-6 my-10">
                  <div className="flex items-center">
                    <img
                      src={data?.data?.userImage}
                      className="h-12 w-12 rounded-full mx-4"
                      alt=""
                    />
                    <div>
                      <p>{data?.data?.githubUserName}</p>
                      <p>created 5 months ago</p>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <h1 className="flex space-x-2">
                      <img src={comment} alt="" /> <span>Details</span>
                    </h1>
                    <h1 className="flex space-x-2">
                      <img src={starts} alt="" /> <span>3</span>{" "}
                      <span>starts</span>
                    </h1>
                  </div>
                </div>
                <div className="bg-[#011221] rounded-2xl px-8 py-6 text-sm">
                  <p>
                    <span className="text-text-orange">function</span>{" "}
                    initializeModelChunk{" "}
                    <span className="text-text-blue">&lt;</span>
                    <span className="text-text-green">T</span>
                    <span className="text-text-blue">&gt;</span> (chunk:
                    ResolvedModelChunk): T{" {"}
                  </p>
                  <div className="pl-4">
                    <p>
                      const value: <span className="text-text-yellow">T</span> ={" "}
                      <span className="text-purple">parseModel</span>( chunk.
                      <span className="text-text-blue">_response</span>, chunk.
                      <span className="text-text-blue">_value</span>);
                    </p>
                    <p>
                      <span className="text-text-orange">const</span>{" "}
                      initializedChunk:{" "}
                      <span className="text-text-yellow">InitializedChunk</span>
                      <span className="text-text-blue">&lt;</span>
                      <span className="text-text-yellow">T</span>
                      <span className="text-text-blue">&gt;</span> = {"{"}{" "}
                      ...chunk, _status: INITIALIZED, _value: value
                      {"}"};
                    </p>
                    <p>
                      initializedChunk.
                      <span className="text-text-blue">_status</span> =
                      INITIALIZED;
                    </p>
                    <p>
                      initializedChunk.
                      <span className="text-text-blue">_value</span> = value;
                    </p>
                    <p>
                      <span className="text-text-orange">return</span> value;
                    </p>
                  </div>
                  <p>{"}"}</p>
                </div>
              </div>
            </div>
            <div className="absolute h-full w-5 border-l border-border-bg  top-0 right-0">
              <div className=" bg-border-bg h-3 w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
