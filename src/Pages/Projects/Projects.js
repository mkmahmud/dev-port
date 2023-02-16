import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import headerDrop from '../../Assets/icons/headerDrop.png';
import cross from '../../Assets/icons/close-icon.png';
import LanguageCard from './LanguageCard/LanguageCard';
import reactImage from '../../Assets/icons/languages/react.png';
import htmlImage from '../../Assets/icons/languages/html.png';
import cssImage from '../../Assets/icons/languages/css.png';
import gatsImage from '../../Assets/icons/languages/gatsby.png';
import ProjectsCard from './ProjectsCard/ProjectsCard';
import TagButton from '../../Components/Button/TagButton';
import SecondButton from '../../Components/Button/SecondButton';
import starfill from '../../Assets/icons/starfill.png';
import staroutline from '../../Assets/icons/staroutline.png';

// Import Swiper styles
import 'swiper/css';
import './Projects.css'

import { Autoplay, Pagination, Navigation } from "swiper";

const Projects = () => {

    const [openProject, setopenProject] = useState(false);

    // Projects
    const [projects, setProjects] = useState([]);


    // Details Projects
    const [detailsProject, setDetailsProject] = useState({});


    useEffect(() => {
        fetch('http://localhost:5000/projects')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])



    return (
        <div className='md:flex h-full '>
            <div className='md:w-2/12 border-r border-border-bg md:flex '>

                <div className='w-full'>
                    <div className='text-left flex items-center p-2 w-full  border-b border-border-bg'>
                        <img src={headerDrop} className='pr-4' alt="" />
                        <h2 className='text-lg font-normal '>Projects</h2>
                    </div>
                    <ul className='p-2'>
                        <LanguageCard language={reactImage} languageContent='React'></LanguageCard>
                        <LanguageCard language={htmlImage} languageContent='HTML'></LanguageCard>
                        <LanguageCard language={cssImage} languageContent='CSS'></LanguageCard>
                        <LanguageCard language={gatsImage} languageContent='Gatsby'></LanguageCard>
                    </ul>
                </div>
            </div>
            <div className='md:w-10/12 h-[85vh] overflow-scroll projects-board'>
                <div className='p-2 text-left border-b border-border-bg'>
                    <h2 className='text-base text-text flex '><span>Projects</span> <img className='px-10' src={cross} alt="" /></h2>
                </div>
                {
                    openProject && detailsProject
                        ?
                        <div className='flex relative h-full'>
                            <button className='bg-button px-3.5 py-2.5 rounded-lg text-sm h-10 w-10  absolute top-2 left-2' onClick={() => setopenProject(false)}>{`<`}</button>

                            <div className='m-2 md:flex w-full h-full'>
                                <div className='w-full md:w-8/12 text-left py-16 md:py-2 px-4 md:px-16  h-full border-r border-border-bg '>
                                    <h2 className='text-[30px] md:text-[36px] font-semibold '>{detailsProject.title}</h2>
                                   
                                    <Swiper
                                        spaceBetween={50}
                                        slidesPerView={1}
                                        onSlideChange={() => console.log('slide change')}
                                        autoplay={{
                                            delay: 2000,
                                            disableOnInteraction: false,
                                        }}
                                        modules={[Autoplay, Pagination, Navigation]}
                                        onSwiper={(swiper) => console.log(swiper)}
                                    >
                                        {
                                            detailsProject.images.map(img => <SwiperSlide> <img src={img.img} alt="" className='my-2 h-[200px] md:h-[400px] w-full rounded-lg' /></SwiperSlide>)
                                        }
                                        
                                      
                                    </Swiper>
                                    <div className='md:flex my-10'>
                                        <h2 className='text-xl'>Overview:</h2>
                                        <p className='px-2'>{detailsProject.overview}</p>
                                    </div>
                                    <div className='md:flex my-10'>
                                        <h2 className='text-xl'>Technologies:</h2>
                                        <div className='px-2'>
                                            {
                                                detailsProject.tags.map(tag => <TagButton text={tag.text} key={tag.id}></TagButton>)
                                            }
                                        </div>
                                    </div>
                                </div >
                                <div className='w-full md:w-4/12 text-left px-4'>
                                    <div className='flex justify-between'>
                                        <SecondButton path={detailsProject.livesite} text='Live Site'></SecondButton>
                                        <SecondButton path={detailsProject.code} text='Code'></SecondButton>
                                    </div>
                                    <div className=' my-10'>
                                        <h2 className='text-xl'>Challenges:</h2>
                                        <ul className='px-2'>
                                            {
                                                detailsProject.challanges.map(challange => <li className='flex items-start px-10 my-4'><img src={staroutline} alt="" /> <span className='px-2 text-lg'>{challange.text} </span></li>)
                                            }
                                        </ul>
                                    </div>
                                    <div className=' my-10'>
                                        <h2 className='text-xl'>Features:</h2>
                                        <ul className='px-2'>
                                            {
                                                detailsProject.features.map(feature => <li className='flex items-start px-10 my-4'><img src={starfill} alt="" /> <span className='px-2 text-lg'>{feature.text} </span></li>)
                                            }
                                        </ul>
                                    </div>
                                    <div className=' my-10'>
                                        <h2 className='text-xl'>Feedback:</h2>
                                        <p className='px-2'>{detailsProject.feedback}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <div className='grid grid-cols-1 md:grid-cols-3 '>
                            {
                                projects && projects.map(project => <ProjectsCard data={project} setDetailsProject={setDetailsProject} setopenProject={setopenProject} key={project._id}> </ProjectsCard>)
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default Projects;