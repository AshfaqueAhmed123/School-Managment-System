import React from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,  // Register LineElement
} from "chart.js";

// Register necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,   // Register PointElement
  LineElement      // Register LineElement
);

const Overview = () => {
  // Dummy data for the teacher's statistics
  const totalClasses = 15;
  const totalResources = 40;
  const totalAssignments = 20;
  const totalParentMeetings = 5;

  // Dummy data for the chart
  const monthlyData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Total Resources Shared",
        data: [5, 10, 7, 15, 12, 16],
        borderColor: "#475BE8",
        backgroundColor: "rgba(71, 91, 232, 0.2)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "Assignments Given",
        data: [2, 4, 5, 3, 6, 7],
        borderColor: "#FF5733",
        backgroundColor: "rgba(255, 87, 51, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const barChartData = {
    labels: ["Classes", "Resources", "Assignments", "Parent Meetings"],
    datasets: [
      {
        label: "Teacher Stats",
        data: [totalClasses, totalResources, totalAssignments, totalParentMeetings],
        backgroundColor: "#475BE8",
        borderColor: "#2E2E48",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-[#2E2E48] rounded-lg shadow-lg">
      <h2 className="text-white text-3xl font-bold mb-6">Teacher Overview</h2>

      {/* Total Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-[#383854] p-6 rounded-lg">
          <h3 className="text-white text-xl font-semibold">Total Classes</h3>
          <p className="text-white text-3xl font-bold">{totalClasses}</p>
        </div>
        <div className="bg-[#383854] p-6 rounded-lg">
          <h3 className="text-white text-xl font-semibold">Total Resources Shared</h3>
          <p className="text-white text-3xl font-bold">{totalResources}</p>
        </div>
        <div className="bg-[#383854] p-6 rounded-lg">
          <h3 className="text-white text-xl font-semibold">Total Assignments</h3>
          <p className="text-white text-3xl font-bold">{totalAssignments}</p>
        </div>
        <div className="bg-[#383854] p-6 rounded-lg">
          <h3 className="text-white text-xl font-semibold">Parent Meetings</h3>
          <p className="text-white text-3xl font-bold">{totalParentMeetings}</p>
        </div>
      </div>

      {/* Line Chart */}
      <div className="bg-[#383854] p-6 rounded-lg mb-8">
        <h3 className="text-white text-xl font-semibold mb-4">Monthly Activities</h3>
        <Line data={monthlyData} options={{ responsive: true, plugins: { legend: { position: "top" } } }} />
      </div>

      {/* Bar Chart */}
      <div className="bg-[#383854] p-6 rounded-lg">
        <h3 className="text-white text-xl font-semibold mb-4">Teacher's Key Stats</h3>
        <Bar data={barChartData} options={{ responsive: true, plugins: { legend: { position: "top" } } }} />
      </div>
    </div>
  );
};

export default Overview;
