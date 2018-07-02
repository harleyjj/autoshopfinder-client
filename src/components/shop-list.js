import React from 'react';

export default class CheeseList extends React.Component {
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