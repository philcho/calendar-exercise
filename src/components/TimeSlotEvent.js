import React, {PureComponent, PropTypes} from 'react';
import {EVENT_PROP_TYPE} from './constants';

import './TimeSlotEvent.css';

export default class TimeSlotEvent extends PureComponent {
    static propTypes = {
        event: EVENT_PROP_TYPE.isRequired,
        onSelect: PropTypes.func.isRequired,
    }

    render() {
        let {
            event: {title, start, hours, color},
            onSelect,
        } = this.props;

        let startHour = (new Date(start)).getHours();
        let endHour = startHour + hours;
        let currentHour = (new Date()).getHours();
        let eventStatusClass = currentHour >= endHour ? 'time-slot-event--past' : '';

        return (
            <button className={`time-slot-event time-slot-event--${color} ${eventStatusClass}`} onClick={onSelect}>
                {title}
            </button>
        );
    }
}
