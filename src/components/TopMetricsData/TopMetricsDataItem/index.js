import "./style.scss";
const TopMetricsDataItem = ({ item }) => {

  const { title, average } = item;
  return (
    <div className="top-metrics-data-item">
      <div className="top-metrics-data-item__sphere">
      </div>
      <div className="top-metrics-data-item__body-data">
        <div className="top-metrics-data-item__body-data__title">
          {title}
        </div>
        <div className="top-metrics-data-item__body-data__average">
          {average}
        </div>
      </div>
    </div>
  )
}

export default TopMetricsDataItem

