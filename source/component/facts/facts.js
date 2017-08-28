import React from 'react'
import Mark from 'component/constants/mark'
import Statistic from './statistic.js'

import './facts.sass'

import Clock from './images/Clock.png'
import Friends from './images/Friends.png'
import Rocket from './images/Rocket.png'
import Cup from './images/Cup.png'

export class Facts extends React.Component {
  render() {
    return(
      <div className="main-wrapper facts-wrapper">
        <div className="facts-context">
          <h2 className="title">Some Fun Facts</h2>
          <Mark />
          <Statistic data={this.props.data}/>
        </div>
      </div>
    )
  }
}

class WrapperFacts extends React.Component {
  state = {
    statisticItems: [
      {
        imgSrc: Clock,
        quantity: 3200,
        description: 'Hours of Work'
      },{
        imgSrc: Friends,
        quantity: 120,
        description: 'Satisfied Clinets'
      }, {
        imgSrc: Rocket,
        quantity: 360,
        description: 'Projects delivered'
      }, {
        imgSrc: Cup,
        quantity: 42,
        description: 'Awards Won'
      }
    ]
  }

  render() {
    return <Facts data={this.state.statisticItems} />
  }
}

export default WrapperFacts;