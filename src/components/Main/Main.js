import React, { PropTypes, PureComponent } from 'react';
import Title from '../Title';
import Faq from '../Faq';
import Ask from '../Ask';
import Finish from '../Finish';
// import Tokens from '../Tokens';
import Tokens from '../../containers/Tokens';

import Address from '../Address';
import Popup from '../Popup';
import Steps from '../Steps';
import Warning from '../Warning';
import Spin from '../Spin';


import Countdown from '../../containers/Countdown';
import Transactions from '../../containers/Transactions';

import address from '../../data/address';
import tokens from '../../data/tokens';
import warning from '../../data/warning';

import './Main.css';

const steps = [
    {
        title: 'Send the desired ETH amount to presale smart contract address',
        component: <Warning {...warning} />
    },
    {
        title: 'After Ethereum transaction confirmation <br /> SNM tokens will be credited to your ETH address',
        component: <Transactions />
    }
]

export default class Main extends PureComponent {
    state = {
        popupVisible: false
    }

    static propTypes = {
        salesFinished: PropTypes.bool,
        termsAccepted: PropTypes.bool,
        balanceLoaded: PropTypes.bool,
        balance: PropTypes.string,
        acceptTerms: PropTypes.func,
        getBalance: PropTypes.func
    }

    togglePopup = () => this.setState({ popupVisible: !this.state.popupVisible })

    onPopupBtnClick = (e) => {
        const { acceptTerms } = this.props;
        e.preventDefault();
        this.togglePopup();
        acceptTerms();
    }

    // componentDidMount() {
    //     const { getBalance, salesFinished } = this.props;
    //     if (!salesFinished) {
    //         getBalance(address);
    //     }
    // }

    render() {
        const { salesFinished, termsAccepted, balanceLoaded, balance } = this.props;
        const { popupVisible } = this.state;
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
                                <Tokens

                                />
                            </div>
                            <div className="main__timer">
                                <Countdown />
                            </div>
                        </div>
                        <div className="main__address">
                            <Address
                                title="SONM Presale smart contract address"
                                text="Show SONM Presale deposit address"
                                onBtnClick={this.togglePopup}
                                termsAccepted={termsAccepted}
                            />
                        </div>
                        {
                            termsAccepted &&
                            <div className="main__steps">
                                <Steps list={steps} />
                            </div>
                        }
                        {
                            !balance
                        }
                    </div>
                }
                <div className="main__faq">
                    <Faq />
                </div>
                <div className="main__ask">
                    <Ask />
                </div>
                {
                    popupVisible &&
                    <div className="main__popup">
                        <Popup
                            onCloseClick={this.togglePopup}
                            onBtnClick={this.onPopupBtnClick}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                        </Popup>
                    </div>
                }
            </main>
        )
    }
}