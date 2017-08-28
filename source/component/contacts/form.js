import React from 'react'
import './contacts.sass'

import Envelope from './images/Envelope.png'

class Form extends React.Component {
  render() {
    return(
        <div className="wrapper-form">
          <h2>Say hello!</h2>
          <form>
            <input type="text" placeholder="Name" className="name"/>
            <input type="email" placeholder="Email" className="email"/>
            <input type="text" placeholder="Message" className="message"/>
            <button><img src={Envelope}/>Send message</button>
          </form>
      </div>
    )
  }
}

export default Form;
