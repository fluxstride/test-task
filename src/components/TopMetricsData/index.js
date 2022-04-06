import TopMetricsDataItem from "./TopMetricsDataItem"
import "./style.scss"
const data = [
  {
    title: "Errors: 0,12%",
    average: "Average: 0,11%",
  }, {
    title: "Zeroes: 5,12%",
    average: "Average: 0,11%",
  }, {
    title: "Timeouts: 0,12%",
    average: "Average: 0,11%",
  }
]
const TopMetricsData = () => {
  return (
    <div className="top-metrics-data">
      {data.map(dataItem => <TopMetricsDataItem key={Math.random()} item={dataItem} />)}
    </div>
  )
}

export default TopMetricsData