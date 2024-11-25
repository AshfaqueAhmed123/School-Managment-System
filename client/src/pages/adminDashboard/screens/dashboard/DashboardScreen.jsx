import { AreaCards, AreaCharts, AreaTable, AreaTop } from "../../components";
import Message from "../../components/dashboard/Message";

const Dashboard = () => {
  return (
    <div className="content-area">
      <AreaTop />
      <AreaCards />
      <AreaCharts />
      <Message/>
      {/* <AreaTable /> */}
    </div>
  );
};

export default Dashboard;
