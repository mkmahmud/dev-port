import React from 'react';
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
                            <PersonalInfo folder={folderOrange} content='bio' OpenStatus={true}></PersonalInfo>
                            <PersonalInfo folder={folderGreen} content='interests'></PersonalInfo>
                            <PersonalInfo folder={folderBlue} content='educations'></PersonalInfo>
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
                    <h2 className='text-base text-text flex '><span>personal-info</span> <img className='px-10' src={cross} alt="" /></h2>
                </div>
                <div className='md:flex md:h-full'>
                    <div className='md:w-1/2 border-r border-border-bg relative'>
                        <ul className='text-text text-left py-4 px-6'>
                            <li><span className='px-6'>&nbsp;1</span> <span>/**</span></li>
                            <li><span className='px-6'>&nbsp;2</span> <span> * About me</span></li>
                            <li><span className='px-6'>&nbsp;3</span> <span> * I have 5 years of еxperience in web</span></li>
                            <li><span className='px-6'>&nbsp;4</span> <span> * development lorem ipsum dolor sit amet, </span></li>
                            <li><span className='px-6'>&nbsp;5</span> <span> * consectetur adipiscing elit, sed do eiusmod</span></li>
                            <li><span className='px-6'>&nbsp;6</span> <span> * tempor incididunt ut labore et dolore</span></li>
                            <li><span className='px-6'>&nbsp;7</span> <span> * magna aliqua. Ut enim ad minim veniam,</span></li>
                            <li><span className='px-6'>&nbsp;8</span> <span> * quis nostrud exercitation ullamco laboris</span></li>
                            <li><span className='px-6'>&nbsp;9</span> <span> * nisi ut aliquip ex ea commodo consequat.</span></li>
                            <li><span className='px-6'>10</span> <span> * Duis aute irure dolor in reprehenderit in</span></li>
                            <li><span className='px-6'>11</span> <span> * voluptate velit esse cillum dolore eu fugiat </span></li>
                            <li><span className='px-6'>12</span> <span> * Duis aute irure dolor in reprehenderit in</span></li>
                            <li><span className='px-6'>13</span> <span> */</span></li>
                        </ul>
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