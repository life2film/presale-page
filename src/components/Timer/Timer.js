import React, { Component, PropTypes } from 'react';
import { v4 } from 'node-uuid';

import './Timer.css';


export default class Timer extends Component {
    static propTypes = {
        nums: PropTypes.object,
        items: PropTypes.array
    }

    renderItem = (word) => {
        const { nums } = this.props;
        return (
            <li
                className="timer__item"
                key={v4()}
            >
                <div className="timer__circle">{nums[word]}</div>
                <p className="timer__word">{word}</p>
            </li>
        )
    }

    render() {
        const { nums, items } = this.props;
        return (
            <div className="timer">
                <h4 className="timer__title">Time left:</h4>
                <ul className="timer__list">
                    {
                        items.map(this.renderItem)
                    }
                </ul>
            </div>
        )
    }
}