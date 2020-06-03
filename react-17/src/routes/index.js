import React from 'react'
import { Route, Switch } from 'react-router-dom'


import LoginRoute from './LoginRoute'
import { PrivateRoute } from '../containers'
import AuthorizeRoute from './AuthorizeRoute'
import DashboardRoute from './DashboardRoute'


const Routes = () => (
	<Switch>
		<Route exact path='/' component={LoginRoute}/>
		<Route exact path='/authorize' component={AuthorizeRoute}/>

		<PrivateRoute path='/dashboard' comp={DashboardRoute}/>
	</Switch>
)

export default Routes