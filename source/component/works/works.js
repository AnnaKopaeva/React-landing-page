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
  state = {
      active: 1
  }


  render() {
    return(
      <div className="main-wrapper works-wrapper" id= "containerWorks">
        <div className="works">
          <h2 className="title">Works</h2>
          <Mark />
          <p className="description">{"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, \
          totam rem aperiam, eaque ipsa quae ab illo inventore"}</p>
          <NavigationWorks
              data={this.props.data.menuItems}
              active={this.props.active}
              onClick={this.props.toggleActive}/>
        </div>
        <Galery data={this.props.data.galery} />
      </div>
    )
  }
}

class WrapperWorks extends React.Component {
  state = {
    active: 1,
    menuItems: [
      {
        name: 'All',
        num: 1
      },{
        name: 'Branding',
        num: 2
      }, {
        name: 'Web',
        num: 3
      }, {
        name: 'Logo Design',
        num: 4
      }, {
        name: 'Photography',
        num: 5
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

  toggleActive = (active) => {
      this.setState({active})
  }

  render() {
    return <Works
        data={this.state}
        active={this.state.active}
        toggleActive={this.toggleActive}/>
  }
}

export default WrapperWorks;