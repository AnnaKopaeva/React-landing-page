import React from 'react'
import './banner.sass'

import Twitter from './images/twitter.png'
import Facebook from './images/facebook.png'
import Google from './images/google.png'
import Dribbble from './images/dribbble.png'
import Icons from './Icons'

const icons = [Twitter, Facebook, Google, Dribbble]

class Banner extends React.Component {
  render() {
    return(
      <div className="banner-wrapper">
        <div className="banner-context">
          <h1>sarajevo <span>.</span></h1>
          <h2><span>/creative</span> one page template.</h2>
          <h3><span>We are a team of professionals</span></h3>
          <Icons data={icons}/>
        </div>
      </div>
    )
  }
}

export default Banner;