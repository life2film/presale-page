import React, { PureComponent, PropTypes } from 'react';
import { v4 } from 'node-uuid';

import './Timer.css';


export default class Timer extends PureComponent {
    static propTypes = {
        days: PropTypes.number,
        hours: PropTypes.number,
        minutes: PropTypes.number,
        seconds: PropTypes.number,
        units: PropTypes.array
    }

    renderItem = (unit) => {
        return (
            <li
                className="timer__item"
                key={v4()}
            >
                <div className="timer__circle">{this.props[unit]}</div>
                <p className="timer__word">{unit}</p>
            </li>
        )
    }

    render() {
        const { units} = this.props;
        return (
            <div className="timer">
                <h4 className="timer__title">Time left:</h4>
                <ul className="timer__list">
                    {
                        units.map(this.renderItem)
                    }
                </ul>
            </div>
        )
    }
}