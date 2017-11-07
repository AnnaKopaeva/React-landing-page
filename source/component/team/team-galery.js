import React from 'react'
import './team.sass'

import Twitter from './images/wtwitter.png'
import Facebook from './images/wfacebook.png'
import Google from './images/wgoogle.png'

class GaleryTeam extends React.Component {
  render() {
    const BlocksItemTeam = this.props.data.map((item, key) =>
      <div key={key} className="block-team">
        <div className="block-about">
          <div className="hover-block">
            <h5>{item.about}</h5>
            <span>{item.description}</span>
            <div className="link-profile">
              <a><img src={Twitter} /></a>
              <a><img src={Facebook} /></a>
              <a><img src={Google} /></a>
            </div>
          </div>
          <img src={item.imgSrc} className="image-team" />
        </div>
        <h3>{item.name}</h3>
        <h4>{item.position}</h4>
      </div>
    )
    return(
      <div className="team-gallery">
        {BlocksItemTeam}
      </div>
    )
  }
}

export default GaleryTeam;