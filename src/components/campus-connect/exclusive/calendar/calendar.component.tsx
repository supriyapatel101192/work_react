import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import './calendar.scss';
import tippy, { roundArrow } from 'tippy.js';
import 'tippy.js/animations/scale.css';
import 'tippy.js/themes/light.css';
import 'tippy.js/dist/svg-arrow.css';

export const CalendarDetails: React.FC = () => {
  // const [eventId] = useState('');
  const events = [
    {
      id: '1',
      title: 'Event Now 1 New Data regarding all the Event 1',
      description: 'New Data regarding all the Event 1',
      userName: 'Jeet',
      meetUrl: 'https://wenex-video-sdk.web.app/?name=jeet&meetingId=abc-def&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI1Zjk5ODkzNS00ZmNhLTQ4ZGUtOTJlNy03MzAyMGI1NmQxOGIiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY2NzQxMzM0NiwiZXhwIjoxNjY4MDE4MTQ2fQ.tDQBM3oicr9tNdTJbvI-RZwa6RJDVtMaXCKVyCdfgVs',
      isOrganizer: true,
      attendees: ['jeetjh29@gmail.com'],
      meetOrganizer: 'Jeet',
      start: new Date('2022-11-05T13:00:00.000Z'),
      end: new Date('2022-11-05T14:00:00.000Z'),
    },
    {
      id: '2',
      title: 'Event Now 2 New Data regarding all the Event 2',
      description: 'New Data regarding all the Event 2',
      userName: 'Avinash',
      meetUrl: 'https://wenex-video-sdk.web.app/?name=jeet&meetingId=abc-def&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI1Zjk5ODkzNS00ZmNhLTQ4ZGUtOTJlNy03MzAyMGI1NmQxOGIiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY2NzQxMzM0NiwiZXhwIjoxNjY4MDE4MTQ2fQ.tDQBM3oicr9tNdTJbvI-RZwa6RJDVtMaXCKVyCdfgVs',
      isOrganizer: false,
      attendees: [],
      meetOrganizer: 'Avinash',
      start: new Date('2022-11-07T15:00:00.000Z'),
      end: new Date('2022-11-07T15:30:00.000Z'),
    },
    // {
    //   id: '3',
    //   title: 'Event Now 3',
    //   start: new Date('2022-11-05T18:00:00.000Z'),
    //   end: new Date('2022-11-06T14:00:00.000Z'),
    //   bgColor: 'green',
    // },
    // {
    //   id: '4',
    //   title: 'Event Now 4',
    //   start: new Date('2022-11-07T13:00:00.000Z'),
    //   end: new Date('2022-11-08T14:00:00.000Z'),
    // },
  ];
  // const handleEventTitle = (args: any) => {
  //   tippy(args.el, {
  //     content: `<span style="color:#FFFFFF; font-family:verdana; font-size:14px; font-weight:100">${args.event.title}</span>`,
  //     placement: 'left-start',
  //     allowHTML: true,
  //     arrow: roundArrow,
  //     theme: 'cal-title',
  //   });
  // };

  const handleCalendarEvent = (args: any) => {
    tippy(args.el, {
      // content: `<div style="background-color:powderblue; padding: 20px">${args.event.title}<div>`,
      content: `<div>
      <div style="padding: 10px">
      <div style="padding-top: 10px; padding-bottom: 10px">
      <h4 style="margin: 2; color:#02FAEA; font-family:verdana; font-size:12px; font-weight:200">My calendar</h4>
      </div>
      <div style="padding-top: 2px; padding-bottom: 1px">
      <div style="margin-top: 1px">
              <h3 id="meet-title">${args.event.title}</h3>
          </div>
          <div style="margin-top: 1px;">
              <h4 class="meet-date">9 November 2022</h4>
              <h4 class="meet-time">5:30 pm - 6:00 pm</h4>
          </div>
          <div style="text-align:center; padding-top:15px;">
              <button
              class="meet-button"
              name="button" 
              value="OK" 
              type="button" 
              onclick="window.open('${args.event.extendedProps.meetUrl}', '_blank');">
              <span style="font-size: 14px">Join meeting</span>
              </button>
          </div>
      </div>
          <hr class="meet-hr" />
          <div class="meet-align-center">
              <h4 class="meet-organizer-title">Jeet Jha
              </h4>
              <h4 class="meet-organizer-sub-title">Meeting Organizer</h4>
          </div>
      </div>
  <div>`,
      allowHTML: true,
      placement: 'left-start',
      arrow: roundArrow,
      trigger: 'click',
      theme: 'cal-desc',
      interactive: true,
    });
  };

  return (
    <div className="calendar-container">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today new',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        customButtons={{
          new: {
            text: 'add new',
            click: () => console.log('new event'),
          },
        }}
        editable
        selectable
        events={events}
        eventColor="#091d29"
        nowIndicator
        // dateClick={(e) => console.log(e.dateStr)}
        // eventClick={(e) => handleCalendarEvent(e)}
        stickyFooterScrollbar
        eventMouseEnter={(e) => handleCalendarEvent(e)}
      />
    </div>
  );
};
