import React from 'react';
import Analysis from '../assets/analysis.png';
import Trading from '../assets/trading-algo.png'
import Risk from '../assets/risk.png'
import './Services.css';

const Services = () => {
  return (
    <section className="service" id="services">
      <div className="heading">
        <span className='service-head'>Our Services</span>
        <h2>Empower your trading experience with AI-driven technologies</h2>
      </div>

      <div className="service-container">
        <div className="s-box">
        <img src={Analysis} alt='s1-img' />
          <h3>Data Analysis</h3>
          <p>   
            Unleash the potential of cutting-edge artificial intelligence for the meticulous data 
            scrutiny. Reap the rewards of precise and timely insights, empowering you to make informed decisions in the dynamic realm of trading.
          </p>
        </div>

        <div className="s-box">
          <img src={Trading} alt="s2-img" />
          <h3>Algorithmic Trading</h3>
          <p>
          Optimize your trading strategies with our sophisticated algorithms. Experience swift
           and strategic order execution, eliminating human biases and enhancing overall performance.
          </p>
        </div>

        <div className="s-box">
          <img src={Risk} alt="s3-img" />
          <h3>Risk Management</h3>
          <p>
          Ensure the safety of your investments with AI-powered risk management. Our algorithms 
          proactively monitor and assess potential risks, providing robust measures to safeguard your portfolio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
