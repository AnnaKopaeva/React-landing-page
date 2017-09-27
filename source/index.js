import React from 'react'
import { render } from 'react-dom'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Header from './component/header';
import Banner from './component/banner';
import Features from './component/about';
import Presentation from './component/presentation';
import WrapperWorks from './component/works';
import WrapperTeam from './component/team';
import WrapperFacts from './component/facts';
import WrapperContacts from './component/contacts';
import GoogleApiWrapper from './component/map';
import WrapperFooter from './component/footer';
import ListItemBlog from './component/header/route.js'

import 'normalize.css'
import 'reset.css'

render((
    <BrowserRouter>
      <div className="body">
        <Header />
        <Banner />
        <Features />
        <Presentation />
        <WrapperWorks />
        <WrapperTeam />
        <WrapperFacts />
        <WrapperContacts />
        <GoogleApiWrapper />
        <WrapperFooter />
        <Route path='/' component={ListItemBlog}/>
      </div>
    </BrowserRouter>
), document.getElementById('root'));
