import Calendar from 'react-calendar';
import { ScheduleData } from '@megabrain/core/types/schedule';
import { Dispatch, SetStateAction } from 'react';
import './calendar.css';

interface CalendarProps {
  scheduleData: ScheduleData[];
  onChange: Dispatch<SetStateAction<Date>>;
}
const ScheduleCalendar: React.FC<CalendarProps> = ({ scheduleData, onChange }) => {
  return (
    <Calendar
      locale={'ko-KR'}
      onActiveStartDateChange={({ activeStartDate }) => onChange(activeStartDate as Date)}
      tileContent={({ date }) =>
        scheduleData.map((event) =>
          new Date(event.startDate).getDate() === date.getDate() ? (
            <div key={event.id}>{event.title}</div>
          ) : null
        )
      }
      showNeighboringMonth={false}
    />
  );
};

export default ScheduleCalendar;
