import React from 'react';
import './Recent.css';

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
            </div>
            <div>
              <button>See More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recent;
