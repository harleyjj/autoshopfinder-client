import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ShopList from './shop-list';
import './autoshops.css';

export default function Autoshops() {
    return (
        <Router>
            <div className="autoshops">
                <header>
                    <h1><Link to="/">Autoshops.com</Link></h1>
                </header>
                <main>
                    <Route exact path="/" component={ShopList}/>
                    {/* <Route exact path="/" component={LandingPage}/> */}
                    <Route exact path="/shops" component={ShopList}/>
                    {/* <Route exact path="/shops" component={SignIn}/> */}
                    <Route exact path="/shopseekers" component={ShopList}/>
                </main>
            </div>
        </Router>
    );
}