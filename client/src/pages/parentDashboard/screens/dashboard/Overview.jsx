import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ParentDashboardOverview = () => {
  // Dummy data
  const [childrenCount] = useState(3); // Number of children
  const [pendingMeetings] = useState(2); // Number of upcoming meetings
  const [attendanceData] = useState([95, 90, 92, 88, 97, 93, 89]); // Dummy attendance percentages for the last 7 days

  const feeData = {
    totalFee: 50000,
    paidFee: 30000,
    remainingFee: 20000,
  };

  const attendanceChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Attendance (%)',
        data: attendanceData,
        fill: false,
        borderColor: '#475BE8',
        tension: 0.1,
      },
    ],
  };

  const feeProgressPercentage = ((feeData.paidFee / feeData.totalFee) * 100).toFixed(2);

  useEffect(() => {
    // Any animations or dynamic data fetching logic can go here
  }, []);

  return (
    <div className="flex flex-wrap justify-around p-8 bg-[#383854]">
      {/* Total Children Card */}
      <div className="bg-[#2E2E48] text-white rounded-lg shadow-lg p-6 mb-8 w-80 h-52 flex items-center justify-center">
        <div>
          <h3 className="text-2xl font-semibold mb-2">Total Children Admitted</h3>
          <p className="text-5xl font-bold">{childrenCount}</p>
        </div>
      </div>

      {/* Pending Meetings Card */}
      <div className="bg-[#2E2E48] text-white rounded-lg shadow-lg p-6 mb-8 w-80 h-52 flex items-center justify-center">
        <div>
          <h3 className="text-2xl font-semibold mb-2">Pending Meetings</h3>
          <p className="text-5xl font-bold">{pendingMeetings}</p>
        </div>
      </div>

      {/* Fee Overview Card */}
      <div className="bg-[#2E2E48] text-white rounded-lg shadow-lg p-6 mb-8 w-80 h-64 flex flex-col justify-between overflow-hidden">
        <div className="flex flex-col">
          <h3 className="text-2xl font-semibold mb-2">Fee Overview</h3>
          <p className="text-xl mb-2">Total Fee: {feeData.totalFee.toLocaleString()} PKR</p>
          <p className="text-xl mb-2">Paid Fee: {feeData.paidFee.toLocaleString()} PKR</p>
          <p className="text-xl font-bold text-[#475BE8]">
            Remaining Fee: {feeData.remainingFee.toLocaleString()} PKR
          </p>
        </div>
        <div className="mt-4 w-full">
          <div className="w-full h-2 bg-gray-400 rounded-full">
            <div
              className="h-full bg-[#475BE8] rounded-full"
              style={{ width: `${feeProgressPercentage}%` }}
            ></div>
          </div>
          <p className="text-center text-white mt-2">{feeProgressPercentage}% Paid</p>
        </div>
      </div>

      {/* Attendance Chart */}
      <div className="bg-[#2E2E48] text-white rounded-lg shadow-lg p-6 mb-8 w-full max-w-3xl">
        <h3 className="text-2xl font-semibold mb-4">Weekly Attendance</h3>
        <div className="relative w-full h-80">
          {/* Chart container */}
          <Line
            data={attendanceChartData}
            options={{
              responsive: true,
              maintainAspectRatio: true,
              scales: {
                x: {
                  grid: {
                    display: false,
                  },
                },
                y: {
                  beginAtZero: true,
                  grid: {
                    color: '#383854',
                  },
                  ticks: {
                    color: '#fff',
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ParentDashboardOverview;
