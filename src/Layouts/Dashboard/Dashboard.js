import React, { useEffect, useState } from 'react';
import moment from 'moment-timezone';

const Dashboard = () => {

    // Messages
    const [messages, setMessages] = useState([])

    // Details Messages
    const [detailsMessage, setDetailsMassage] = useState({});

    useEffect(() => {
        fetch('http://localhost:5000/getMessage')
            .then(res => res.json())
            .then(data => setMessages(data))
    }, [])




    const utcTime = new Date(detailsMessage?.date);
    const estTime = utcTime.toLocaleString("en-US", { timeZone: "America/New_York" });


    return (
        <div className='max-w-[1440px] bg-[#002047] mx-auto flex text-left '>
            <div className='w-4/12  p-4'>
                <h2 className='text-[20px] text-left p-2'>Messages</h2>

                <ul>

                    {
                        messages && messages.map(message => <li onClick={() => setDetailsMassage(message)} className={`${message.status === 1 ? 'bg-[#2F83E4]' :'bg-[#0e3462]'}  p-2 border-2 border-[#0e3462] my-2`}>
                            <h2 className='font-bold'>{message.name}</h2>
                            <p className='py-2'>{message.email}</p>
                            
                        </li>)
                    }

                </ul>
            </div>
            <div className='w-8/12  p-4'>

                {
                    detailsMessage?.name && <div className='border-2 border-[#2F83E4]'>
                        <div className='bg-[#00316e] px-2 py-4'>
                            <h2 className='text-[20px]'>Name: <span>{detailsMessage.name}</span></h2>
                            <p className='text-[16px] '>
                                {
                                    estTime
                                }
                            </p>
                        </div>
                        <h2 className='px-2 py-4 bg-[#183b67]'>email: <span>{detailsMessage.email}</span></h2>
                        <h2 className='py-4 px-2'>Mesage: <span>{detailsMessage.message}</span></h2>
                    </div>
                }
            </div>
        </div>
    );
};

export default Dashboard;