import React from "react";

const Fee = () => {
  // Dummy data for the fee structure
  const totalFee = 50000; // Total fee in PKR
  const paidFee = 20000;  // Amount already paid by the student

  // Calculate remaining fee
  const remainingFee = totalFee - paidFee;

  // Calculate the percentage of fee paid
  const percentagePaid = ((paidFee / totalFee) * 100).toFixed(2);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-[#2E2E48] rounded-lg shadow-lg">
      <h2 className="text-white text-3xl font-bold mb-6">Your Fee Details</h2>

      <div className="space-y-6">
        {/* Fee Information */}
        <div className="bg-[#383854] p-6 rounded-lg shadow-md">
          <h3 className="text-white text-xl font-semibold">Total Fee</h3>
          <p className="text-white text-3xl font-bold">{totalFee.toLocaleString()} PKR</p>
        </div>

        <div className="bg-[#383854] p-6 rounded-lg shadow-md">
          <h3 className="text-white text-xl font-semibold">Paid Fee</h3>
          <p className="text-white text-3xl font-bold">{paidFee.toLocaleString()} PKR</p>
        </div>

        <div className="bg-[#383854] p-6 rounded-lg shadow-md">
          <h3 className="text-white text-xl font-semibold">Remaining Fee</h3>
          <p className="text-white text-3xl font-bold">{remainingFee.toLocaleString()} PKR</p>
        </div>

        {/* Fee Progress Bar */}
        <div className="bg-[#383854] p-6 rounded-lg shadow-md">
          <h3 className="text-white text-xl font-semibold">Fee Payment Progress</h3>
          <div className="h-2 bg-gray-400 rounded-full mt-2">
            <div
              className="h-full bg-[#475BE8] rounded-full"
              style={{ width: `${percentagePaid}%` }}
            ></div>
          </div>
          <div className="text-white text-center mt-2">
            <span className="font-bold">{percentagePaid}%</span> paid
          </div>
        </div>

        {/* Fee Summary */}
        <div className="bg-[#383854] p-6 rounded-lg shadow-md">
          <h3 className="text-white text-xl font-semibold">Fee Status</h3>
          <p className="text-white">
            You have paid <strong>{paidFee.toLocaleString()} PKR</strong> of your total fee, and your remaining fee is
            <strong> {remainingFee.toLocaleString()} PKR</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Fee;
