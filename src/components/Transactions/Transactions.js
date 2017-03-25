import React, { PropTypes } from 'react';
import Form from '../Form';
import Spin from '../Spin';

import './Transactions.css';

const Transactions = ({ handleFormSubmit, handleAddressChange, address, loading, loaded, error, transactions }) => {
    return (
        <div className="transactions">
            <p className="transactions__title">Enter your Ethereum address used for the deposit to check your SNM tokens balance:</p>
            <div className="transactions__form">
                <Form
                    handleSubmit={handleFormSubmit}
                    handleInputChange={handleAddressChange}
                    address={address}
                    loading={loading}
                />
            </div>
            {
                loading &&
                <div className="transactions__spin">
                    <Spin />
                </div>
            }
            {
                error &&
                <div className="transactions__error">Error. Please, try again later.</div>
            }
            {/*{
                error &&
                <div className="transactions__error">Error</div>
            }

            {
                loaded && transactions && transactions.length &&
                <div className="transactions__table">
                    <Table />
                </div>
            }*/}
        </div>
    )
};

Transactions.propTypes = {
    handleFormSubmit: PropTypes.func,
    handleAddressChange: PropTypes.func,
    address: PropTypes.string,
    loading: PropTypes.bool,
    loaded: PropTypes.bool,
    error: PropTypes.bool,
    transactions: PropTypes.array
};

export default Transactions;