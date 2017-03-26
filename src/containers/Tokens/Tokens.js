import React, { Component } from 'react';
import TokensUI from '../../components/Tokens';
import { connect } from 'react-redux';
import { getBalance } from '../../ducks/balance';

import address from '../../data/address';
import tokens from '../../data/tokens';


const mapStateToProps = state => ({
    balance: state.balance.balance,
    balanceLoaded: state.balance.loaded,
    finished: state.sales.finished
});


class Tokens extends Component {
    componentDidMount() {
        const { getBalance, finished } = this.props;
        if (!finished) {
            getBalance(address);
        }
    }

    render() {
        const { balance, loaded } = this.props;
        return (
            <TokensUI
                {...tokens}
                balance={balance}
            />
        )
    }
}

export default connect(mapStateToProps, { getBalance })(Tokens);