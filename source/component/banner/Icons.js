import React from 'react'
import './banner.sass'

class Icons extends React.Component {
  render() {
    const ImageItems = this.props.data.map((imgSrc, key) =>
        <a href="#" key={key}><img src={imgSrc} /></a>
    )
    return(
      <div className="icons">
        {ImageItems}
      </div>
    )
  }
}

export default Icons;