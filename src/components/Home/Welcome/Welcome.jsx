import React from 'react';
import './Welcome.css';
import settings from '../../../assets/Home/settings 1.png';
import notification from '../../../assets/Home/002-notification-1.png';

const Welcome = () => {
  return (
    <div>
      <div className="welcome-container">
        <div className="welcome-box-left">
          <div>
            <h1>Welcome to X</h1>
            <i className="fa-solid fa-arrow-right"></i>
          </div>
          <div>
            <img src={settings} alt="" />
          </div>
        </div>
        <div className="lorem-box-right">
          <img src={notification} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
