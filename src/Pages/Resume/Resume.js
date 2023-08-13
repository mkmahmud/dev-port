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
import { Link } from 'react-router-dom';


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
                        <h2 className='text-[40px] leading-[32px] font-bold'>Mahmudul Hasan MK</h2>
                        <h3 className='text-[16px] leading-[32px] font-medium'>Full-Stack Developer</h3>
                    </div>
                    <div className='md:flex justify-center'>
                        <div className='flex items-center'>
                            <img className='h-[20px] w-[20px] mx-[10px]' src={location} alt="" />
                            <span className='text-[14px]'>Dhaka, Bangladesh</span>
                        </div>
                        <div className='flex items-center'>
                            <img className='h-[20px] w-[20px] mx-[10px]' src={email} alt="" />
                            <span className='text-[14px]'>mahmudulmk4@gmail.com</span>
                        </div>
                        {/* <div className='flex items-center'>
                            <img className='h-[20px] w-[20px] mx-[10px]' src={phone} alt="" />
                            <span className='text-[14px]'>+1741527</span>
                        </div> */}
                    </div>
                    <div className='flex justify-center my-4'>
                        <a href="https://www.linkedin.com/in/jeffery-s-6445271b9" target='_blank' className='flex items-center bg-[#F6F3FF] text-[#000000] px-4 py-px rounded-full mx-2 text-[12px]'><img src={linkedin} alt="" /> <span className='mx-2'>mkmahmud</span> </a>
                        <Link to="/" target='_blank' className='flex items-center bg-[#F6F3FF] text-[#000000] px-4 py-px rounded-full mx-2 text-[12px]'><img src={web} alt="" /> <span className='mx-2'>My Web</span> </Link>
                        <a href="https://github.com/jefferystewart" target='_blank' className='flex items-center bg-[#F6F3FF] text-[#000000] px-4 py-px rounded-full mx-2 text-[12px]'><img src={github} alt="" /> <span className='mx-2'>mkmahmud</span> </a>
                    </div>
                </div>
            </div>
            <div className='resume-body text-left text-[14px] mx-2 md:mx-10'>

                {/* Overview */}
                <div className='md:flex justify-around border-b border-[#334155] py-6 my-6' >
                    <h2 className='md:w-2/12'><strong>Summary:</strong></h2>
                    <div className='md:w-10/12  '>
                        <h2 className='pb-2'>As a MERN developer, I have extensive experience in building modern web applications using MongoDB, Express, React, and Node.js. I am proficient in using React to create dynamic and responsive user interfaces, and I have expertise in designing and implementing RESTful APIs using Node.js and Express. </h2>
                        <h2 className='py-2'>
                        I have also worked with MongoDB to design database schemas, perform data modeling, and create robust backend systems. Additionally, I have experience with version control tools such as Git and have worked in Agile environments using tools like JIRA. 
                        </h2>
                        <h2 className='py-2'>
                        I am passionate about building scalable and maintainable software applications and enjoy collaborating with cross-functional teams to achieve project goals.
                        </h2>
                    </div>

                </div>


                {/* Education */}
                <div className='md:flex justify-around border-b border-[#334155] py-6 my-6' >
                    <h2 className='md:w-2/12'><strong>Education:</strong></h2>
                    <div className='md:w-10/12  '>
                        <div className='md:flex justify-between'><h2><strong>Uttara University, Dhaka</strong> Bachelor's degree</h2><div className='flex items-center'><img src={calender} alt="" /> <span className='mx-2'>2020 - Present</span></div></div>
                    </div>

                </div>


                {/* Experience */}
                <div className='md:flex justify-around border-b border-[#334155] py-6 my-6' >
                    <h2 className='md:w-2/12'><strong>Experience:</strong></h2>
                    <div className='md:w-10/12  '>
                        <div className='mb-4'>
                            <div className='md:flex justify-between'><h2><strong>Self Employed</strong> — Web Developer </h2><div className='flex items-center'><img src={calender} alt="" /> <span className='mx-2'>2021 - Present</span></div></div>
                            <div>
                                <Keyword text='React'></Keyword>
                                <Keyword text='Node'></Keyword>
                                <Keyword text='JavaScript'></Keyword>
                                <Keyword text='TypeScript'></Keyword>
                                <Keyword text='MongoDB'></Keyword>
                            </div>
                            <ul>
                                {/* <li className='flex'><img className='mr-2' src={focus} alt="" /><span>I have worked on some projects for the clients from UK, US, Norway, Germany, etc</span></li> */}
                            </ul>
                        </div>
                      
                    </div>

                </div>


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
                                    <Keyword text='TypeScript'></Keyword>
                                    <Keyword text='React'></Keyword>
                                    <Keyword text='Redux'></Keyword>
                                    <Keyword text='Next'></Keyword>
                                    <Keyword text='jQuery'></Keyword>
                                    <Keyword text='Router'></Keyword>
                                </div>
                            </div>
                            <div className='flex items-center pl-2'>
                                <h2 className='text-[#64748B]'>Back-End:</h2>
                                <div className='flex'>
                                    <Keyword text='JavaScript'></Keyword>
                                    <Keyword text='PHP'></Keyword>
                                    <Keyword text='Node'></Keyword>
                                    <Keyword text='Laravel'></Keyword>
                                    <Keyword text='REST'></Keyword>
                                    <Keyword text='Express'></Keyword>
                                    <Keyword text='Nest'></Keyword>
                                    <Keyword text='Ajax'></Keyword>
                                    <Keyword text='JSON'></Keyword>
                                </div>
                            </div>
                            <div className='flex items-center pl-2'>
                                <h2 className='text-[#64748B]'>Database:</h2>
                                <div className='flex'>
                                    <Keyword text='MongoDB'></Keyword>
                                    <Keyword text='Postgresql'></Keyword>
                                    <Keyword text='SQL'></Keyword>
                                    <Keyword text='Firebase'></Keyword>
                                </div>
                            </div>
                        </div>
                        <div className='my-2'>
                            <div className='flex justify-between'><h2><strong>Technologies</strong></h2></div>
                            <div className='flex items-center pl-2'>
                                <h2 className='text-[#64748B]'>Ui:</h2>
                                <div className='flex'>
                                    <Keyword text='Material Ui'></Keyword>
                                    <Keyword text='React Bootstrap'></Keyword>
                                    <Keyword text='Tailwind'></Keyword>
                                </div>
                            </div>
                            <div className='flex items-center pl-2'>
                                <h2 className='text-[#64748B]'>Tools</h2>
                                <div className='flex'>
                                    <Keyword text='Firebase'></Keyword>
                                    <Keyword text='Git'></Keyword>
                                    <Keyword text='Github'></Keyword>
                                    <Keyword text='Microservices'></Keyword>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                {/* Certifications */}

            


            </div>
        </div>
    );
};

export default Resume;