import React from 'react';
import './Monitors.css';
import ellipse3 from '../../../assets/Home/Ellipse3.png';
import ellipse4 from '../../../assets/Home/Ellipse4.png';
import ellipse5 from '../../../assets/Home/Ellipse5.png';
const Monitors = () => {
    return (
      <div>
        <div className="monitors-container">
          {/* part 1 */}
          <div className="monitor-left">
            <h1>Total Monitors</h1>
            <div className="monitor-loading-component">
              <div className="monitor-loading-info">
                <div className="monitor-info-box">
                  <h2>Helathy Monitor</h2>
                  <p>120</p>
                </div>
                <div className="monitor-info-box">
                  <h2>Down Monitors</h2>
                  <p>25</p>
                </div>
                <div className="monitor-info-box">
                  <h2>Maintenance</h2>
                  <p>45</p>
                </div>
              </div>
              <div className="monitor-loading">
                <img className="ellipse3" src={ellipse3} alt="" />
                <img className="ellipse4" src={ellipse4} alt="" />
                <img className="ellipse5" src={ellipse5} alt="" />
                <h3>190</h3>
              </div>
            </div>
          </div>
          {/* part 2 */}
          <div className="Latencies-right"></div>
        </div>
      </div>
    );
};

export default Monitors;