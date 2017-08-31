import React from 'react'
import './header.sass'
import 'normalize.css'
import cx from "classnames";


class Navigation extends React.Component {
  render() {
    var { onClick, active } = this.props;
    console.log(this.props.data.Nav.id)
    const ListItem = this.props.data.Nav.map((item, key) =>
      <li
        key={key}
        className={cx('menu-item', {"active": active == item.num})}
        onClick={() => onClick(item.num, item.id)}>
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