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
            return <Spinner spinnerName="circle" noFadeIn />;
        }

        if (this.props.error) {
            return <strong>{this.props.error.message}</strong>;
        }

        if (this.props.shops.length > 0) {
            return this.props.shops.map((shop, index) => {
                return <li key={index}>{shop.name}</li>
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
    error: state.shop.error
});

export default connect(mapStateToProps)(ShopList);