import React from 'react'
import './mark.sass'
import Symbol from './heart.png'
import SymbolWhite from './heartWhite.png'

class Mark extends React.Component {
  render() {
    return(
      <div className="mark">
        <div className="line"></div>
        <img src={Symbol} className="symbol"/>
        <img src={SymbolWhite} className="symbol-white"/>
        <div className="line"></div>
      </div>
    )
  }
}

export default Mark;