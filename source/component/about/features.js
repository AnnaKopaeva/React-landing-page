import React from 'react'
import './features.sass'
import Mark from 'component/constants/mark'
import Block from 'component/constants/blocks'

import Feather from './image/feather.png'
import Pencil from './image/pencil.png'
import Megaphone from './image/megaphone.png'

export class Features extends React.Component {
  render() {
    return(
      <div className="main-wrapper about-wrapper">
        <div className="about">
          <h2 className="title">Features</h2>
          <Mark />
          <Block data={this.props.data}/>
        </div>
      </div>
    )
  }
}

class FeaturesBlocks extends React.Component {
  state = {
    data: [
      {
        title: 'Branding',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, \
        totam rem aperiam, eaque ipsa quae ab illo inventore',
        imgSrc: Feather
      },{
        title: 'Development',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, \
        totam rem aperiam, eaque ipsa quae ab illo inventore',
        imgSrc: Pencil
      },{
        title: 'Consulting',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, \
        totam rem aperiam, eaque ipsa quae ab illo inventore',
        imgSrc: Megaphone
      }
    ]
  }
  render() {
    return <Features data={this.state.data}/>
  }
}

export default FeaturesBlocks;