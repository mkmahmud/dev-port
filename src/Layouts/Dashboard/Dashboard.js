import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import messageUser from '../../Assets/messageUser.png';
import './dashboard.css'

const Dashboard = () => {

    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('user') !== 'logged') {
            navigate('/login')
        }
    }, [navigate])


    // Messages
    const [messages, setMessages] = useState([]);

    // Loading
    const [loading, setLoading] = useState(true);

    // Details Messages
    const [detailsMessage, setDetailsMassage] = useState({});

    useEffect(() => {
        fetch('https://new-server-mahmudulmk4-gmailcom.vercel.app/getMessage')
            .then(res => res.json())
            .then(data => {
                setMessages(data);
                setLoading(false);
            })
    }, [])




    const utcTime = new Date(detailsMessage?.date);
    const estTime = utcTime.toLocaleString("en-US", { timeZone: "America/New_York" });


    return (
        <div className='max-w-[1440px] bg-[#002047] mx-auto flex text-left px-4 h-screen'>


            <div className='h-full overflow-hidden w-full '>
                <div>
                    <h2 className='text-[50px] font-bold my-4'>Messages</h2>
                </div>
                <div className='flex w-full text-text'>
                    <div className='rounded-lg border-2 border-[#001239] h-[80vh] w-4/12'>
                        <div className='bg-[#001329]'>
                            <button class="relative bg-gray-500 text-white p-3 rounded-lg my-4 text-sm uppercase font-semibold tracking-tight overflow-visible">
                                Inbox
                                <div class="absolute -top-3 -right-3 px-2.5 py-0.5 bg-[#003474] rounded-full text-xs">2</div>
                            </button>
                        </div>

                        <div className='mx-2 my-4' >
                            <input
                                type='text'
                                className={`w-full p-2 text-text bg-sec-bg border rounded-full outline-none text-sm transition duration-150 ease-in-out mb-4`}
                                id='email'
                                placeholder='Search'
                            />
                        </div>
                        <div className='bg-[#001329] py-2 h-4/5 dashboard overflow-scroll'>



                            {
                                messages && messages.map(message => <div onClick={() => setDetailsMassage(message)} className={`border-b-8 px-2 border-[#002047] my-2 cursor-pointer`}>
                                    <div className='p-2 flex justify-between items-center'>
                                        {
                                            message.status === 1 ? <div className="new bg-[blue] h-2 w-2 rounded-full"></div> : <div className="new  h-2 w-2 rounded-full"></div>
                                        }
                                        <img src={messageUser} className='h-10 w-10 rounded-full' alt="" />
                                        <div className=''>
                                            <h2 className="name text-[18px] font-bold">{message.name}</h2>
                                            <p>{message.email}</p>
                                        </div>
                                        <div className='text-text'>
                                            10m
                                        </div>
                                    </div>
                                </div>)
                            }

                            {
                                loading &&
                                <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                    <div class=" animate-spin inline-block w-20 h-20 border-[3px] border-current border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading">
                                        <span class="sr-only">Loading...</span>
                                    </div>

                                </div>
                            }

                        </div>
                    </div>
                    <div className='w-8/12 mx-4'>


                        {
                            detailsMessage?.name ? <div>
                                <div className='bg-[#001329] px-4 py-6 rounded-xl flex items-center '>
                                    <img src={messageUser} className='h-20 w-20 rounded-full' alt="" />
                                    <div className='px-2 mx-2' >
                                        <h2 className='text-[20px] font-bold'>{detailsMessage.name} </h2>
                                        <p className='py-2 text-[18px] text-[#FFFFFF]'>{detailsMessage.email}</p>
                                        <p className='py-2'>{estTime}</p>
                                    </div>
                                </div>
                                <div className='bg-[#001329] px-4 py-10 rounded-xl my-4  flex items-start '>
                                    <img src={messageUser} className='h-16 w-16 rounded-full' alt="" />
                                    <div className='px-2 mx-2' >
                                        <h2 className='text-[16px] font-bold border-2 border-[#002047] p-2 rounded-xl'>{detailsMessage.message}</h2>
                                        <p className='py-2'>{estTime}</p>
                                    </div>
                                </div>
                            </div>
                                :
                                <div>
                                    <div className='bg-[#001329] px-4 py-6 rounded-xl flex items-center '>
                                        <img src={messageUser} className='h-20 w-20 rounded-full' alt="" />
                                        <div className='px-2 mx-2' >
                                            <h2 className='text-[20px] font-bold'>Name</h2>
                                            <p className='py-2 text-[18px] text-[#FFFFFF]'>email.....</p>
                                            <p className='py-2'>time</p>
                                        </div>
                                    </div>
                                    <div className='bg-[#001329] px-4 py-10 rounded-xl my-4  flex items-start '>
                                        <img src={messageUser} className='h-16 w-16 rounded-full' alt="" />
                                        <div className='px-2 mx-2' >
                                            <h2 className='text-[16px] font-bold border-2 border-[#002047] p-2 rounded-xl'>message......</h2>
                                            <p className='py-2'>time</p>
                                        </div>
                                    </div>
                                </div>
                        }


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;