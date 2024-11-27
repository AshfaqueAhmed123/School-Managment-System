import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Attendence = () => {
  // Dummy data for attendance (1 for attended, 0 for missed)
  const attendanceData = [
    1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1,
  ]; // Attendance for 31 days
  const totalClasses = attendanceData.length;
  const attendedClasses = attendanceData.filter((day) => day === 1).length;
  const missedClasses = totalClasses - attendedClasses;

  // Data for the Bar Chart
  const chartData = {
    labels: Array.from({ length: totalClasses }, (_, i) => `Day ${i + 1}`),
    datasets: [
      {
        label: "Attendance",
        data: attendanceData,
        backgroundColor: "#475BE8",
        borderColor: "#2E2E48",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-[#2E2E48] rounded-lg shadow-lg">
      <h2 className="text-white text-3xl font-bold mb-6">Student Attendance</h2>

      {/* Overall Attendance Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#383854] p-6 rounded-lg">
          <h3 className="text-white text-xl font-semibold">Total Classes</h3>
          <p className="text-white text-3xl font-bold">{totalClasses}</p>
        </div>
        <div className="bg-[#383854] p-6 rounded-lg">
          <h3 className="text-white text-xl font-semibold">Classes Attended</h3>
          <p className="text-white text-3xl font-bold">{attendedClasses}</p>
        </div>
        <div className="bg-[#383854] p-6 rounded-lg">
          <h3 className="text-white text-xl font-semibold">Classes Missed</h3>
          <p className="text-white text-3xl font-bold">{missedClasses}</p>
        </div>
      </div>

      {/* Attendance Chart */}
      <div className="bg-[#383854] p-6 rounded-lg mb-8">
        <h3 className="text-white text-xl font-semibold mb-4">Monthly Attendance</h3>
        <Bar data={chartData} options={{ responsive: true, plugins: { legend: { position: "top" } } }} />
      </div>
    </div>
  );
};

export default Attendence;
