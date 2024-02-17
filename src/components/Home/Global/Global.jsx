import React from 'react';
import './Global.css';
import filter from '../../../assets/Home/Filter.png';
import globalCurve from '../../../assets/Home/globalcurve.png';
import facebook from '../../../assets/Home/facebook.png';
import facebookCurve from '../../../assets/Home/Vector 8.png';
import microsoft from '../../../assets/Home/microsoft.png';
import microsoftCurve from '../../../assets/Home/Group 3.png';
import google from '../../../assets/Home/google.png';
import googleCurve from '../../../assets/Home/Vector 12.png';

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
              <h5>
                1200 ms <i class="fa-solid fa-arrow-down"></i>
              </h5>
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
              <h5>
                1200 ms <i class="fa-solid fa-arrow-down"></i>
              </h5>
            </div>
          </div>
          <div className="global-right-box">
            <div className="box1-flex">
              <div className="box1-part1">
                <img src={microsoft} alt="" />
                <h3>Microsoft</h3>
              </div>
              <div>
                <img src={microsoftCurve} alt="" />
              </div>
            </div>
            <div className="box1-flex">
              <p>Uptime</p>
              <h4>100%</h4>
            </div>
            <div className="box1-flex">
              <p>Load Average</p>
              <h6>
                250 ms <i class="fa-solid fa-arrow-up"></i>
              </h6>
            </div>
          </div>
          <div className="global-right-box">
            <div className="box1-flex">
              <div className="box1-part1">
                <img src={google} alt="" />
                <h3>Google</h3>
              </div>
              <div>
                <img src={googleCurve} alt="" />
              </div>
            </div>
            <div className="box1-flex">
              <p>Uptime</p>
              <h4>98.9%</h4>
            </div>
            <div className="box1-flex">
              <p>Load Average</p>
              <h5>
                1200 ms <i class="fa-solid fa-arrow-down"></i>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Global;
