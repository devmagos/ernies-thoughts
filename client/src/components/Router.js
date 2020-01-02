import React from 'react';
import {BrowserRouter as R, Route,} from 'react-router-dom';
import Login from '../Auth/Login';
import SignOut from './SignOut';
import Blog from './Blog';
import Publishpost from './Publishpost';

const CustomRouter = () => {
    return(
        <R>
            <Route path='/' exact component={Login}></Route>
            <Route path='/Blog' component={Blog}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/SignOut' component={SignOut}></Route>
            <Route path='/Publishpost' component={Publishpost}></Route>
            
        </R>
    );
}

export default CustomRouter;