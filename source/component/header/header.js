import React from 'react'
import Navigation from './header-nav.js'
import './header.sass'
import 'normalize.css'
import TweenLite from 'gsap';
import scrollTo from '../../../node_modules/gsap/ScrollToPlugin';

class Header extends React.Component {
  state = {
      active: 1,
      Nav : [
          {name: 'Home', num: 1, id: 'containerHeader'},
          {name: 'Features', num: 2, id: 'containerFeatures'},
          {name: 'Works', num: 3, id: 'containerWorks'},
          {name: 'Team', num: 4, id: 'containerTeam'},
          {name: 'Contact', num: 5, id: 'containerContacts'},
      ]
  }
  toggleActive = (active, id) => {
      this.setState({active});
      TweenLite.to(window, .8, {scrollTo: `#${id}`});
  }
  render() {
    var { active, Nav } = this.state;
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
              onClick={this.toggleActive} />
        </div>
      </div>
    )
  }
}

export default Header;
