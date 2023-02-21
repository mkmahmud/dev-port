import React from 'react';
import './Home.css';
import TextAnimation from "react-text-animations";
import user from '../../Assets/user.png';

const Home = () => {
  return (
    <div className='h-full overflow-hidden md:flex justify-evenly items-center'>
      <div className='text-left  flex flex-col justify-around h-full items-center md:justify-evenly md:items-baseline p-[27px] '>
        <div className=''>
          <h2 className='text-lg font-medium'>Hi everybody. I am</h2>
          <h1 className='text-[62px]  leading-[62px]'>Mahmudul Hasan MK</h1>
          <p className='text-text-green text-xl flex'> <span className='mx-2'>{`>`} </span>
            <TextAnimation.Slide
              target="Merciful"
              text={[' Front-End Developer', 'Full Stack Developer', 'Lead Developer']}
              animation={{
                duration:1000,
                delay:2000,
                timingFunction:'ease-out',
            }}
            >
              I am a&nbsp;
            </TextAnimation.Slide></p>
        </div>
        <div className='text-sm my-10'>
          <p className='text-text hidden md:block '> // Press Enter to continue:</p>
          <p className='text-text '>// find my profile on Github:</p>
          <p><span className='text-text-blue'>const</span> <span className='text-text-green'>githubLink</span> = <span className='text-text-orange'>“https://github.com/mkmahmud”</span></p>
        </div>
      </div>
      <div className=''>
        <img src={user} className='h-[300px] w-[300px] block mx-auto my-10 md:h-[500px] md:w-[500px] rounded-full border-b-4 image-shadow border-text-orange' alt="" />
      </div>
    </div>
  );
};

export default Home;