import { AreaCards, AreaCharts, AreaTable, AreaTop } from "../../components";
import Message from "../../components/dashboard/Message";
import AttendenceChart from "../../components/dashboard/attendenceChart/AttendenceChart"
import Overview from "./Overview";

const Dashboard = () => {
  return (
    <div className="content-area">
      <AreaTop />
      {/* <AreaCards /> */}
      {/* <AttendenceChart/> */}
      {/* <AreaCharts /> */}
      {/* <Message/> */}
      {/* <AreaTable /> */}
      <Overview/>
    </div>
  );
};

export default Dashboard;
