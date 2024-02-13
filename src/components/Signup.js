import React, { useState } from 'react'
import './Signup.css'
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { toast, Toaster } from 'react-hot-toast'
import Crypto from '../assets/stocks-1.png'

const Signup = () => {
    const [phoneNumber, setPhoneNumber] = useState('');

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     if(phoneNumber.length === 10)
    //     {
    //         await axios.post('http://localhost:3000/phone', {
    //             phone: phoneNumber
    //         }).then((res) => {
    //             if (res.data.success) {
    //                 toast("Phone number saved successfully", {
    //                     autoClose: 3000,
    //                     position: "bottom-center",
    //                 })
    //                 setPhoneNumber('');
    //             } else {
    //                 toast("Failed to save phone number", {
    //                     autoClose: 3000,
    //                     position: "bottom-center",
    //                 })
    //             }
    //         }).catch((err) => {
    //             console.log(err)
    //         })
    //     }
    //     else {
    //         toast("Please enter 10 digit number", {
    //             autoClose: 3000,
    //             position: "bottom-center",
    //         })
    //     }
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().slice(0, 10);
        const formattedTime = currentDate.toLocaleTimeString();
        const data = {
            Phone: phoneNumber,
            Date: formattedDate,
            Time: formattedTime
        }

        if (phoneNumber.length === 10) {
            await axios.post('https://sheet.best/api/sheets/97eeda84-a92d-49f3-ba06-44b1569ce37b', data).then((res) => {
                // console.log(res); 
                toast.success("Phone number saved successfully", {
                    autoClose: 1000,
                    position: "bottom-center", 
                })
                setPhoneNumber('');
            });
        }
        else {
            toast.error("Please enter 10 digit number", {
                autoClose: 1000,
                position: "bottom-center",
            })
        }
    };
    
    return (
        <>
        <div className='signup' id='signUp'>
            <div className='container'>
                <Toaster />
                {/* left */}
                <div className='left'>
                    <img src={Crypto} alt='' />
                </div>

                {/* right */}
                <div className='right'>
                    <h2>Get free signals on your mobile with NiftyGPT.<span className='primary-1'>ai</span></h2>
                    <p>Subscribe to niftygpt.ai today and unlock a world of cutting-edge financial products and ProTips designed 
                    to elevate your trading experience. Sign up now to stay ahead in the game!</p>
                    <div className='input-container'>
                            <input
                                type='text'
                                placeholder='Enter your phone number'
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                            <button onClick={handleSubmit} className='btn'>
                                Subscribe
                            </button>
                        </div>
                </div>

            </div>
        </div>
        </> 
    )
}

export default Signup
