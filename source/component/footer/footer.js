import React from 'react'

import Description from './description'
import Subscribe from './subscribe'
import Explore from './explore'
import ScrollToTop from './scrollToTop'

import TweenLite from 'gsap';

import './footer.sass'

export class Footer extends React.Component {
    render() {
        var {data, onClick} = this.props;
        return(
            <div className="main-wrapper footer-wrapper">
                <div className="info-wrapper">
                    <Description />
                    <Subscribe />
                    <Explore data={data}/>
                </div>
                <ScrollToTop onClick={onClick}/>
            </div>
        )
    }
}

class WrapperFooter extends React.Component {
    state = {
        links: [
            {
                name: 'Envato'
            },{
                name: 'Themeforest'
            }, {
                name: 'Themecurve'
            }, {
                name: 'Microsoft'
            }, {
                name: 'Kreativeshowcase'
            }, {
                name: 'Google'
            }, {
                name: 'Freebiescurve'
            }, {
                name: 'Yahoo'
            }
        ]
    }

    handlerClick = () => {
        TweenLite.to(window, .8, {scrollTo: '#containerHeader'});
    }

    render() {
        return <Footer
            data={this.state.links}
            onClick = {this.handlerClick}
        />
    }
}

export default WrapperFooter;