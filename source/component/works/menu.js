import React from 'react'
import './works.sass'
import cx from "classnames"

class NavigationWorks extends React.Component {
  render() {
    var {active, onClick} = this.props;
    const ListItem = this.props.data.map((item, key) =>
      <li 
        key={key}
        onClick={() => onClick(item.num)}
        className={cx('menu-works-item', {"active-works-item": active == item.num})}>
        {item.name}
      </li>
    )
    return(
      <ul className="works-nav">
        {ListItem}
      </ul>
    )
  }
}

export default NavigationWorks;