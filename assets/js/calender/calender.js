/**
 * Created by anudeeppalanki on 7/7/15.
 *
 * This uses Full Calender library to maintain the calender section
 */
$(document).ready(function() {
    // Calender Javascript
    $('#content #calender').fullCalendar({
        defaultDate: new Date(),
        editable: false,
        googleCalendarApiKey: 'AIzaSyBeiPDzl4NZynytrYAA_mLpoFt3EXTVVu0',
        events: {
            googleCalendarId: 'lho0jgesg477kb4batmfe55dv8@group.calendar.google.com',
            className: 'gcal-event' // an option!
        },
        eventClick: function (event) {
            if(event.url){
                window.open(event.url);
                return false;
            }
        }
    });
});