import React from 'react'
import './header.sass'
import 'normalize.css'
import cx from "classnames";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'


class Navigation extends React.Component {
  render() {
    var { onClick, active } = this.props;
    console.log(this.props.data);
    var data = {nav:[]};
    const ListItem = this.props.data.nav.map((item, key) =>
      <li
        key={key}
        className={cx('menu-item', {"active": active == item.num})}
        onClick={() => onClick(item.num, item.id)}>
        <Link to={`${item.routeId}`}>{item.name}</Link>
      </li>
    )
    return(
      <ul className="header-nav">
          {ListItem}
      </ul>
    )
  }
}

Navigation.defaultProps = {
    data: {
        nav: [],
    }
}

export default Navigation;