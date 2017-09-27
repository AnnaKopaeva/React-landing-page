import React from 'react'

import './footer.sass'
import ArrowUp from './up-arrow.png'

class ScrollToTop extends React.Component {
    render() {
        var {onClick} = this.props;
        return(
                <button
                    className="scrollToTop"
                    onClick = {onClick} >
                    <img src={ArrowUp} />
                </button>
        )
    }
}

export default ScrollToTop;