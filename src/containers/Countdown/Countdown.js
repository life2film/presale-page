import React, { PropTypes, PureComponent } from 'react';
import Timer from '../../components/Timer';
import moment from 'moment';
import { connect } from 'react-redux'
import { finishSales } from '../../ducks/sales';
import deadline from '../../data/deadline';

const units = ['days', 'hours', 'minutes', 'seconds'];

const TICK = 1000;

const mapStateToProps = state => ({
    salesFinished: state.sales.finished
});


class Countdown extends PureComponent {
    static propTypes = {
        salesFinished: PropTypes.bool,
        finishSales: PropTypes.func
    }

    state = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    }

    isDeadlineExpired = (date) => {
        const now = moment();
        const parsedDate = moment(date, 'DD-MM-YYYY HH:mm:ss');
        return parsedDate.isBefore(now);
    }

    countDiff = (date) => {
        const { finishSales } = this.props;
        const { timer } = this.state;
        const now = moment();
        const parsedDate = moment(date, 'DD-MM-YYYY HH:mm:ss');

        if (this.isDeadlineExpired(date)) {
            clearInterval(timer);
            finishSales();
        } else {
            const diff = parsedDate.diff(now);
            const duration = moment.duration(diff, 'milliseconds');
            this.setState({
                days: Math.floor(duration.asDays()),
                hours: duration.hours(),
                minutes: duration.minutes(),
                seconds: duration.seconds()
            });
        }
    }

    componentDidMount() {
        const { finishSales } = this.props;

        if (this.isDeadlineExpired(deadline)) {
            finishSales();
        } else {
            this.countDiff(deadline);
            const timer = setInterval(() => this.countDiff(deadline), TICK);
            this.setState({ timer });
        }
    }

    render() {
        return (
            <Timer
                {...this.state}
                units={units}
            />
        );
    }
}

export default connect(
    mapStateToProps,
    { finishSales }
)(Countdown);