import { connect } from 'react-redux';
import { acceptTerms } from '../../ducks/terms';

import Main from '../../components/Main';

const mapStateToProps = state => {
    const { accepted: termsAccepted } = state.terms;
    const { finished: salesFinished } = state.sales;

    return { salesFinished, termsAccepted };
};

const mapDispatchToProps = {
    acceptTerms
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

