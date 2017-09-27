import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navigation from './header-nav'

const ListItemBlog = () => (
    <Switch>
        <Route exact path='/' component={Navigation}/>
    </Switch>
)


export default ListItemBlog
