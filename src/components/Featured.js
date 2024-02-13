import React from 'react';
import featured1 from '../assets/featured-1.png';
import featured2 from '../assets/featured-2.png';
import featured3 from '../assets/featured-3.png';
import './Featured.css';

const Featured = () => {
  return (
   <div className="featured">
     <div className="skills">
      <h2 className='heading'>Why NiftyGPT.<span className='primary-featured'>ai</span>?</h2>
      <div className="skill-row">
        <img className="code-img" src={featured1} alt="skill-img" />
        <h3>Value Broker</h3>
        <p className="code-description">Meet niftygpt.ai, your ultimate technology-based value broker. With niftygpt.ai, you’ll have access to a wide range of financial products designed to supercharge your investing game. Our flagship product and ProTips, unleashes the power of technology to revolutionize your trading journey.</p>
      </div>
      <div className="skill-row">
        <img className="skill-img" src={featured2} alt="tech-img" />
        <h3>ProTips</h3>
        <p className="skill-description">Our flagship product ProTips, provides buy-sell-exit trading recommendations and option strategies across all asset classes. Enjoy zero-brokerage by subscribing to ProTips, an unbiased, high performing, timely buy-sell-exit recommendations.</p>
      </div>
      <div className="skill-row">
        <img className="code-img" src={featured3} alt="skill-img" />
        <h3>Learn and Succeed</h3>
        <p className="code-description">Our flagship product ProTips, provides buy-sell-exit trading recommendations and option strategies across all asset classes. Enjoy zero-brokerage by subscribing to ProTips, an unbiased, high performing, timely buy-sell-exit recommendations.</p>
      </div>
    </div>
   </div>
  );
};

export default Featured;
