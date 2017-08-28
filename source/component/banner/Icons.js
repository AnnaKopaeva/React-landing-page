import React from 'react'
import './banner.sass'

class Icons extends React.Component {
  render() {
    const ImageItems = this.props.data.map((imgSrc, key) =>
      <img src={imgSrc} key={key}/>
    )
    return(
      <div className="icons">
        {ImageItems}
      </div>
    )
  }
}

export default Icons;