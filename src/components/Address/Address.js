import React, { PropTypes, Component } from 'react';
import Title from '../Title';

import './Address.css';

const Address = (props) => {
    const { onBtnClick } = props;
    return (
        <div className="address">
            <div className="address__title">
                <Title>SONM Presale smart contract address</Title>
            </div>
            <button
                className="address__btn"
                onClick={onBtnClick}
            >
                Show SONM Presale deposit address
            </button>
        </div>
    )
}

export default Address;