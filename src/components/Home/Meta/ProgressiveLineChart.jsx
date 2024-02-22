import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ProgressiveLineChart = () => {
  const chartRef = useRef(null);

 useEffect(() => {
   if (chartRef && chartRef.current) {
     const data = [45, 41, 45, 35, 33, 30, 35];
     const minData = Math.min(...data);
     const maxData = Math.max(...data);
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
             data: data,
             borderColor: 'rgba(75, 192, 192, 1)',
             borderWidth: 1,
             fill: true,
             backgroundColor: 'rgba(255, 99, 132, 0.2)',
             borderColor: 'rgb(255, 99, 132)',
             tension: 0.4, // Adjust the tension for different curve shapes
             pointRadius: 0, // Hide data points
           },
         ],
       },
       options: {
         responsive: true,
         plugins: {
           legend: {
             display: false, // Hide legend
           },
         },
         scales: {
           x: {
             display: false, // Hide x-axis
           },
           y: {
             display: false, // Hide y-axis
             suggestedMin: minData - 5, // Adjust the minimum value of the y-axis
             suggestedMax: maxData + 5, // Adjust the maximum value of the y-axis
           },
         },
       },
     });
   }
 }, []);

  return (
    <div>
      <div>
        <canvas ref={chartRef} width="60" height="40" />
      </div>
    </div>
  );
};

export default ProgressiveLineChart;
