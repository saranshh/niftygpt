import React from 'react';
import "./Testimonial.css";
import Image1 from "../assets/avatar-1.svg";
// import Image2 from "../assets/avatar-2.svg";
import Image3 from "../assets/avatar-3.svg";
// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
      id: 1,
      image: Image1,
      title: "Aman Pathak",
      subtitle: "Lucknow, Uttar Pradesh",
      comment:
        "As an avid trader, I'm constantly seeking innovative solutions to streamline my trading process and stay ahead of market trends. That's why I'm thrilled to have discovered niftygpt.ai.",
    },
    {
      id: 2,
      image: Image3,
      title: "Harsh Singhal",
      subtitle: "Kolkata, West Bengal",
      comment:
        "With niftygpt.ai, I can now access real-time market insights, execute trades, and manage my portfolio all within the familiar interface of WhatsApp.",
    },
    {
        id: 3,
        image: Image1,
        title: "Shivam Kumar",
        subtitle: "Mumbai, Maharastra",
        comment:
          "What sets niftygpt.ai apart is its user-friendly interface and intuitive features. Whether I'm a seasoned trader or new to the game, the platform caters to my needs with customizable settings and personalized recommendations tailored to my trading style and preferences.",
    }, 
    {
        id: 4,
        image: Image3,
        title: "Pratham Sharma",
        subtitle: "Pune, Maharastra",
        comment:
          "Moreover, the exceptional customer support team at niftygpt.ai ensures that I have all the assistance I need every step of the way. Their dedication to customer satisfaction is evident in their prompt responses and willingness to address any concerns or questions I may have.",
    }, 
];
  
const Testimonial = () => {
    return (
        <section className="testimonials container section">
            <h2 className="section__title">Clients & Reviews</h2>

            <Swiper className="testimonials__container grid"
            modules={[ Pagination ]}
            spaceBetween={30}
            autoplay={{ delay: 2000 }}
            slidesPerView={1}
            loop={true} 
            grabCursor={true}
            pagination={{ clickable: true }}
            >
                {data.map(({id, image, title, subtitle, comment}) => {
                    return (
                        <SwiperSlide className="testimonial__item" key={id}>
                            <div className="thumb">
                                <img src={image} alt="image" />
                            </div>
                            <h3 className="testimonials__title">{title}</h3>
                            <span className="subtitle">{subtitle}</span>
                            <div className="comment">{comment}</div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}

export default Testimonial
