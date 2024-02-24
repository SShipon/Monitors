import React from 'react';
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './DMCurve.css';
const DMCurve = () => {
      const chartRef = useRef(null);

      useEffect(() => {
        if (chartRef && chartRef.current) {
          const ctx = chartRef.current.getContext('2d');
          new Chart(ctx, {
            type: 'line',
            data: {
              labels: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
              ],
              datasets: [
                {
                  label: 'Dataset',
                  data: [20, 5, 30, 88, 5, 80, 11, 3],
                //   borderColor: '#00A76F', // Set green color
                //   borderColor: '#E45B74', // Set red color
                  borderColor: '#EBC258', // Set yelelow color
                  borderWidth: 2, // Set border width
                  fill: false,
                  tension: 0.4,
                  pointRadius: 0,
                },
              ],
            },
            options: {
              responsive: true,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  display: false,
                },
                y: {
                  display: false,
                },
              },
            },
          });
        }
      }, []);
  return (
    <div>
      <canvas ref={chartRef} width="46" height="38"/>
    </div>
  );
};

export default DMCurve;
