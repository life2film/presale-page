import moment from 'moment';

export default (arr, course) => (
    arr.map(item => {
        const MAX_CONFIRMATIONS = 3;
        const date = moment.unix(item.timeStamp).format('DD/MM/YYYY HH:mm');
        const eth = Number((item.value * Math.pow(10, -18)).toFixed());
        const snm = eth * course;
        const confirmed = Number(item.confirmations) > MAX_CONFIRMATIONS;
        return ({ date, eth, snm, confirmed });
    })
);