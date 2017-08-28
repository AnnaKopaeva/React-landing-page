import React from 'react'
import './facts.sass'


class Statistic extends React.Component {
  render() {
    const ListItem = this.props.data.map((item, key) => 
      <div className="block-statictic" key={key}>
        <div className="image-statictic">
          <img src={item.imgSrc} />
        </div>
        <span className="number-statictic">{item.quantity}</span>
        <span className="number-description">{item.description}</span>
      </div>
    )
    return(
      <div className="wrapper-block-statictic">
        {ListItem}
      </div>
    )
  }
}

export default Statistic;
