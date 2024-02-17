import React from 'react';
import './Global.css';
import filter from '../../../assets/Home/Filter.png';
import globalCurve from '../../../assets/Home/globalcurve.png';

const Global = () => {
  return (
    <div>
      <div className="global-container">
        <div className="global-left">
          <div>
            <h1>Global Uptime</h1>
            <p>last 3 months</p>
          </div>
          <div>
            <h2>98.74 %</h2>
            <img src={filter} alt="" />
          </div>
          <div>
            <img src={globalCurve} alt="" />
          </div>
        </div>
        <div className="global-right"></div>
      </div>
    </div>
  );
};

export default Global;
