import React from 'react';
import { Link } from 'react-router-dom';

const SecondButton = ({path, text}) => {
    return (
      <a href={path} target='_blank' className='bg-[#FEA55F] text-[#FFFFFF] border border-[#FEA55F] px-3.5 py-2.5 rounded-lg text-sm mx-2'> {text}</a>
    );
};

export default SecondButton;