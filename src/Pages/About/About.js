import React, { useState } from 'react';
import './About.css';
import a1 from '../../Assets/icons/a3.png';
import a2 from '../../Assets/icons/a2.png';
import a3 from '../../Assets/icons/a1.png';
import headerDrop from '../../Assets/icons/headerDrop.png';
import folderGreen from '../../Assets/icons/folders/green.png';
import folderOrange from '../../Assets/icons/folders/orange.png';
import folderBlue from '../../Assets/icons/folders/blue.png';
import PersonalInfo from './PersonalInfoFolder/PersonalInfo';
import email from '../../Assets/icons/mail-icon.png';
import phone from '../../Assets/icons/phone-icon.png';
import cross from '../../Assets/icons/close-icon.png';
import profile from '../../Assets/user.png';
import comment from '../../Assets/icons/comments-icon.png';
import starts from '../../Assets/icons/Star.png';

const About = () => {

    // Show File
    const [showedFile, setShowdFile] = useState('Profile.mk');
    console.log(showedFile)

    return (
        <div className='md:flex h-full '>
            <div className='md:w-2/12 border-r border-border-bg md:flex '>
                <div className='hidden md:block md:w-2/12 border-r border-border-bg p-2'>
                    <img src={a1} alt="" />
                    <img src={a2} className='my-[33px]' alt="" />
                    <img src={a3} alt="" />
                </div>
                <div className='md:w-10/12 w-full'>
                    <div >
                        <div className='text-left flex items-center p-2 w-full border-b border-border-bg'>
                            <img src={headerDrop} className='pr-4' alt="" />
                            <h2 className='text-lg font-normal'>personal-info</h2>
                        </div>
                        <ul className='p-2'>
                            <PersonalInfo folder={folderOrange} content='bio' OpenStatus={true} file={{ fileName: 'Profile.mk', setShowdFile }}></PersonalInfo>
                            <PersonalInfo folder={folderGreen} content='interests' file={{ fileName: 'Likes.mk', setShowdFile }}></PersonalInfo>
                            <PersonalInfo folder={folderBlue} content='educations' file={{ fileName: 'Education.mk', setShowdFile }}></PersonalInfo>
                        </ul>
                    </div>
                    <div className='my-4'>
                        <div className='text-left flex items-center p-2 w-full border-b border-t border-border-bg'>
                            <img src={headerDrop} className='pr-4' alt="" />
                            <h2 className='text-lg font-normal'>Contacts</h2>
                        </div>

                        <ul className='p-2'>
                            <li className='my-2 flex items-center  text-text text-sm'><img src={email} className='pr-2' alt="" /><span>mahmudulmk4@gmail.com</span></li>
                            <li className='my-2 flex items-center  text-text '><img src={phone} className='pr-2' alt="" /><span>+88017-4150-3127</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='md:w-10/12 h-full overflow-hidden'>
                <div className='p-2 text-left border-b border-border-bg'>
                    <h2 className='text-base text-text flex '><span>{showedFile === 'Profile.mk' && 'Profile'} {showedFile === 'Education.mk' && 'Education'} {showedFile === 'Likes.mk' && 'Likes'}</span> <img onClick={() => {setShowdFile('Profile.mk')}} className='px-10' src={cross} alt="" /></h2>
                </div>
                <div className='md:flex md:h-full'>
                    <div className='md:w-1/2 border-r border-border-bg relative'>
                        {
                            showedFile === 'Profile.mk'
                            &&
                            <ul className='text-text text-left py-4 px-6 overflow-scroll h-[80vh] about-profile'>
                                <li><span className='px-6'>&nbsp;1</span> <span>/** About Me ** /</span></li>
                                <li className='flex'><span className='px-6'>&nbsp;2</span> <span>A MERN (MongoDB, Express, React, Node.js) and PHP (Hypertext Preprocessor) developer is a skilled software professional who specializes in utilizing the MERN stack and PHP technology to design and develop web applications. These technologies are widely recognized for their ability to create dynamic, interactive, and scalable web applications that meet the demands of modern businesses. </span></li>
                                <li className='flex'><span className='px-6'>&nbsp;3</span> <span> * </span></li>
                                <li className='flex'><span className='px-6'>&nbsp;4</span> <span>A MERN developer possesses expertise in developing full-stack web applications by utilizing the MERN stack, which comprises MongoDB, a NoSQL database; Express.js, a Node.js web application framework; React, a JavaScript library for building user interfaces; and Node.js, an open-source, cross-platform JavaScript runtime environment. By leveraging the MERN stack, developers can create scalable, efficient, and responsive web applications. </span></li>
                                <li className='flex'><span className='px-6'>&nbsp;5</span> <span> * </span></li>
                                <li className='flex'><span className='px-6'>&nbsp;6</span> <span>On the other hand, a PHP developer specializes in using PHP programming language to create server-side applications. PHP is a popular scripting language that is commonly used to create dynamic web pages, e-commerce websites, and web applications.</span></li>
                                <li className='flex'><span className='px-6'>&nbsp;7</span> <span> * </span></li>
                                <li className='flex'><span className='px-6'>&nbsp;8</span> <span>A developer who is proficient in both MERN and PHP technologies can create highly functional, feature-rich, and scalable web applications. They can leverage the power of MERN stack to create fast, responsive, and highly interactive user interfaces, while using PHP to build the backend of the application.</span></li>
                                <li className='flex'><span className='px-6'>&nbsp;9</span> <span> * </span></li>
                                <li className='flex'><span className='px-6'>10</span> <span>Some of the key skills that a MERN and PHP developer should have include proficiency in JavaScript, React, Node.js, Express, MongoDB, PHP, MySQL, and other relevant web development technologies. They should also have knowledge of web development best practices, database design, and web security.</span></li>
                                <li className='flex'><span className='px-6'>11</span> <span> *  </span></li>
                                <li className='flex'><span className='px-6'>12</span> <span>Overall, a MERN and PHP developer is a highly skilled professional who can create sophisticated web applications that can meet the needs of businesses of all sizes.</span></li>
                                <li className='flex'><span className='px-6'>13</span> <span> */</span></li>
                            </ul>
                        }
                        {
                            showedFile === 'Education.mk'
                            &&
                            <ul className='text-text text-left py-4 px-6'>
                                <li><span className='px-6'>&nbsp;1</span> <span>/**</span></li>
                                <li><span className='px-6'>&nbsp;2</span> <span> * Education</span></li>
                            </ul>
                        }
                            {
                            showedFile === 'Likes.mk'
                            &&
                            <ul className='text-text text-left py-4 px-6'>
                                <li><span className='px-6'>&nbsp;1</span> <span>/**</span></li>
                                <li><span className='px-6'>&nbsp;2</span> <span> * Likes</span></li>
                            </ul>
                        }


                        <div className='absolute h-full w-5 border-l border-border-bg  top-0 right-0'>
                            <div className=' bg-border-bg h-3 w-full'>

                            </div>
                        </div>
                    </div>

                    <div className='md:w-1/2 relative'>
                        <div className='text-text text-left py-4 px-6'>
                            <h2 className='text-text'>// Code snippet showcase:</h2>
                            <div className='my-4'>
                                <div className='flex justify-between items-center mr-6 my-10'>
                                    <div className='flex items-center'>
                                        <img src={profile} className='h-12 w-12 rounded-full' alt="" />
                                        <div>
                                            <p>@mkmahmud</p>
                                            <p>created 5 months ago</p>
                                        </div>
                                    </div>
                                    <div className='flex space-x-4'>
                                        <h1 className='flex space-x-2'><img src={comment} alt="" /> <span>Details</span></h1>
                                        <h1 className='flex space-x-2'><img src={starts} alt="" />  <span>3</span> <span>starts</span></h1>
                                    </div>
                                </div>
                                <div className='bg-[#011221] rounded-2xl px-[29px] py-[23px] text-sm'>
                                    <p><span className='text-text-orange'>function </span>initializeModelChunk <span className='text-text-blue'>{`<`}</span><span className='text-text-green'>T</span><span className='text-text-blue'>{`>`}</span> {`(chunk: ResolvedModelChunk): T {`}  </p>
                                    <div className='pl-4'>
                                        <p>  const value: <span className='text-text-yellow'>T</span> = <span className='text-purple'>parseModel</span>(chunk.<span className='text-text-blue'>_response</span>, chunk.<span className='text-text-blue'>_value</span> );</p>
                                        <p>  <span className='text-text-orange'>const</span> initializedChunk: <span className='text-text-yellow'>InitializedChunk</span><span className='text-text-blue'>{`<`}</span><span className='text-text-yellow'>T</span><span className='text-text-blue'>{`> = `}</span>  (chunk: any); </p>
                                        <p>  initializedChunk.<span className='text-text-blue'>_status = INITIALIZED</span>;</p>
                                        <p>  initializedChunk.<span className='text-text-blue'>_value</span> value;</p>
                                        <p>  <span className='text-text-orange'>return</span> value;</p>
                                    </div>
                                    <p>{`}`}</p>
                                </div>
                            </div>
                            <div className='my-4'>
                                <div className='flex justify-between items-center mr-6 my-10'>
                                    <div className='flex items-center'>
                                        <img src={profile} className='h-12 w-12 rounded-full' alt="" />
                                        <div>
                                            <p>@mkmahmud</p>
                                            <p>created 5 months ago</p>
                                        </div>
                                    </div>
                                    <div className='flex space-x-4'>
                                        <h1 className='flex space-x-2'><img src={comment} alt="" /> <span>Details</span></h1>
                                        <h1 className='flex space-x-2'><img src={starts} alt="" />  <span>3</span> <span>starts</span></h1>
                                    </div>
                                </div>
                                <div className='bg-[#011221] rounded-2xl px-[29px] py-[23px] text-sm'>
                                    <p><span className='text-text-orange'>function </span>initializeModelChunk <span className='text-text-blue'>{`<`}</span><span className='text-text-green'>T</span><span className='text-text-blue'>{`>`}</span> {`(chunk: ResolvedModelChunk): T {`}  </p>
                                    <div className='pl-4'>
                                        <p>  const value: <span className='text-text-yellow'>T</span> = <span className='text-purple'>parseModel</span>(chunk.<span className='text-text-blue'>_response</span>, chunk.<span className='text-text-blue'>_value</span> );</p>
                                        <p>  <span className='text-text-orange'>const</span> initializedChunk: <span className='text-text-yellow'>InitializedChunk</span><span className='text-text-blue'>{`<`}</span><span className='text-text-yellow'>T</span><span className='text-text-blue'>{`> = `}</span>  (chunk: any); </p>
                                        <p>  initializedChunk.<span className='text-text-blue'>_status = INITIALIZED</span>;</p>
                                        <p>  initializedChunk.<span className='text-text-blue'>_value</span> value;</p>
                                        <p>  <span className='text-text-orange'>return</span> value;</p>
                                    </div>
                                    <p>{`}`}</p>
                                </div>
                            </div>
                        </div>
                        <div className='absolute h-full w-5 border-l border-border-bg  top-0 right-0'>
                            <div className=' bg-border-bg h-3 w-full'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;