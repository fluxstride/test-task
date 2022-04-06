import "./style.scss"

const MetricsNavigation = () => {
  return (
    <div className="metrics-navigation">
      <ul className="metrics-navigation__list">
        <li className="metrics-navigation__list__item">
          Last hour
        </li>
        <li className="metrics-navigation__list__item">
          Today
        </li>
        <li className="metrics-navigation__list__item metrics-navigation__list__item--active">Yesterday</li>
        <li className="metrics-navigation__list__item">Last 3 days</li>
      </ul>
    </div>

  )
}

export default MetricsNavigation;