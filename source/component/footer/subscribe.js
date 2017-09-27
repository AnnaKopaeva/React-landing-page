import React from 'react'
import './footer.sass'
import Shape from'./Shape.png'
class Subscribe extends React.Component {
    render() {
        return(
            <div className="subscribe">
                <h3>Subscribe</h3>
                <div className="input-wrapper">
                    <input type="email" />
                    <img src={Shape} />
                </div>
                <p>eusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
        )
    }
}

export default Subscribe;
