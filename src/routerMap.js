import React from 'react';
import {Router,hashHistory,Route,IndexRoute} from 'react-router';
import Home from './containers/home';
import App from './App';
import City from './containers/city';
import Search from './containers/search';
import Detail from './containers/detail';
import Login from './containers/login';
import User from './containers/user';
export default class RouterMap extends React.Component{
    render(){
        return(
            <Router history={hashHistory}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home}/>
                    <Route path='/city' component={City}/>
                    <Route path='/search/:category(/:keyword)' component={Search}/>
                    <Route path='/detail/:id' component={Detail}/>
                    <Route path='/login(/:router)' component={Login}/>
                    <Route path='/user' component={User}/>
                </Route>
            </Router>
        );
    }
}
