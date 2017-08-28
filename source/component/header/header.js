import React from 'react'
import Navigation from './header-nav.js'
import './header.sass'
import 'normalize.css'

const Nav = [
  {name: 'Home', active: true},
  {name: 'Features', active: false},
  {name: 'Works', active: false},
  {name: 'Team', active: false},
  {name: 'Contact', active: false},
];

class Header extends React.Component {
  render() {
    return(
      <div className="header-wrapper">
        <div className="header">
          <div className="about-header">
            <h3 className="header-logo">
              sarajevo <span>.</span>
            </h3>
            <div className="header-present">
              I’am your tag line
            </div>
          </div>
          <Navigation data={Nav}/>
        </div>
      </div>
    )
  }
}

export default Header;