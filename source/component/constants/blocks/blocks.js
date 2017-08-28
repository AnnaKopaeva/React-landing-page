import React from 'react'
import './blocks.sass'

class Block extends React.Component {
  getItems() {
    return this.props.data.map((item, key) =>
      <div className="block-about" key={key}>
        <div className="logo-about">
          <img src={item.imgSrc} />
        </div>
        <div className="text-about">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      </div>
    )
  }

  render() {
    return(
      <div className="wrapper-blocks-about">
        {this.getItems()}
      </div>
    )
  }
}

export default Block;