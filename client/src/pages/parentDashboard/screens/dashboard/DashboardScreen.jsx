import { AreaCards, AreaCharts, AreaTable, AreaTop } from "../../components";
import Message from "../../components/dashboard/Message";
import AttendenceChart from "../../components/dashboard/attendenceChart/AttendenceChart"
import ParentDashboardOverview from "./Overview";

const Dashboard = () => {
  return (
    <div className="content-area">
      <AreaTop />
      <ParentDashboardOverview/>
    </div>
  );
};

export default Dashboard;
