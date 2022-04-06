import MetricsBoard from "../MetricsBoard";
import MetricsNavigation from "../MetricsNavigation";
import "./style.scss"

const Metrics = () => {
  return (
    <div className="metrics">
      <h3 className="metrics__title">
        Main metrics
      </h3>
      <MetricsNavigation />
      <MetricsBoard />
    </div>
  );
}

export default Metrics;