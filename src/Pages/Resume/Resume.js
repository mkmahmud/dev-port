import React from 'react';
import './Resume.css';
import email from '../../Assets/icons/social/mail-line.svg';
import location from '../../Assets/icons/social/map-pin-line.svg';
import phone from '../../Assets/icons/social/phone-line.svg';
import web from '../../Assets/icons/social/window-fill.svg';
import github from '../../Assets/icons/social/github-fill.svg';
import linkedin from '../../Assets/icons/social/linkedin.svg';
import calender from '../../Assets/icons/social/calendar-line .svg';
import Keyword from './Keyword/Keyword';
import focus from '../../Assets/icons/social/focus-2-fill.svg';


const Resume = () => {


    // const links = [
    //     {
    //         key: '1',
    //         path: '/',
    //         icon: web,
    //         text: 'enj.dev'
    //     },
    //     {
    //         key: '2',
    //         path: '/',
    //         icon: linkedin,
    //         text: '@kmhef'
    //     },
    //     {
    //         key: '3',
    //         path: '/',
    //         icon: github,
    //         text: '#kmkep'
    //     }
    // ]

    return (
        <div className='overflow-scroll resume max-w-[1440px] mx-auto'>
            <div className='resume-head border-b border-[#334155] '>
                <div className='py-6 resume-content'>
                    <div className='py-6'>
                        <h2 className='text-[40px] leading-[32px] font-bold'>Mahmudul Hasn MK</h2>
                        <h3 className='text-[16px] leading-[32px] font-medium'>Front-End Developer · UI/UX Designer</h3>
                    </div>
                    <div className='md:flex justify-center'>
                        <div className='flex items-center'>
                            <img className='h-[20px] w-[20px] mx-[10px]' src={location} alt="" />
                            <span className='text-[14px]'>Dhaka, BD</span>
                        </div>
                        <div className='flex items-center'>
                            <img className='h-[20px] w-[20px] mx-[10px]' src={email} alt="" />
                            <span className='text-[14px]'>mahmudulmk4@gmail.com</span>
                        </div>
                        <div className='flex items-center'>
                            <img className='h-[20px] w-[20px] mx-[10px]' src={phone} alt="" />
                            <span className='text-[14px]'>+8801741503127</span>
                        </div>
                    </div>
                    <div className='flex justify-center my-4'>
                        <a href="_#" className='flex items-center bg-[#F6F3FF] text-[#000000] px-4 py-px rounded-full mx-2 text-[12px]'><img src={linkedin} alt="" /> <span className='mx-2'>mkhadhd</span> </a>
                        <a href="_#" className='flex items-center bg-[#F6F3FF] text-[#000000] px-4 py-px rounded-full mx-2 text-[12px]'><img src={web} alt="" /> <span className='mx-2'>mkhadhd</span> </a>
                        <a href="_#" className='flex items-center bg-[#F6F3FF] text-[#000000] px-4 py-px rounded-full mx-2 text-[12px]'><img src={github} alt="" /> <span className='mx-2'>hithub</span> </a>
                    </div>
                </div>
            </div>
            <dir className='resume-body text-left text-[14px] mx-2 md:mx-10'>

                {/* Overview */}
                <div className='md:flex justify-around border-b border-[#334155] py-6 my-6' >
                    <h2 className='md:w-2/12'><strong>OverView:</strong></h2>
                    <div className='md:w-10/12  '>
                        <h2>As a React developer, your primary responsibility would be to use the React library to develop user interfaces for web applications. This would involve writing code in JavaScript and JSX (a syntax extension for JavaScript), using React components and hooks to create reusable UI elements, and managing state and data flow within the application.</h2>
                        
                    </div>

                </div>
                {/* Education */}
                <div className='md:flex justify-around border-b border-[#334155] py-6 my-6' >
                    <h2 className='md:w-2/12'><strong>Education:</strong></h2>
                    <div className='md:w-10/12  '>
                        <div className='md:flex justify-between'><h2><strong>Dhaka University</strong> -English(Honurs) </h2><div className='flex items-center'><img src={calender} alt="" /> <span className='mx-2'>Oct 2018 - present</span></div></div>
                    </div>

                </div>
                {/* Experience */}
                <div className='md:flex justify-around border-b border-[#334155] py-6 my-6' >
                    <h2 className='md:w-2/12'><strong>Experience:</strong></h2>
                    <div className='md:w-10/12  '>
                        <div className='my-2'>
                            <div className='md:flex justify-between'><h2><strong>I texh Art</strong> — Front-End Developer (self-employed) </h2><div className='flex items-center'><img src={calender} alt="" /> <span className='mx-2'>Oct 2018 - present</span></div></div>
                            <div>
                                <Keyword text='MUI'></Keyword>
                                <Keyword text='React'></Keyword>
                                <Keyword text='Tailwind'></Keyword>
                            </div>
                            <ul>
                                <li className='flex'><img className='mr-2' src={focus} alt="" /><span>Improving the UI & UX of Femicam's desktop application based on React Electron and Material UI</span></li>
                                <li className='flex'><img className='mr-2' src={focus} alt="" /><span>Improving the UI & UX of Femicam's desktop application based on React Electron and Material UI</span></li>
                                <li className='flex'><img className='mr-2' src={focus} alt="" /><span>Improving the UI & UX of Femicam's desktop application based on React Electron and Material UI</span></li>
                                <li className='flex'><img className='mr-2' src={focus} alt="" /><span>Improving the UI & UX of Femicam's desktop application based on React Electron and Material UI</span></li>
                            </ul>
                        </div>
                        <div className='my-2'>
                            <div className='md:flex justify-between'><h2><strong>I texh Art</strong> — Front-End Developer (self-employed) </h2><div className='flex items-center'><img src={calender} alt="" /> <span className='mx-2'>Oct 2018 - present</span></div></div>
                            <div>
                                <Keyword text='MUI'></Keyword>
                                <Keyword text='React'></Keyword>
                                <Keyword text='Tailwind'></Keyword>
                            </div>
                            <ul>
                                <li className='flex'><img className='mr-2' src={focus} alt="" /><span>Improving the UI & UX of Femicam's desktop application based on React Electron and Material UI</span></li>
                                <li className='flex'><img className='mr-2' src={focus} alt="" /><span>Improving the UI & UX of Femicam's desktop application based on React Electron and Material UI</span></li>
                                <li className='flex'><img className='mr-2' src={focus} alt="" /><span>Improving the UI & UX of Femicam's desktop application based on React Electron and Material UI</span></li>
                                <li className='flex'><img className='mr-2' src={focus} alt="" /><span>Improving the UI & UX of Femicam's desktop application based on React Electron and Material UI</span></li>
                            </ul>
                        </div>
                    </div>

                </div>

                {/* Projects */}

                {/* <div className='md:flex justify-around border-b border-[#334155] py-6 my-6' >
                    <h2 className='md:w-2/12'><strong>Featured Project:</strong></h2>
                    <div className='md:w-10/12  '>
                        <div className='my-2'>
                            <div className='flex justify-between'><strong>SPKJS</strong> </div>
                            <div>
                                <Keyword text='MUI'></Keyword>
                                <Keyword text='React'></Keyword>
                                <Keyword text='Tailwind'></Keyword>
                            </div>

                        </div>
                    </div>

                </div> */}

                {/* Skills */}

                <div className='md:flex justify-around border-b border-[#334155] py-6 my-6' >
                    <h2 className='md:w-2/12'><strong>Skills & Tools:</strong></h2>
                    <div className='md:w-10/12  '>
                        <div className='my-2'>
                            <div className='flex justify-between'><h2><strong>Languages</strong></h2></div>
                            <div className='flex items-center pl-2'>
                                <h2 className='text-[#64748B]'>Front-End:</h2>
                                <div className='flex'>
                                    <Keyword text='HTML'></Keyword>
                                    <Keyword text='Css'></Keyword>
                                    <Keyword text='JavaScript'></Keyword>
                                </div>
                            </div>
                            <div className='flex items-center pl-2'>
                                <h2 className='text-[#64748B]'>Back-End:</h2>
                                <div className='flex'>
                                    <Keyword text='PHP'></Keyword>
                                    <Keyword text='Java'></Keyword>
                                    <Keyword text='JavaScript'></Keyword>
                                </div>
                            </div>
                        </div>
                        <div className='my-2'>
                            <div className='flex justify-between'><h2><strong>Technologies</strong></h2></div>
                            <div className='flex items-center pl-2'>
                                <h2 className='text-[#64748B]'>Ui:</h2>
                                <div className='flex'>
                                    <Keyword text='HTML'></Keyword>
                                    <Keyword text='Css'></Keyword>
                                    <Keyword text='JavaScript'></Keyword>
                                </div>
                            </div>
                            <div className='flex items-center pl-2'>
                                <h2 className='text-[#64748B]'>Back-End:</h2>
                                <div className='flex'>
                                    <Keyword text='PHP'></Keyword>
                                    <Keyword text='Java'></Keyword>
                                    <Keyword text='JavaScript'></Keyword>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>



            </dir>
        </div>
    );
};

export default Resume;