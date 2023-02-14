import React from 'react';
import headerDrop from '../../Assets/icons/headerDrop.png';
import cross from '../../Assets/icons/close-icon.png';
import LanguageCard from './LanguageCard/LanguageCard';
import reactImage from '../../Assets/icons/languages/react.png';
import htmlImage from '../../Assets/icons/languages/html.png';
import cssImage from '../../Assets/icons/languages/css.png';
import gatsImage from '../../Assets/icons/languages/gatsby.png';
import ProjectsCard from './ProjectsCard/ProjectsCard';

const Projects = () => {

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
            <div className='md:w-10/12 h-full overflow-hidden'>
                <div className='p-2 text-left border-b border-border-bg'>
                    <h2 className='text-base text-text flex '><span>Projects</span> <img className='px-10' src={cross} alt="" /></h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 '>
                    <ProjectsCard></ProjectsCard>
                    <ProjectsCard></ProjectsCard>
                    <ProjectsCard></ProjectsCard>
                    <ProjectsCard></ProjectsCard>
                </div>
            </div>
        </div>
    );
};

export default Projects;