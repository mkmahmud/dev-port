import React from 'react';
import headerDrop from '../../Assets/icons/headerDrop.png';
import html from '../../Assets/icons/skills/html.png';
import css from '../../Assets/icons/skills/css-3.png';
import js from '../../Assets/icons/skills/js.png';
import router from '../../Assets/icons/skills/react router.png';
import redux from '../../Assets/icons/skills/redux.svg';
import react from '../../Assets/icons/skills/react.png';
import ajax from '../../Assets/icons/skills/ajax.webp';
import aws from '../../Assets/icons/skills/aws.png';
import docker from '../../Assets/icons/skills/docker.png';
import express from '../../Assets/icons/skills/express.png';
import firebase from '../../Assets/icons/skills/firebase.png';
import gcp from '../../Assets/icons/skills/gcp.png';
import git from '../../Assets/icons/skills/git.png';
import github from '../../Assets/icons/skills/github.png';
import graphQL from '../../Assets/icons/skills/graphQL.png';
import jquery from '../../Assets/icons/skills/jquery.webp';
import json from '../../Assets/icons/skills/json-file.png';
import micro from '../../Assets/icons/skills/microservices.png';
import mui from '../../Assets/icons/skills/mui.png';
import nest from '../../Assets/icons/skills/nest js.png';
import next from '../../Assets/icons/skills/next.png';
import node from '../../Assets/icons/skills/node-js.png';
import tailwind from '../../Assets/icons/skills/tailwind.png';
import typescript from '../../Assets/icons/skills/typescript.png';
import bootstrap from '../../Assets/icons/skills/bootstrap.png';
import sql from '../../Assets/icons/skills/sql.png';
import mongoDB from '../../Assets/icons/skills/mongo.png';
import postgress from '../../Assets/icons/skills/post.png';
import sqldatabase from '../../Assets/icons/skills/sql.png';
import mysql from '../../Assets/icons/skills/mysql.png';
import restApi from '../../Assets/icons/skills/rest api.png';

import './Skills.css'

const Skills = () => {


    return (
        <div className='md:flex h-full skills overflow-scroll hidenScroll'>
            <div className='md:w-2/12 border-r border-border-bg md:flex '>

                <div className='md:w-10/12 w-full'>
                    <div >
                        <div className='text-left flex items-center p-2 w-full border-b border-border-bg'>
                            <img src={headerDrop} className='pr-4' alt="" />
                            <h2 className='text-lg font-normal'>Skills</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:w-10/12 h-full overflow-scroll hidenScroll text-left allskills'>
                <div className='md:mx-2 my-10'>
                    <h2 className='text-[20px] text-text '>Front-End: </h2>
                    <div className='grid grid-cols-4 md:grid-cols-10 my-2 items-center'>
                        <div className='text-center m-2'><img src={html} className='h-16 w-16 border-l p-2 border-r rounded-[15px] mx-2' alt="" /><span className='py-2'>HTML 5</span></div>
                        <div className='text-center m-2'><img src={css} className='h-16 w-16 border-l p-2 border-r rounded-[15px] mx-2' alt="" /><span className='py-2'>CSS 3</span></div>
                        <div className='text-center m-2'><img src={js} className='h-16 w-16 border-l p-2 border-r rounded-[15px] mx-2' alt="" /><span className='py-2'>JavaScript</span></div>
                        <div className='text-center m-2'><img src={typescript} className='h-16 w-16 border-l p-2 border-r rounded-[15px] mx-2' alt="" /><span className='py-2'>TypeScript</span></div>
                        <div className='text-center m-2'><img src={react} className='h-16 w-16 border-l p-2 border-r rounded-[15px] mx-2' alt="" /><span className='py-2'>React</span></div>
                        <div className='text-center m-2'><img src={redux} className='h-16 w-16 border-l p-2 border-r rounded-[15px] mx-2' alt="" /><span className='py-2'>Redux</span></div>
                        <div className='text-center m-2'><img src={router} className='h-16 w-16 border-l p-2 border-r rounded-[15px] mx-2' alt="" /><span className='py-2'>React Router</span></div>
                        <div className='text-center m-2'><img src={next} className='h-16 w-16 border-l p-2 border-r rounded-[15px] mx-2' alt="" /><span className='py-2'>Next.js</span></div>
                        <div className='text-center m-2'><img src={mui} className='h-16 w-16 border-l p-2 border-r rounded-[15px] mx-2' alt="" /><span className='py-2'>MUI</span></div>
                        <div className='text-center m-2'><img src={bootstrap} className='h-16 w-16 border-l p-2 border-r rounded-[15px] mx-2' alt="" /><span className='py-2'>Bootstrap</span></div>
                        <div className='text-center m-2'><img src={tailwind} className='h-16 w-16 border-l p-2 border-r rounded-[15px] mx-2' alt="" /><span className='py-2'>Tailwind</span></div>
                        <div className='text-center m-2'><img src={jquery} className='h-16 w-16 border-l p-2 border-r rounded-[15px] mx-2' alt="" /><span className='py-2'>jQuery</span></div>

                    </div>
                </div>
                <div className='md:mx-2 my-10'>
                    <h2 className='text-[20px] text-text '>Backend-End: </h2>
                    <div className='grid grid-cols-4 md:grid-cols-10 my-2 items-center'>
                        <div className='text-center m-2'><img src={node} className='h-16 w-16 border-l p-2 border-r rounded-[15px] mx-2' alt="" /><span className='py-2'>Node.Js</span></div>
                        <div className='text-center m-2'><img src={express} className='h-16 w-16 border-l p-2 border-r rounded-[15px] mx-2' alt="" /><span className='py-2'>Express.Js</span></div>
                        
                        <div className='text-center m-2'><img src={typescript} className='h-16 w-16 border-l p-2 border-r rounded-[15px] mx-2' alt="" /><span className='py-2'>TypeScript</span></div>
                        <div className='text-center m-2'><img src={ajax} className='h-16 w-16 border-l p-2 border-r rounded-[15px] mx-2' alt="" /><span className='py-2'>Ajax</span></div>
                        <div className='text-center m-2'><img src={json} className='h-16 w-16 border-l p-2 border-r rounded-[15px] mx-2' alt="" /><span className='py-2'>JSON</span></div>
                        <div className='text-center m-2'><img src={graphQL} className='h-16 w-16 border-l p-2 border-r rounded-[15px] mx-2' alt="" /><span className='py-2'>GraphQL</span></div>
                        <div className='text-center m-2'><img src={restApi} className='h-16 w-16 border-l p-2 border-r rounded-[15px] mx-2' alt="" /><span className='py-2'>REST API</span></div>
                    </div>
                </div>
                <div className='md:mx-2 my-10'>
                    <h2 className='text-[20px] text-text '>Database: </h2>
                    <div className='grid grid-cols-4 md:grid-cols-10 my-2 items-center'>
                        <div className='text-center m-2'><img src={mongoDB} className='h-16 w-16 border-l p-2 border-r rounded-[15px] mx-2' alt="" /><span className='py-2'>MongoDB</span></div>

                        <div className='text-center m-2'><img src={firebase} className='h-16 w-16 border-l p-2 border-r rounded-[15px] mx-2' alt="" /><span className='py-2'>Firebase</span></div>

                        <div className='text-center m-2'><img src={mysql} className='h-16 w-16 border-l p-2 border-r rounded-[15px] mx-2' alt="" /><span className='py-2'>MySQL</span></div>

                    </div>
                </div>
                <div className='md:mx-2 my-10'>
                    <h2 className='text-[20px] text-text '>Technologies: </h2>
                    <div className='grid grid-cols-4 md:grid-cols-10 my-2 items-center'>
                        
                        <div className='text-center m-2'><img src={firebase} className='h-16 w-16 border-l p-2 border-r rounded-[15px] mx-2' alt="" /><span className='py-2'>Firebase</span></div>
                        
                        
                        <div className='text-center m-2'><img src={git} className='h-16 w-16 border-l p-2 border-r rounded-[15px] mx-2' alt="" /><span className='py-2'>Git</span></div>
                        <div className='text-center m-2'><img src={github} className='h-16 w-16 border-l p-2 border-r rounded-[15px] mx-2' alt="" /><span className='py-2'>Github</span></div>
                        <div className='text-center m-2'><img src={micro} className='h-16 w-16 border-l p-2 border-r rounded-[15px] mx-2' alt="" /><span className='py-2'>Microservices</span></div>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;