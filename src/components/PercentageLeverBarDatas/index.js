import PercentageLevelBarData from "./PercentageLevelBarData"
import "./style.scss"
const PercentageLevelBarDatas = () => {

  const data = [
    {
      errorCode: 500,
      errorCount: 1256,
      color: "color-1",
    }, {
      errorCode: 501,
      errorCount: 800,
      color: "color-2",
    }, {
      errorCode: 502,
      errorCount: 650,
      color: "color-3",
    }, {
      errorCode: "other",
      errorCount: 330,
      color: "color-4",
    }
  ]
  return (
    <div className="percentage-level-bar-datas">
      {data.map(dataItem =>
        <PercentageLevelBarData key={Math.random()} data={dataItem} />
      )}
    </div>
  )
}

export default PercentageLevelBarDatas