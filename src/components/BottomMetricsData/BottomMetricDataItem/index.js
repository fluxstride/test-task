import "./style.scss";
import searchIcon from "../../../icons/searchIcon.svg"
const BottomMetricsDataItem = () => {
  return (
    <div className="bottom-metrics-data-item">
      <div className="bottom-metrics-data-item__main-data">
        <img className="bottom-metrics-data-item__main-data__icon" src={searchIcon} alt="icon" />
        <div className="bottom-metrics-data-item__main-data__body">
          <div className="bottom-metrics-data-item__main-data__body__title">
            <p className="bottom-metrics-data-item__main-data__body__title__text">
              Searches
            </p>
            <p className="bottom-metrics-data-item__main-data__body__title__percentage">+5%</p>
          </div>
          <div className="bottom-metrics-data-item__main-data__body__title">
            <p className="bottom-metrics-data-item__main-data__body__title__text ">
              {29380}
            </p>
            <p className="bottom-metrics-data-item__main-data__body__title__percentage bottom-metrics-data-item__main-data__body__title__percentage--disabled">Yesterday</p>
          </div>
          <div className="bottom-metrics-data-item__main-data__body__title bottom-metrics-data-item__main-data__body__title--low-opacity">
            <p className="bottom-metrics-data-item__main-data__body__title__text">
              27 985
            </p>
            <p className="bottom-metrics-data-item__main-data__body__title__percentage bottom-metrics-data-item__main-data__body__title__percentage--disabled"></p>
          </div>

        </div>
      </div>
      <div className="bottom-metrics-data-item__secondary-data">
      </div>
    </div>
  )
}

export default BottomMetricsDataItem;