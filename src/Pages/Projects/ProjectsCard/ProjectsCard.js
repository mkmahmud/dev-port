import React from 'react';
import { Link } from 'react-router-dom';
import reactImge from '../../../Assets/icons/languages/react.png';

const ProjectsCard = ({ setopenProject, data, setDetailsProject }) => {

    const {shortTitle, thambnail} = data;


    return (
        <div className='w-[291px] md:w-[370px] my-4 mx-auto '>
            <h2 className='text-text text-left'><span className='text-text-blue font-bold'>Project 1</span> <span>// _ui-animations</span></h2>
            <div className='bg-cardBG overflow-hidden my-4 text-left rounded-lg'>
                <div className='relative'>
                    <img className='w-full md:h-[145px]' src={thambnail} alt="" />
                    <img src={reactImge} className='absolute top-4 right-4 bg-white rounded-lg p-px' alt="" />
                </div>
                <div className='px-4 py-4'>
                    <p className='text-text'>{shortTitle}</p>
                    <div className='my-4 md:my-6'>
                        <button className='bg-button px-3.5 py-2.5 rounded-lg text-sm' onClick={() => {
                            setopenProject(true);
                            setDetailsProject(data);
                        }}>View Project</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsCard;