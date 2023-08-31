import React, { useState } from "react";
import check from "../../../Assets/icons/Check.png";
import checked from "../../../Assets/icons/checked.png";
import { useDispatch } from "react-redux";
import { setSortProject } from "../../../redux/features/project/projectSlice";

const LanguageCard = ({ language, languageContent }) => {
  const [checkstatus, setCheckedstatus] = useState(false);
  const dispatch = useDispatch();
  const handleSortProject = (item) => {
    setCheckedstatus(!checkstatus);
    dispatch(setSortProject(item));
  };

  return (
    <li
      className="flex items-center cursor-pointer	my-4"
      onClick={() => handleSortProject(languageContent)}
    >
      <img src={checkstatus ? checked : check} alt="" />
      <div className="flex items-center">
        <img className="px-4 h-6" src={language} alt="" />
        <h2 className="text-base">{languageContent}</h2>
      </div>
    </li>
  );
};

export default LanguageCard;
