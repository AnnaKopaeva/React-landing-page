import React from 'react'
import './contacts.sass'


class Links extends React.Component {
  render() {
    const ListItem = this.props.data.map((item, key) => 
      <li key={key}><img src={item.imgSrc} /></li>
    );
    return(
      <ul className="wrapper-links">
        {ListItem}
      </ul>
    )
  }
}

export default Links;
