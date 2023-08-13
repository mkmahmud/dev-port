import React, { useEffect } from 'react';
import { Navigate,  useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    useEffect(()=>{
            if(localStorage.getItem('user') === 'logged'){
                navigate('/dashboard')
            }
    },[navigate])

    const handleFormSubmit = (e) => {
        e.preventDefault();

        let email = e.target.elements.email?.value;
        let password = e.target.elements.password?.value;

        const userInfo = {
            username: email,
            password: password
        }

        fetch('https://jefery-babarfarooqi52-gmailcom.vercel.app/log', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                navigate('/dashboard')
                if(data){
                   
                    localStorage.setItem('user', 'logged')
                }
        
            })

    };


    return (
        <div className='h-screen flex bg-border-bg'>
            <div className='w-full max-w-md m-auto bg-border-bg rounded-lg border border-text shadow-default py-10 px-16'>
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                    Log in to your account 🔐
                </h1>

                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor='email'>username</label>
                        <input
                            type='text'
                            className={`w-full p-2 text-text bg-sec-bg border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='email'
                            placeholder='Your username'
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            className={`w-full p-2 text-text bg-sec-bg border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            placeholder='Your Password'
                        />
                    </div>

                    <div className='flex justify-center items-center mt-6'>
                        <button
                            className={`bg-green py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;