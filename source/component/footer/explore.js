import React from 'react'
import './footer.sass'

class Explore extends React.Component {
    render() {
        const ListItem = this.props.data.map((item, key) =>
            <li key={key}>{item.name}</li>
        )
        return(
            <div className="explore">
                <h3>Explore</h3>
                <ul className="wrapper-links-explore">
                    {ListItem}
                </ul>
            </div>
        )
    }
}

export default Explore;
