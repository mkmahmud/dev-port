import React from 'react';
import headerDrop from '../../Assets/icons/headerDrop.png';
import reactIcon from '../../Assets/svg/Skills/reactjs-line.svg';

const Skills = () => {


    return (
        <div className='md:flex h-full '>
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
            <div className='md:w-10/12 h-full overflow-scroll hidenScroll text-left'>
                <div className='md:mx-2 my-4'>
                    <h2 className='text-[20px] text-text '>Front-End: </h2>
                    <div className='flex my-2 items-center'>
                        <div className='text-center'><img src={reactIcon} className='h-16 w-16 border-l border-r rounded-[15px] mx-2' alt="" /><span className='py-2'>React</span></div>
                        <div className='text-center'><img src={reactIcon} className='h-16 w-16 border-l border-r rounded-[15px] mx-2' alt="" /><span className='py-2'>React</span></div>
                        <div className='text-center'><img src={reactIcon} className='h-16 w-16 border-l border-r rounded-[15px] mx-2' alt="" /><span className='py-2'>React</span></div>
                       
                    </div>
                </div>
                <div className='md:mx-2 my-4'>
                    <h2 className='text-[20px] text-text '>Backend-End: </h2>
                    <div className='flex my-2 items-center'>
                        <div className='text-center'><img src={reactIcon} className='h-16 w-16 border-l border-r rounded-[15px] mx-2' alt="" /><span className='py-2'>React</span></div>
                        <div className='text-center'><img src={reactIcon} className='h-16 w-16 border-l border-r rounded-[15px] mx-2' alt="" /><span className='py-2'>React</span></div>
                        <div className='text-center'><img src={reactIcon} className='h-16 w-16 border-l border-r rounded-[15px] mx-2' alt="" /><span className='py-2'>React</span></div>
                       
                    </div>
                </div>
                <div className='md:mx-2 my-4'>
                    <h2 className='text-[20px] text-text '>Database: </h2>
                    <div className='flex my-2 items-center'>
                        <div className='text-center'><img src={reactIcon} className='h-16 w-16 border-l border-r rounded-[15px] mx-2' alt="" /><span className='py-2'>React</span></div>
                        <div className='text-center'><img src={reactIcon} className='h-16 w-16 border-l border-r rounded-[15px] mx-2' alt="" /><span className='py-2'>React</span></div>
                        <div className='text-center'><img src={reactIcon} className='h-16 w-16 border-l border-r rounded-[15px] mx-2' alt="" /><span className='py-2'>React</span></div>
                       
                    </div>
                </div>
                <div className='md:mx-2 my-4'>
                    <h2 className='text-[20px] text-text '>Proficient: </h2>
                    <div className='flex my-2 items-center'>
                        <div className='text-center'><img src={reactIcon} className='h-16 w-16 border-l border-r rounded-[15px] mx-2' alt="" /><span className='py-2'>React</span></div>
                        <div className='text-center'><img src={reactIcon} className='h-16 w-16 border-l border-r rounded-[15px] mx-2' alt="" /><span className='py-2'>React</span></div>
                        <div className='text-center'><img src={reactIcon} className='h-16 w-16 border-l border-r rounded-[15px] mx-2' alt="" /><span className='py-2'>React</span></div>
                       
                    </div>
                </div>
                <div className='md:mx-2 my-4'>
                    <h2 className='text-[20px] text-text '>Technologies: </h2>
                    <div className='flex my-2 items-center'>
                        <div className='text-center'><img src={reactIcon} className='h-16 w-16 border-l border-r rounded-[15px] mx-2' alt="" /><span className='py-2'>React</span></div>
                        <div className='text-center'><img src={reactIcon} className='h-16 w-16 border-l border-r rounded-[15px] mx-2' alt="" /><span className='py-2'>React</span></div>
                        <div className='text-center'><img src={reactIcon} className='h-16 w-16 border-l border-r rounded-[15px] mx-2' alt="" /><span className='py-2'>React</span></div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;