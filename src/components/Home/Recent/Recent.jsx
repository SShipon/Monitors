import React from 'react';
import './Recent.css';
import bell from '../../../assets/Home/bell.png';
import bell1 from '../../../assets/Home/bell1.png';

const Recent = () => {
  return (
    <div>
      <div className="recent-container">
        <div className="recent-monitors-left">
          <div className="recent-monitors-box">
            <div>
              <h1>Recent Monitors</h1>
            </div>
            <div>
              <button>See More</button>
            </div>
          </div>
        </div>
        <div className="incidents-history-right">
          <div className="incidents-history-box">
            <div>
              <h1>Incidents History </h1>
              <h2>
                <i class="fa-solid fa-arrow-up"></i> <span>24%</span> this month
              </h2>
            </div>
            <div>
              <button>See More</button>
            </div>
          </div>
          <div className="incidents-history-box1">
            <div className="s-up">
              <div>
                <h3>Shopify UP</h3>
                <h4>09 JUN 7:20 PM</h4>
              </div>
              <div>
                <img src={bell} alt="" />
              </div>
            </div>
            <div className="s-down">
              <div>
                <h3>Shopify Down</h3>
                <h4>08 JUN 12:20 PM</h4>
              </div>
              <div>
                <img src={bell1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recent;
