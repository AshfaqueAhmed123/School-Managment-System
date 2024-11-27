import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Registering necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

// Conversion rate (1 USD to PKR)
const conversionRate = 290; // 1 USD = 290 PKR

const TuitionFeeTracker = () => {
  // Dummy data for the fees in USD
  const [feeData, setFeeData] = useState({
    totalFeeUSD: 10000,  // Total fee for the month in USD
    paidFeeUSD: 6500,    // Paid fee so far in USD
    remainingFeeUSD: 3500, // Remaining fee in USD
  });

  // Convert USD to PKR
  const totalFeePKR = feeData.totalFeeUSD * conversionRate;
  const paidFeePKR = feeData.paidFeeUSD * conversionRate;
  const remainingFeePKR = feeData.remainingFeeUSD * conversionRate;

  // Chart data setup
  const chartData = {
    labels: ['Paid Fee', 'Remaining Fee'], // Labels for the doughnut chart
    datasets: [
      {
        data: [paidFeePKR, remainingFeePKR],
        backgroundColor: ['#4CAF50', '#FF5733'], // Green for paid, Red for remaining
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-[#2E2E48] rounded-lg shadow-lg">
      <h2 className="text-white text-3xl font-bold mb-6">Tuition Fee Tracker</h2>

      {/* Doughnut Chart showing fee status */}
      <div className="mb-6 w-[400px] m-auto">
        <Doughnut data={chartData} />
      </div>

      {/* Fee Summary */}
      <div className="text-white space-y-4">
        <div className="flex justify-between">
          <span className="font-semibold text-lg">Total Fee for this Month:</span>
          <span className="text-xl font-bold">{totalFeePKR.toLocaleString()} PKR</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold text-lg">Paid Fee:</span>
          <span className="text-xl font-bold">{paidFeePKR.toLocaleString()} PKR</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold text-lg">Remaining Fee:</span>
          <span className="text-xl font-bold">{remainingFeePKR.toLocaleString()} PKR</span>
        </div>
      </div>

      {/* Additional Section for Motivation */}
      <div className="mt-6 text-center text-white">
        <p className="text-lg font-semibold">Keep up the great work!</p>
        <p className="text-sm">Let's make this year a success by completing the fees!</p>
      </div>
    </div>
  );
};

export default TuitionFeeTracker;
