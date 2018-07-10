import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import ServicesForm from './services-form';
import {logout} from '../actions/auth';

export class Dashboard extends React.Component {
    logOut() {
        this.props.dispatch(logout());
    };

    render() {
        return (
            <div className="dashboard">
                <div className="dashboard-username">
                    Username: {this.props.username}
                </div>
                <button onClick={()=>this.logOut()}>Log Out</button>
                <div className="shop-info-form">
                    <ServicesForm/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        username: state.auth.currentUser.username
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));