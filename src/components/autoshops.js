import React from 'react';
import {Route, Link} from 'react-router-dom';
import ShopList from './shop-list';
import ShopLogin from './shop-login';
import RegistrationPage from './registration-page';
import './autoshops.css';
import LandingPage from './landing-page';
import Dashboard from './dashboard';

export default function Autoshops() {
    return (
        <div className="autoshops">
            <header>
                <h1><Link to="/">Auto Shop Finder</Link></h1>
            </header>
            <main>
                <Route exact path="/" component={LandingPage}/>
                <Route exact path="/shops" component={ShopLogin}/>
                <Route exact path="/shopseekers" component={ShopList}/>
                <Route exact path="/register" component={RegistrationPage} />
                <Route exact path="/dashboard" component={Dashboard} />
            </main>
        </div>
    );
}