import React, {PureComponent} from 'react';
import Title from '../../components/Title';
import Faq from '../../components/Faq';

import './Main.css';

export default class Main extends PureComponent {
    render() {
        return (
            <main className="main">
                <Title size="big">SONM tokens presale</Title>
                <div className="main__faq">
                    <Faq />
                </div>
            </main>
        )
    }
}