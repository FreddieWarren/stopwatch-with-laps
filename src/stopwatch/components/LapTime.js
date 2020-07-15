import React, { Component, PropTypes } from 'react';
import './LapTime.css';

import timerFormat from '../utils/timerFormat';

class LapTime extends Component {

    static proptTypes = {
        lap: PropTypes.number,
        time: PropTypes.number
    };

    static defaultProps = {
        lap: 0,
        time: 0
    };

    render() {

        const { lap, time } = this.props;

        return (
            <div className="LapTime">
                <span className="LapTime__lap" >{lap}</span>
                <span className="LapTime__time" >{timerFormat(time)}</span>
            </div>
        );
    }
}

export default LapTime;