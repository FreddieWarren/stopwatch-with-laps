import React, { PropTypes, Component } from 'react';
import './Timer.css';

import timerFormat from '../utils/timerFormat';

class Timer extends Component {

    static proptTypes = {
        time: PropTypes.number
    };

    static defaultProps = {
        time: 0
    };

    render() {
        const { time } = this.props;

        return (
            <div className="Timer">
                {timerFormat(time)}
            </div>
        );
    }
}

export default Timer;