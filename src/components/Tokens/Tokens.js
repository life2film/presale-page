import React, { PropTypes } from 'react';

import './Tokens.css';

const Tokens = ({ balance, max, course }) => (
    <div className="tokens">
        <div className="tokens__top">
            <h4 className="tokens__title">PreCrowdsale LIFE tokens left:</h4>
            <div className="tokens__wrapper">
                <div className="tokens__count">
                    <div className="tokens__num">{balance}</div>
                    <p className="tokens__descr">LIFE sold</p>
                </div>
                <span className="tokens__divider">of</span>
                <div className="tokens__count">
                    <div className="tokens__num">{max}</div>
                    <p className="tokens__descr">LIFE max</p>
                </div>
            </div>
        </div>
        <p className="tokens__course">PreCrowdsale LIFE tokens price: 1 ETH = {course} LIFE</p>
    </div>
);

Tokens.propTypes = {
    balance: PropTypes.string,
    max: PropTypes.string,
    course: PropTypes.number
};

export default Tokens;