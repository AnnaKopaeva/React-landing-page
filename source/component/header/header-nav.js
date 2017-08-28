import React from 'react'
import './header.sass'
import 'normalize.css'
import cx from "classnames"

class Navigation extends React.Component {
  render() {
    const ListItem = this.props.data.map((item, key) =>
      <li 
        key={key}
        className={cx('menu-item', {"active": item.active})}>
        {item.name}
      </li>
    )
    return(
      <ul className="header-nav">
        {ListItem}
      </ul>
    )
  }
}

export default Navigation;