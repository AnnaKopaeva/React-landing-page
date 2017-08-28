import React from 'react'
import './presentation.sass'
import Block from 'component/constants/blocks'

import Customize from './images/customize.png'
import Time from './images/time.png'
import Music from './images/Music.png'
import Support from './images/support.png'
import Send from './images/send.png'
import Camera from './images/camera.png'
import Iphone from './images/iPhone.png'

export class Presentation extends React.Component {
  render() {
    return(
      <div className="main-wrapper presentation-wrapper">
        <div className="presentation">
          <p className="presentation-title">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, \
          totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
          <Block data={this.props.data}/>
          <img src={Iphone} className="phone"/>
        </div>
      </div>
    )
  }
}

class WrapperPresentation extends React.Component {
  state = {
    data: [
      {
        title: 'Accusan timar',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        imgSrc: Customize
      },{
        title: 'Accusan timar',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        imgSrc: Support
      },{
        title: 'Accusan timar',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        imgSrc: Time
      },{
        title: 'Accusan timar',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        imgSrc: Send
      },{
        title: 'Accusan timar',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        imgSrc: Music
      },{
        title: 'Accusan timar',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        imgSrc: Camera
      }
    ]
  }

  render() {
    return <Presentation data={this.state.data}/>
  }
}

export default WrapperPresentation;