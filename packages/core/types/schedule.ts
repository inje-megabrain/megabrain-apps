export interface ScheduleGetterParams {
  monthYear: Date;
}

export interface ScheduleData {
  id: number;
  title: string;
  startDate: Date;
  endDate: Date;
  assignPeople: string;
}
