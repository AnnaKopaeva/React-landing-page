import React from 'react'
import Navigation from './header-nav.js'
import './header.sass'
import 'normalize.css'
import scrollToElement from 'scroll-to-element'

class Header extends React.Component {
  state = {
      active: 1,
      nav : [
          {
              name: 'Home',
              num: 1,
              id: 'containerHeader',
          },{
              name: 'Features',
              num: 2,
              id: 'containerFeatures',
          },{
              name: 'Works',
              num: 3,
              id: 'containerWorks',
          },{
              name: 'Team',
              num: 4,
              id: 'containerTeam',
          },{
              name: 'Contact',
              num: 5,
              id: 'containerContacts',
          }
      ]
  }
  toggleActive = (active, id) => {
      this.setState({active});
      scrollToElement(`#${id}`, {
          offset: 0,
          ease: 'out-expo',
          duration: 1500
      });
  }
  render() {
    var { active } = this.state;
    return(
      <div className="header-wrapper" id="containerHeader">
        <div className="header">
          <div className="about-header">
            <h3 className="header-logo">
              sarajevo <span>.</span>
            </h3>
            <div className="header-present">
              I’am your tag line
            </div>
          </div>
          <Navigation
            data={this.state}
            active={active}
            onClick={this.toggleActive}/>
        </div>
      </div>
    )
  }
}

export default Header;
