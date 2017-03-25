import { connect } from 'react-redux';
import Transactions from '../../components/Transactions';
import { setTransactionsValue, getTransactions } from '../../ducks/transactions';

const mapStateToProps = state => {
    const { address, loading, loaded, error } = state.transactions;

    return {
        address,
        loading,
        error
    };
};
const mapDispatchToProps = dispatch => ({
    handleAddressChange(e) {
        const address = e.target.value.trim();
        dispatch(setTransactionsValue(address))
    },
    handleFormSubmit: address => e => {
        e.preventDefault();
        if (address && address.length) {
            dispatch(getTransactions(address));
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);