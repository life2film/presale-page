import { BALANCE_FULLFILLED } from '../ducks/balance';
import { finishSales } from '../ducks/sales';
import tokens from '../data/tokens';

export default store => next => action => {
    const { type } = action;
    const { dispatch } = store;
    if (type === BALANCE_FULLFILLED) {
        const { payload: { balance } } = action;
        const { max } = tokens;
        if (String(balance) === String(max)) {
            dispatch(finishSales());
        }
    }
    return next(action);
};