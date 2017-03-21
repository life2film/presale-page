import React, { Component } from 'react';
import { connect } from 'react-redux';

import Main from '../../components/Main';

const mapStateToProps = state => ({
    salesFinished: state.sales.finished
});

export default connect(mapStateToProps, {})(Main);

