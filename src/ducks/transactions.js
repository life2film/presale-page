const initialState = {
    address: null,
    list: null,
    loading: false,
    loaded: false,
    error: false
};

export const SET_TRANSACTIONS_ADDRESS = 'SET_TRANSACTIONS_ADDRESS';
export const TRANSACTIONS_PENDING = 'TRANSACTIONS_PENDING';
export const TRANSACTIONS_FULLFILLED = 'TRANSACTIONS_FULLFILLED';
export const TRANSACTIONS_REJECTED = 'TRANSACTIONS_REJECTED';

export const setTransactionsValue = address => ({
    type: SET_TRANSACTIONS_ADDRESS,
    payload: {
        address
    }
});
export const getTransactionsRequest = () => ({ type: TRANSACTIONS_PENDING });
export const transactionsFullfilled = list => ({
    type: TRANSACTIONS_FULLFILLED,
    payload: {
        list
    }
});
export const transactionsRejected = () => ({ type: TRANSACTIONS_REJECTED });

export const getTransactions = address => dispatch => {
    dispatch(getTransactionsRequest());
    /**TODO - запилить реально АПИ, пока мок */
    const request = new Promise((resolve, reject) => {
        setTimeout(() => reject(), 2000);
    });

    request
        .then(res => {
            dispatch(transactionsFullfilled(res));
        })
        .catch(err => {
            dispatch(transactionsRejected());
        })
};

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_TRANSACTIONS_ADDRESS:
            return {
                ...state,
                ...payload
            }
        case TRANSACTIONS_PENDING:
            return {
                ...state,
                loaded: false,
                loading: true,
                error: false
            }
        case TRANSACTIONS_FULLFILLED:
            return {
                ...state,
                loading: false,
                loaded: true,
                ...payload
            }
        case TRANSACTIONS_REJECTED:
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state
    }
};