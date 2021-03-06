import React from 'react'
import { render } from 'react-dom'
import { Switch, Route , HashRouter } from 'react-router-dom'

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

import PostPage from './component/blog/post_page';
import Post from './component/blog/Post';

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
            <Route exact path='/posts' component={Post}/>
            <Route path='/posts/:id' component={PostPage}/>
        </Switch>
    </main>
)

render((
    <HashRouter>
      <RouteComponent />
    </HashRouter>
), document.getElementById('root'));
