import React from 'react';
import './calendar-bar.scss';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { events as eventData } from './events.js';

moment.locale('en-GB');
const localizer = momentLocalizer(moment);
export const CalendarComponent: React.FC = () => (
  <div>
    <div className="ww-event-sidebar">
      <Calendar
        events={eventData}
        step={60}
        defaultView="month"
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        defaultDate={new Date()}
      />
    </div>
  </div>

);
export default CalendarComponent;
