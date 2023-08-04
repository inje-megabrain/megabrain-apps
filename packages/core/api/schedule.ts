import { createEndpoint } from './base';
import { ScheduleData } from '../types/schedule';

export const getSchedule = createEndpoint<ScheduleData[], Date>(
  'GET',
  (monthYear) =>
    `${global.core.SCHEDULE_BASE_URL}/${
      monthYear.getMonth() + 1
    }?startYear=${monthYear.getFullYear()}`,
  { mirror: true }
);

const schedule = {
  event: getSchedule,
};

export default schedule;
