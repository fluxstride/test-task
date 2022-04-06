import "./style.scss"
const PercentageLevelBarData = ({ data }) => {

  const { color, errorCode, errorCount } = data
  
  return (
    <div className="percentage-level-bar-data">
      <div className={`percentage-level-bar__box ${color}`}>
      </div>
      <div className="percentage-level-bar__text">
        <span>{`${errorCode !== "other" ? "Error" : ""} ${errorCode}`}</span>:{" "}<span>{errorCount}</span>
      </div>
    </div>
  )
}

export default PercentageLevelBarData
