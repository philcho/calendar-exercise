/**
 * Given a list of events and a date, filter the events down to those that
 * fall on the same day as the date
 * @param {array} events - List of event objects
 * @param {Date} timestamp - The timestamp representing the day to match
 * @returns {array}
 */
export const filterEventsByDay = (events, timestamp) => (
    events.filter(({start}) => (
        new Date(start)).toDateString() === new Date(timestamp).toDateString()
    )
);

/**
 * Given a list of events and an hour number, filter the events down to those that
 * start on the specified hour
 * @param {array} events - List of event objects
 * @param {number} hour - The hour to match (0 - 23)
 * @param {array}
 * @returns {array}
 */
export const filterEventsByHour = (events, hour) => (
    events.filter(({start}) => (
        new Date(start)).getHours() === hour
    )
);

/**
 * Given a numerical timestamp, returns the formatted date string w/o time component
 * @param {number} timestamp - The date to format
 * @returns {string} The formatted date (ex: "Tuesday, April 11, 2017")
 */
export const getDisplayDate = (timestamp) => {
    let date = new Date(timestamp);

    let options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    return date.toLocaleString('en-US', options);
};

/**
 * Given an hour number, returns a display string version
 * @param {number} hour - The hour
 * @returns {string}
 */
export const getDisplayHour = (hour) => {
    let ampm = hour < 12 ? 'AM' : 'PM';
    let hourNum = hour % 12 || 12;

    return hourNum + ampm;
};

/**
 * Given a list of events, returns the event object whose id matches the specified eventId
 * @param {array} events - List of event objects
 * @param {number} eventId - ID of event to find
 * @returns {object}
 */
export const getEventFromEvents = (events, eventId) => (
    events.find(({id}) => id === eventId)
);
