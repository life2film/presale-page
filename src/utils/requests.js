import axios from 'axios';

const API_KEY = 'X6S8AYMKNU47DEYGKII5TRXUTZC342W35Y';
const ETHERSCAN_URL = 'https://api.etherscan.io/api';

export const balanceRequest = address => (
    axios.get(ETHERSCAN_URL, {
        params: {
            module: 'stats',
            action: 'tokensupply',
            contractaddress: address,
            apikey: API_KEY
        }
    })
);

export const transactionsRequest = address => (
    axios.get(ETHERSCAN_URL, {
        params: {
            module: 'account',
            action: 'txlist',
            address,
            startblock: 0,
            endblock: 99999999,
            sort: 'asc',
            apikey: API_KEY
        }
    })
)
