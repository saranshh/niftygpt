import React, { useState } from 'react';
import './Hero.css';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { toast, Toaster } from 'react-hot-toast'
import Crypto from '../assets/hero-trade.png';

const Hero = () => {
    const [phoneNumber, setPhoneNumber] = useState('');

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     if (phoneNumber.length === 10) {
    //         await axios.post('http://localhost:3000/phone', {
    //             phone: phoneNumber,
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
            <div className='hero'>
                <div className='container'>
                    {/* Left Side */}
                    <div className='left'>
                        <Toaster/>
                        {/* <p>Trading 24/7 using your WhatsApp account</p> */}
                        <p>Unlock endless possibilities........</p>
                        <h1>Revolutionize A<span className='primary'>i</span> Powered
                            Trading on Mobile</h1>
                        <p>Subscribe to get free trial now!</p>
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

                    {/* Right Side */}
                    <div className='right'>
                        <div className='img-container'>
                            <img src={Crypto} alt='' />
                        </div>
                    </div>
                </div>
            </div>
            {/* <ToastContainer /> */}
        </>
    );
};

export default Hero;
