import React from 'react';
import {Link} from 'react-router-dom';


export default function LandingPage (props) {
    return (
        <div className="landing-page">
            <div className="shopseeker-route">
                <h2><Link to="/shopseekers">I'm looking for an autoshop</Link></h2>
            </div>
            <div className="shop-route">
                <h2><Link to="/shops">I am an autoshop</Link></h2>
            </div>
        </div>
    );
}