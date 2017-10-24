import React from 'react';

import Logo from './images/logo.png'
import Behance from './images/behance.png'
import Twitter from './images/twitter.png'
import Dribbble from './images/dribbble.png'
import Forrst from './images/forrst.png'
import Google from './images/google.png'

class HeaderBlog extends React.Component {
    state = {
        iconsLink: [
            {
                imgSrc: Behance
            },{
                imgSrc: Twitter
            }, {
                imgSrc: Dribbble
            }, {
                imgSrc: Forrst
            }, {
                imgSrc: Google
            }
        ]
    };
    render(){
        const listItems = this.state.iconsLink.map((data, key) => (
            <li key={key} className="menu-item">
                <a href="#">
                    <img src={data.imgSrc} />
                </a>
            </li>
        ));
        return(
            <div className="wrapper-header-blog">
                <div className="header-blog">
                    <img src={Logo} alt="logo" className="header-blog__logo"/>
                    <ul className="header-blog__nav">
                        {listItems}
                    </ul>
                </div>
            </div>
        )
    }
}

export default HeaderBlog;