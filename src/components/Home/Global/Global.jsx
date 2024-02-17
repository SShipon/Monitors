import React from 'react';
import './Global.css';
import filter from '../../../assets/Home/Filter.png';
import globalCurve from '../../../assets/Home/globalcurve.png';
import facebook from '../../../assets/Home/facebook.png';
import facebookCurve from '../../../assets/Home/Vector 8.png';

const Global = () => {
  return (
    <div>
      <div className="global-container">
        {/* 1st part */}
        <div className="global-left">
          <div className="global-flex">
            <h1>Global Uptime</h1>
            <p>last 3 months</p>
          </div>
          <div className="global-flex global-flex-2">
            <h2>98.74 %</h2>
            <img src={filter} alt="" />
          </div>
          <div>
            <img src={globalCurve} alt="" />
          </div>
        </div>
        {/* 2nd part */}
        <div className="global-right">
          <div className="global-right-box">
            <div className="box1-flex">
              <div className="box1-part1">
                <img src={facebook} alt="" />
                <h3>Meta</h3>
              </div>
              <div>
                <img src={facebookCurve} alt="" />
              </div>
            </div>
            <div className="box1-flex">
              <p>Uptime</p>
              <h4>89%</h4>
            </div>
            <div className="box1-flex">
              <p>Load Average</p>
              <h4>1200ms</h4>
              <i class="fa-solid fa-arrow-down"></i>
            </div>
          </div>
          <div className="global-right-box">
            <div className="box1-flex">
              <div className="box1-part1">
                <img src={facebook} alt="" />
                <h3>Meta</h3>
              </div>
              <div>
                <img src={facebookCurve} alt="" />
              </div>
            </div>
            <div className="box1-flex">
              <p>Uptime</p>
              <h4>89%</h4>
            </div>
            <div className="box1-flex">
              <p>Load Average</p>
              <h4>1200ms</h4>
              <i class="fa-solid fa-arrow-down"></i>
            </div>
          </div>
          <div className="global-right-box">
            <div className="box1-flex">
              <div className="box1-part1">
                <img src={facebook} alt="" />
                <h3>Meta</h3>
              </div>
              <div>
                <img src={facebookCurve} alt="" />
              </div>
            </div>
            <div className="box1-flex">
              <p>Uptime</p>
              <h4>89%</h4>
            </div>
            <div className="box1-flex">
              <p>Load Average</p>
              <h4>1200ms</h4>
              <i class="fa-solid fa-arrow-down"></i>
            </div>
          </div>
          <div className="global-right-box">
            <div className="box1-flex">
              <div className="box1-part1">
                <img src={facebook} alt="" />
                <h3>Meta</h3>
              </div>
              <div>
                <img src={facebookCurve} alt="" />
              </div>
            </div>
            <div className="box1-flex">
              <p>Uptime</p>
              <h4>89%</h4>
            </div>
            <div className="box1-flex">
              <p>Load Average</p>
              <h4>1200ms</h4>
              <i class="fa-solid fa-arrow-down"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Global;
