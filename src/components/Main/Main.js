import React, {PureComponent} from 'react';
import Title from '../Title';
import Faq from '../Faq';
import Ask from '../Ask';
import Finish from '../Finish';
import Tokens from '../Tokens';
import Timer from '../Timer';


import tokens from '../../data/tokens';

import './Main.css';

export default class Main extends PureComponent {
    render() {
        return (
            <main className="main">
                <div className="main__title">
                    <Title size="big">SONM tokens presale</Title>
                </div>
                <div className="main__finish">
                    <Finish>SONM presale has finished</Finish>
                </div>
                <div className="main__wrapper">
                    <div className="main__info">
                        <div className="main__tokens">
                            <Tokens {...tokens} sold={100}/>
                        </div>
                        <div className="main__timer">
                            <Timer 
                                nums={{
                                    days: 30,
                                    hours: 5,
                                    minutes: 24,
                                    seconds: 13
                                }}
                                items={['days', 'hours', 'minutes', 'seconds']}
                            />
                        </div>
                    </div>
                </div>
                <div className="main__faq">
                    <Faq />
                </div>
                <div className="main__ask">
                    <Ask />
                </div>
            </main>
        )
    }
}