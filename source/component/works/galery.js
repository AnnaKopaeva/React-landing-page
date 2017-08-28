import React from 'react'
import './works.sass'
import cx from "classnames"
import Vector from "./images/Vector.png"

class Galery extends React.Component {
  render() {
    const BlocksItemWorks = this.props.data.map((item, key) =>
      <div key={key} className="block-works">
        <div className="hover-block">
          <div className="image-wrapper">
            <img src={Vector} />
          </div>
          <h3>{item.title}</h3>
          <span>{item.description}</span>
        </div>
        <img src={item.imgSrc} className="image-works" />
      </div>
    )
    return(
      <div className="works-gallery">
        {BlocksItemWorks}
      </div>
    )
  }
}

export default Galery;