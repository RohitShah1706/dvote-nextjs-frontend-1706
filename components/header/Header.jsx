import React from 'react';

const roboImg = "/assets/robot.png";
const peopleImg = "/assets/people.png";

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let&apos;s Shift to the world of Decentralized Voting.</h1>
      <p>Current voting systems suffer from various security threats and vote alteration. Using blockchain, we make the voting process more secure, transparent, immutable, and reliable.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={peopleImg} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image" id='robo-img'>
      <img src={roboImg} />
    </div>
  </div>
);

export default Header;
