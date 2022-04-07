import MetricsBoard from "../MetricsBoard";
import MetricsNavigation from "../MetricsNavigation";
import "./style.scss"

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h3 className="dashboard__title">
        Main metrics
      </h3>
      <MetricsNavigation />
      <MetricsBoard />
    </div>
  );
}

export default Dashboard;