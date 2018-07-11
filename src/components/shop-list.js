import React from 'react';
import {connect} from 'react-redux';
import Spinner from 'react-spinkit';
import {fetchShops} from '../actions/shop';

export class ShopList extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchShops());
    }

    renderResults() {
        if (this.props.loading) {
            return <Spinner spinnername="circle" fadeIn="none" />;
        }

        if (this.props.error) {
            return <strong>{this.props.error.message}</strong>;
        }

        if (this.props.shops.length > 0) {
            return this.props.shops.map((shop, index) => {
                const fields = Object.keys(shop);
                fields.forEach(field => {
                    shop[field] = shop[field] === null ? '' : shop[field];
                });

                let days = [
                    'Monday', 
                    'Tuesday', 
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday',
                    'Sunday',
                ];

                days = days.map(day => {
                    return <span key= {`${day}.${shop}`}>{`${day}: ${shop[day.toLowerCase()]}`}<br/></span>;
                });

                const services_available = [];

                for (let i = 0; i < this.props.services.keys.length; i++) {
                    if (shop[this.props.services.keys[i]]) {
                        services_available.push(
                            <span key= {`${this.props.services.keys[i]}.${shop}`}>{this.props.services.strings[i]}<br/></span>
                        );
                    }
                }

                return (
                    <li key={index}>
                        <address>
                            <h3>{shop.name}</h3>
                            {shop.street}<br/>
                            {`${shop.city}, ${shop.state} ${shop.zip}`}<br/>
                            {shop.phone}<br/>
                            {days}
                            <h3>We offer:</h3>
                            {services_available}
                        </address>
                    </li>
                    );
            });
        }

        return <li key="no results">No Results</li>;
    }

    render() {
        return (
            <ul className="shop-list">
                {this.renderResults()}
            </ul>
        );
    }
}

const mapStateToProps = state => ({
    shops: state.shop.shops,
    loading: state.shop.loading,
    error: state.shop.error,
    services: state.shop.services
});

export default connect(mapStateToProps)(ShopList);