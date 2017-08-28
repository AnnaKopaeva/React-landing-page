import React from 'react'
import './contacts.sass'

import Envelope from './images/Envelopse.png'

class Form extends React.Component {
  render() {
    return(
      <div className="wrapper-form">
        <form>
          <h2></h2>
          <input type="text" />
          <input type="email" />
          <input type="text" />
          <button><></button>
        </form>
      </div>
    )
  }
}

export default Form;
