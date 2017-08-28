import React from 'react'
import './works.sass'
import cx from "classnames"

class NavigationWorks extends React.Component {
  render() {
    const ListItem = this.props.data.map((item, key) =>
      <li 
        key={key}
        className={cx('menu-works-item', {"active-works-item": item.active})}>
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