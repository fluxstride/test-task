import TopMetricsData from "../TopMetricsData"
import "./style.scss"
import PercentageLevelBar from '../PercentageLevelBar/index';
import PercentageLevelBarDatas from '../PercentageLeverBarDatas/index';
import BottomMetricsDataItem from "../BottomMetricsData/BottomMetricDataItem";
const MetricsBoard = () => {
  return (
    <div className="metrics-board">
      <TopMetricsData />
      <PercentageLevelBar />
      <PercentageLevelBarDatas />
      <BottomMetricsDataItem />
      <BottomMetricsDataItem />
      <BottomMetricsDataItem />
    </div>
  )
}

export default MetricsBoard