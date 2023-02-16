import React, { useState } from 'react';
import rightArrow from '../../../Assets/icons/subHeaderRight.png';
import downArrow from '../../../Assets/icons/subHeaderDown.png';
import file from '../../../Assets/icons/folders/file.png';

const PersonalInfo = ({ folder, content, OpenStatus, file }) => {

    const { fileName, setShowdFile } = file;

    // Folder Open Status
    const [open, setOpen] = useState(OpenStatus)
    return (
        <li className='flex items-start space-x-4 my-2 cursor-pointer	'>
            <img onClick={() => setOpen(!open)} className='pt-2' src={open ? downArrow : rightArrow} alt="" />
            <div>
                <div onClick={() => setOpen(!open)} className='flex items-center space-x-2'><img src={folder} alt="" /> <span>{content}</span></div>
                {
                    open
                    &&
                    <ul>
                        <li className='my-2 flex' onClick={() => {setShowdFile(fileName)}}><img src={file} className='pr-2' alt="" /><span>{fileName}</span></li>
                    </ul>
                }
            </div>
        </li>

    );
};

export default PersonalInfo;