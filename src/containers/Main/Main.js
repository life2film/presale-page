import React, {PureComponent} from 'react';
import Title from '../../components/Title';
import Faq from '../../components/Faq';
import Ask from '../../components/Ask';


import './Main.css';

export default class Main extends PureComponent {
    render() {
        return (
            <main className="main">
                <div className="main__title">
                    <Title size="big">SONM tokens presale</Title>
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