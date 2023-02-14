import React, { useState } from 'react';
import check from '../../../Assets/icons/Check.png';
import checked from '../../../Assets/icons/checked.png';

const LanguageCard = ({language, languageContent}) => {

    const [checkstatus, setCheckedstatus] = useState(false)

    return (
        <li className='flex items-center cursor-pointer	my-4' onClick={() => { setCheckedstatus(!checkstatus) }}>
            <img src={checkstatus ? checked : check} alt="" />
            <div className='flex items-center'>
                <img className='px-4' src={language} alt="" />
                <h2 className='text-base'>{languageContent}</h2>
            </div>
        </li>
    );
};

export default LanguageCard;