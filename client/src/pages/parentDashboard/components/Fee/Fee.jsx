import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Fee = () => {
  // Dummy data for multiple children's fee details
  const [childrenData] = useState([
    {
      name: 'Ali Khan',
      totalFee: 50000, // Total fee in PKR
      paidFee: 30000, // Paid fee in PKR
      remainingFee: 20000, // Remaining fee in PKR
      feeBreakdown: {
        tuition: 35000,
        extracurricular: 5000,
        other: 5000,
      },
      paymentHistory: [
        { month: 'January', amount: 10000 },
        { month: 'February', amount: 5000 },
        { month: 'March', amount: 7000 },
        { month: 'April', amount: 8000 },
      ],
    },
    {
      name: 'Sara Ahmed',
      totalFee: 45000,
      paidFee: 27000,
      remainingFee: 18000,
      feeBreakdown: {
        tuition: 30000,
        extracurricular: 7000,
        other: 8000,
      },
      paymentHistory: [
        { month: 'January', amount: 5000 },
        { month: 'February', amount: 7000 },
        { month: 'March', amount: 5000 },
        { month: 'April', amount: 10000 },
      ],
    },
    {
      name: 'Omar Iqbal',
      totalFee: 60000,
      paidFee: 25000,
      remainingFee: 35000,
      feeBreakdown: {
        tuition: 40000,
        extracurricular: 10000,
        other: 10000,
      },
      paymentHistory: [
        { month: 'January', amount: 5000 },
        { month: 'February', amount: 5000 },
        { month: 'March', amount: 7000 },
        { month: 'April', amount: 8000 },
      ],
    },
  ]);

  // State to manage which child's fee info is visible
  const [selectedChildIndex, setSelectedChildIndex] = useState(null);

  // Handle toggle of child fee info in the accordion
  const toggleChildInfo = (index) => {
    setSelectedChildIndex(selectedChildIndex === index ? null : index);
  };

  // Helper function to get the fee progress percentage
  const getFeeProgressPercentage = (paidFee, totalFee) => ((paidFee / totalFee) * 100).toFixed(2);

  return (
    <div className="bg-[#383854] p-8 space-y-8">
      <div className="text-center text-white">
        <h2 className="text-3xl font-semibold mb-4">Fee Details</h2>
        <p className="text-xl">Click on a child's name to view their fee details</p>
      </div>

      {/* Accordion for multiple children */}
      <div className="space-y-4">
        {childrenData.map((child, index) => (
          <div key={index} className="bg-[#2E2E48] text-white rounded-lg shadow-lg p-6">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleChildInfo(index)}
            >
              <h3 className="text-2xl font-semibold">{child.name}</h3>
              <span className="text-xl">{selectedChildIndex === index ? '-' : '+'}</span>
            </div>

            {/* Accordion content for the selected child */}
            {selectedChildIndex === index && (
              <div className="mt-4 space-y-6">
                {/* Fee Breakdown */}
                <div>
                  <h4 className="text-xl font-semibold mb-2">Fee Breakdown</h4>
                  <ul className="space-y-2">
                    <li className="text-lg">
                      <span className="font-bold">Tuition Fee: </span>{child.feeBreakdown.tuition.toLocaleString()} PKR
                    </li>
                    <li className="text-lg">
                      <span className="font-bold">Extracurricular Fee: </span>{child.feeBreakdown.extracurricular.toLocaleString()} PKR
                    </li>
                    <li className="text-lg">
                      <span className="font-bold">Other Fees: </span>{child.feeBreakdown.other.toLocaleString()} PKR
                    </li>
                  </ul>
                </div>

                {/* Fee Progress */}
                <div>
                  <h4 className="text-xl font-semibold mb-2">Fee Progress</h4>
                  <div className="w-full bg-gray-400 h-2 rounded-full mb-4">
                    <div
                      className="bg-[#475BE8] h-full rounded-full"
                      style={{ width: `${getFeeProgressPercentage(child.paidFee, child.totalFee)}%` }}
                    ></div>
                  </div>
                  <p className="text-center text-white">{getFeeProgressPercentage(child.paidFee, child.totalFee)}% of total fee has been paid</p>
                  <p className="text-center text-white mt-2">Remaining Fee: {child.remainingFee.toLocaleString()} PKR</p>
                </div>

                {/* Payment History Chart */}
                <div>
                  <h4 className="text-xl font-semibold mb-2">Fee Payment History</h4>
                  <div className="relative w-full h-80">
                    <Line
                      data={{
                        labels: child.paymentHistory.map((payment) => payment.month),
                        datasets: [
                          {
                            label: 'Fee Paid (PKR)',
                            data: child.paymentHistory.map((payment) => payment.amount),
                            fill: false,
                            borderColor: '#475BE8',
                            tension: 0.1,
                          },
                        ],
                      }}
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
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fee;
