import React from 'react';
import { Link } from 'react-router-dom';
import projectImg from '../../../Assets/icons/project.png';
import reactImge from '../../../Assets/icons/languages/react.png';

const ProjectsCard = () => {
    return (
        <div className='w-[291px] md:w-[370px] my-4 mx-auto '>
            <h2 className='text-text text-left'><span className='text-text-blue font-bold'>Project 1</span> <span>// _ui-animations</span></h2>
            <div className='bg-cardBG overflow-hidden my-4 text-left rounded-lg'>
                <div className='relative'>
                    <img className='w-full md:h-[145px]' src={projectImg} alt="" />
                    <img src={reactImge} className='absolute top-4 right-4 bg-white rounded-lg p-px' alt="" />
                </div>
                <div className='px-4 py-4'>
                    <p className='text-text'>Duis aute irure dolor in velit esse cillum incididunt ut labore.</p>
                    <div className='my-4 md:my-6'>
                        <Link className='bg-button px-3.5 py-2.5 rounded-lg text-sm'>View Project</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsCard;