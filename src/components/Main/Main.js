import React, { PropTypes, PureComponent } from 'react';
import Title from '../Title';
import Faq from '../Faq';
import Ask from '../Ask';
import Finish from '../Finish';
import Tokens from '../Tokens';
import Countdown from '../../containers/Countdown';

import tokens from '../../data/tokens';

import './Main.css';

export default class Main extends PureComponent {
    static propTypes = {
        salesFinished: PropTypes.bool
    }

    render() {
        const { salesFinished } = this.props;
        return (
            <main className="main">
                <div className="main__title">
                    <Title size="big">SONM tokens presale</Title>
                </div>
                {
                    salesFinished &&
                    <div className="main__finish">
                        <Finish>SONM presale has finished</Finish>
                    </div>
                }
                {
                    !salesFinished &&
                    <div className="main__wrapper">
                        <div className="main__info">
                            <div className="main__tokens">
                                <Tokens {...tokens} sold={100} />
                            </div>
                            <div className="main__timer">
                                <Countdown />
                            </div>
                        </div>
                    </div>
                }
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