import React from 'react'
import Mark from 'component/constants/mark'
import Adress from './'
import Form from './'
import Links from './'

import './facts.sass'

import Behance from './images/behance.png'
import Twitter from './images/twitter.png'
import Dribbble from './images/dribbble.png'
import Forrst from './images/forrst.png'
import Google from './images/google.png'

export class Contacts extends React.Component {
  render() {
    return(
      <div className="main-wrapper contacts-wrapper">
        <div className="contacts-context">
          <h2 className="title">Let’s Discuss</h2>
          <Mark />
          <p>Voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</p>
          <Adress />
          <Form />
          <Links data={this.props.data}/>
        </div>
      </div>
    )
  }
}

class WrapperContacts extends React.Component {
  state = {
    iconsLink: [
      {
        imgSrc: Behance
      },{
        imgSrc: Twitter
      }, {
        imgSrc: Dribbble
      }, {
        imgSrc: Forrst
      }, {
        imgSrc: Google
      }
    ]
  }

  render() {
    return <Contacts data={this.state.iconsLink} />
  }
}

export default WrapperContacts;