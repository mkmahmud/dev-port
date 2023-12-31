import React, { useEffect, useReducer, useState } from "react";
import headerDrop from "../../Assets/icons/headerDrop.png";
import email from "../../Assets/icons/mail-icon.png";
import phone from "../../Assets/icons/phone-icon.png";
import linkIcon from "../../Assets/icons/link.png";
import cross from "../../Assets/icons/close-icon.png";
import {
  useGetUserQuery,
  useSubmitMessageMutation,
} from "../../redux/features/api/createAPI";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";

const initialState = {
  name: "",
  email: "",
  recivedBy: "mahmud",
};

function reducer(state, action) {
  switch (action.type) {
    case "setField":
      return { ...state, [action.field]: action.value };
    case "reset":
      return initialState;
    default:
      throw new Error();
  }
}

const Contact = () => {
  const [submitMessage, { isLoading, isError, error, data }] =
    useSubmitMessageMutation();
  const [openMessage, setOpenMesege] = useState(true);
  // Toast
  const notify = () =>
    toast.success("Your Message sent Successfully !", {
      position: toast.POSITION.TOP_CENTER,
    });
  //
  const [state, dispatch] = useReducer(reducer, initialState);

  // Set sidebar options
  const [isOpenContact, setisOpenContat] = useState(true);
  const [isOpenFindMe, setisOpenFindMe] = useState(true);

  const handleInputChange = (event) => {
    dispatch({
      type: "setField",
      field: event.target.name,
      value: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await submitMessage(state);
    setOpenMesege(false);
  };

  //   Notification after successfully sending message
  // useEffect(() => {
  //   if (data?.message) {
  //     notify();
  //   }
  // }, [data]);

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const day = currentDate.toLocaleDateString("en-US", { weekday: "short" });
  const date = currentDate.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
  });
  const formattedDate = `${year},  ${date}, ${day}  `;
  const { data: mainUsesr, isLoading: mainUserLOading } = useGetUserQuery(
    "mahmudulmk4@gmail.com"
  );
  return (
    <div className="md:flex h-full ">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mahmudul Hasan MK - Contact</title>
      </Helmet>
      <div className="md:w-2/12 border-r border-border-bg md:flex pl-4 ">
        <div className="w-full">
          <div>
            <div
              className="text-left flex items-center p-2 w-full  border-b border-border-bg cursor-pointer"
              onClick={() => {
                setisOpenContat(!isOpenContact);
              }}
            >
              {isOpenContact ? (
                <img src={headerDrop} className="pr-4 " alt="" />
              ) : (
                <img src={headerDrop} className="pr-4 -rotate-90 " alt="" />
              )}
              <h2 className="text-lg font-normal ">Contact</h2>
            </div>
            {isOpenContact && (
              <ul className="p-2">
                <motion.li
                  initial={{ x: -100 }}
                  animate={{ x: 0 }}
                  transition={{ type: "spring", mass: 0.4 }}
                  className="my-2 flex items-center  text-text text-sm"
                >
                  <img src={email} className="pr-2" alt="" />
                  <a href={`mailto:${mainUsesr?.data?.email}`}>
                    {mainUsesr?.data?.email}
                  </a>
                </motion.li>
                {mainUsesr?.data?.phoneNumber && (
                  <motion.li
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ type: "spring", mass: 0.6 }}
                    className="my-2 flex items-center  text-text "
                  >
                    <img src={phone} className="pr-2" alt="" />
                    <a href={`tel:${mainUsesr?.data?.phoneNumber}`}>
                      {mainUsesr?.data?.phoneNumber}
                    </a>
                  </motion.li>
                )}
              </ul>
            )}
          </div>
          <div className="mt-5">
            <div
              className="text-left flex items-center p-2 w-full  border-b border-t border-border-bg cursor-pointer"
              onClick={() => {
                setisOpenFindMe(!isOpenFindMe);
              }}
            >
              {isOpenFindMe ? (
                <img src={headerDrop} className="pr-4 " alt="" />
              ) : (
                <img src={headerDrop} className="pr-4 -rotate-90 " alt="" />
              )}
              <h2 className="text-lg font-normal ">find-me-also-in</h2>
            </div>
            {isOpenFindMe && (
              <ul className="p-2">
                <motion.li
                  initial={{ x: -100 }}
                  animate={{ x: 0 }}
                  transition={{ type: "spring", mass: 0.5 }}
                  className="my-2 flex items-center  text-text text-sm"
                >
                  <img src={linkIcon} className="pr-2" alt="" />
                  <span>
                    <a target="_blank" href={mainUsesr?.data?.linkedinLink}>
                      Linkedin
                    </a>
                  </span>
                </motion.li>
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="md:w-10/12 h-full overflow-hidden">
        <div className="p-2 text-left border-b border-t border-border-bg">
          <h2 className="text-base text-text flex ">
            <span>Contact</span> <img className="px-10" src={cross} alt="" />
          </h2>
        </div>
        <div className="md:flex md:h-full">
          <div className="w-full py-10 md:py-0 md:w-1/2 border-r border-border-bg flex items-center justify-center relative">
            {openMessage ? (
              <form
                className="text-left text-text mx-6"
                onSubmit={handleSubmit}
              >
                <div className="my-4">
                  <p className="py-2.5">_name:</p>
                  <input
                    required
                    type="text"
                    value={state.name}
                    onChange={handleInputChange}
                    className="bg-cardBG border border-border-bg h-[41px] rounded-lg w-[291px] md:w-[371px] outline-0 px-4"
                    name="name"
                    id=""
                  />
                </div>
                <div className="my-4">
                  <p className="py-2.5">_email:</p>
                  <input
                    type="text"
                    required
                    value={state.email}
                    onChange={handleInputChange}
                    className="bg-cardBG border border-border-bg h-[41px] rounded-lg w-[291px] md:w-[371px] outline-0 px-4"
                    name="email"
                    id=""
                  />
                </div>
                <div className="my-4">
                  <p className="py-2.5">_message:</p>
                  <textarea
                    maxLength="200"
                    required
                    name="message"
                    value={state.message}
                    onChange={handleInputChange}
                    className="bg-cardBG border border-border-bg h-[141px] rounded-lg w-[291px] md:w-[371px] outline-0 px-4"
                    id=""
                    cols="30"
                    rows="20"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-button px-3.5 py-2.5 rounded-lg text-sm text-white"
                >
                  submit-message
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", mass: 0.7 }}
              >
                <h2 className="text-[26px]">Thank you! 🤘</h2>
                <p className="py-4">
                  Your message has been accepted. You will recieve answer really
                  soon!
                </p>
                <button
                  className="bg-button px-3.5 py-2.5 rounded-lg text-sm text-white"
                  onClick={() => setOpenMesege(true)}
                >
                  submit-new-message
                </button>
              </motion.div>
            )}

            <div className="absolute h-full w-5 border-l border-border-bg  top-0 right-0">
              <div className=" bg-border-bg h-3 w-full"></div>
            </div>
          </div>

          <div className="hidden md:block md:w-1/2 relative">
            <div className="text-text text-left py-4 px-6 flex items-center justify-center h-full">
              <ul className="text-text text-left py-4 px-6 text-text-blue">
                <li>
                  <span className="px-6 text-text">
                    &nbsp;<span>1</span>
                  </span>{" "}
                  <span className="text-text-purple">const</span> button{" "}
                  <span className="text-text-purple">=</span>{" "}
                  document.querySelector(
                  <span className="text-text-yellow">'#sendBtn'</span>);
                </li>
                <li>
                  <span className="px-6 text-text">
                    &nbsp;<span>2</span>
                  </span>{" "}
                </li>
                <li>
                  <span className="px-6 text-text">
                    &nbsp;<span>3</span>
                  </span>{" "}
                  <span className="text-text-purple">const</span> message{" "}
                  <span className="text-text-purple">=</span>{" "}
                  <span className="text-text">{`{`}</span>{" "}
                </li>
                <li>
                  <span className="px-6 text-text">
                    &nbsp;<span>4</span>
                  </span>{" "}
                  <span className="pl-4">name</span>
                  <span className="text-text">:</span>{" "}
                  <span className="text-text-yellow">"{state.name}"</span>
                  <span className="text-text">,</span>
                </li>
                <li>
                  <span className="px-6 text-text">
                    &nbsp;<span>5</span>
                  </span>{" "}
                  <span className="pl-4">email</span>
                  <span className="text-text">:</span>{" "}
                  <span className="text-text-yellow">"{state.email}"</span>
                  <span className="text-text">,</span>
                </li>
                <li>
                  <span className="px-6 text-text">
                    &nbsp;<span>6</span>
                  </span>{" "}
                  <span className="pl-4">message</span>
                  <span className="text-text">:</span>{" "}
                  <span className="text-text-yellow w-[300px]">
                    "{state.message}"
                  </span>
                  <span className="text-text">,</span>
                </li>
                <li>
                  <span className="px-6 text-text">
                    &nbsp;<span>7</span>
                  </span>{" "}
                  <span className="text-text pl-4">date:</span>{" "}
                  <span className="text-text-yellow">"{formattedDate}"</span>
                </li>
                <li>
                  <span className="px-6 text-text">
                    &nbsp;<span>8</span>
                  </span>{" "}
                  <span className="text-text">{`}`}</span>
                </li>
                <li>
                  <span className="px-6 text-text">
                    &nbsp;<span>9</span>
                  </span>{" "}
                </li>
                <li>
                  <span className="px-6 text-text">10</span>{" "}
                  <span>
                    {" "}
                    button.addEventListener
                    <span className="text-text">
                      {`(`}
                      <span className="text-text-yellow">'click'</span>, (){" "}
                      <span className="text-text-purple">{`=>`}</span> {`{`}
                    </span>{" "}
                  </span>
                </li>
                <li>
                  <span className="px-6 text-text">11</span> form.send{" "}
                  <span className="text-text">(</span>message
                  <span className="text-text">);</span>
                </li>
                <li>
                  <span className="px-6 text-text">12</span>
                  <span className="text-text">{`})`}</span>
                </li>
              </ul>
            </div>
            <div className="absolute h-full w-5 border-l border-border-bg  top-0 right-0">
              <div className=" bg-border-bg h-3 w-full"></div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
