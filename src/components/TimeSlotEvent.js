import React, {PureComponent, PropTypes} from 'react';
import {EVENT_PROP_TYPE} from './constants';

import './TimeSlotEvent.css';

export default class TimeSlotEvent extends PureComponent {
    static propTypes = {
        event: EVENT_PROP_TYPE.isRequired,
        onSelect: PropTypes.func.isRequired,
        day: PropTypes.number.isRequired,
    }

    render() {
        let {
            event: {title, start, hours, color},
            onSelect,
            day,
        } = this.props;

        let eventDay = (new Date(day)).setHours(0, 0, 0, 0);
        let nowDay = (new Date()).setHours(0, 0, 0, 0);
        let eventStatusClass = '';

        if (nowDay > eventDay) {
            eventStatusClass = 'time-slot-event--past';
        } else if (nowDay === eventDay) {
            let startHour = (new Date(start)).getHours();
            let endHour = startHour + hours;
            let currentHour = (new Date()).getHours();
            eventStatusClass = currentHour >= endHour ? 'time-slot-event--past' : '';
        }

        return (
            <button className={`time-slot-event time-slot-event--${color} ${eventStatusClass}`} onClick={onSelect}>
                {title}
            </button>
        );
    }
}
