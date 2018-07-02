import React from 'react';
import {connect} from 'react-redux';
import {fetchShops} from '../actions/shop';

export class ShopList extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchShops());
    }

    render() {
        const shops = this.props.shops.map((shop, index) => {
            return <li key={index}>{shop}</li>
        });

        return (
            <ul className="shop-list">
                {shops}
            </ul>
        );
    }
}

const mapStateToProps = state => ({
    shops: state.shops
});

export default connect(mapStateToProps)(ShopList);