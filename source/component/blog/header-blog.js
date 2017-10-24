import React from 'react';

import Logo from './images/logo.png'
import Twitter from './images/wtwitter.png'
import Dribbble from './images/wdribbble.png'
import Facebook from './images/wfacebook.png'
import Google from './images/wgoogle.png'

class HeaderBlog extends React.Component {
    state = {
        iconsLink: [
            {
                imgSrc: Twitter
            }, {
                imgSrc: Dribbble
            }, {
                imgSrc: Facebook
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