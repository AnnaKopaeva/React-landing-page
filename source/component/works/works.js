import React from 'react'
import './works.sass'
import NavigationWorks from './menu'
import Galery from './galery'
import Mark from 'component/constants/mark'

import Layer1 from './images/Layer1.png'
import Layer2 from './images/Layer2.png'
import Layer3 from './images/Layer3.png'
import Layer4 from './images/Layer4.png'
import Layer5 from './images/Layer5.png'
import Layer6 from './images/Layer6.png'
import Layer7 from './images/Layer7.png'
import Layer8 from './images/Layer8.png'

export class Works extends React.Component {
  render() {
    return(
      <div className="main-wrapper works-wrapper">
        <div className="works">
          <h2 className="title">Works</h2>
          <Mark />
          <p className="description">{"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, \
          totam rem aperiam, eaque ipsa quae ab illo inventore"}</p>
          <NavigationWorks data={this.props.data.menuItems}/>
        </div>
        <Galery data={this.props.data.galery} />
      </div>
    )
  }
}

class WrapperWorks extends React.Component {
  state = {
    menuItems: [
      {
        name: 'All',
        active: true,
      },{
        name: 'Branding',
        active: false,
      }, {
        name: 'Web',
        active: false,
      }, {
        name: 'Logo Design',
        active: false,
      }, {
        name: 'Photography',
        active: false,
      }
    ],
    galery: [
      {
        title: 'Labore et dolore magnam',
        description: 'Photography',
        imgSrc: Layer1
      },{
        title: 'Labore et dolore magnam',
        description: 'Photography',
        imgSrc: Layer2
      },{
        title: 'Labore et dolore magnam',
        description: 'Photography',
        imgSrc: Layer3
      },{
        title: 'Labore et dolore magnam',
        description: 'Photography',
        imgSrc: Layer4
      },{
        title: 'Labore et dolore magnam',
        description: 'Photography',
        imgSrc: Layer5
      },{
        title: 'Labore et dolore magnam',
        description: 'Photography',
        imgSrc: Layer6
      },{
        title: 'Labore et dolore magnam',
        description: 'Photography',
        imgSrc: Layer7
      },{
        title: 'Labore et dolore magnam',
        description: 'Photography',
        imgSrc: Layer8
      }
    ]
  }

  render() {
    return <Works data={this.state} />
  }
}

export default WrapperWorks;