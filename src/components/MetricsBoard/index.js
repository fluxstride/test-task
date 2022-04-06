import TopMetricsData from "../TopMetricsData"
import "./style.scss"
import PercentageLevelBar from '../PercentageLevelBar/index';
import PercentageLevelBarDatas from '../PercentageLeverBarDatas/index';
const MetricsBoard = () => {
  return (
    <div className="metrics-board">
      <TopMetricsData />
      <PercentageLevelBar />
      <PercentageLevelBarDatas/>
    </div>
  )
}

export default MetricsBoard