import React from 'react'
import { render } from 'react-dom'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Header from './component/header';
import Blog from './component/blog/blog';
import Banner from './component/banner';
import Features from './component/about';
import Presentation from './component/presentation';
import WrapperWorks from './component/works';
import WrapperTeam from './component/team';
import WrapperFacts from './component/facts';
import WrapperContacts from './component/contacts';
import GoogleApiWrapper from './component/map';
import WrapperFooter from './component/footer';

import 'normalize.css'
import 'reset.css'

const MainComponent = () => (
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
    </div>
)

const RouteComponent = () => (
    <main className="blog">
        <Switch>
            <Route exact path='/' component={MainComponent}/>
            <Route exact path='/React-landing-page/build/blog' component={Blog}/>
        </Switch>
    </main>
)

render((
    <BrowserRouter>
      <RouteComponent />
    </BrowserRouter>
), document.getElementById('root'));
