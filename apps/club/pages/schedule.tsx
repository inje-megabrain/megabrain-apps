import { Container, Header, ScheduleCalendar, Text } from '@megabrain/ui';
import Footer from '@megabrain/ui/components/Footer/Footer';
import globalMenu from '~/constants/globalMenu';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { backend } from '@megabrain/core';
import { GetStaticProps } from 'next';
import { ScheduleData } from '@megabrain/core/types/schedule';
import { SCHEDULE_REVALIDATE_SECOND } from '~/constants/isr';

interface ScheduleDataProps {
  scheduleData: ScheduleData[];
}

const Schedule: React.FC<ScheduleDataProps> = ({ scheduleData }) => {
  const initialMonthYear = useMemo(() => new Date(), []);
  const [monthYear, setMonthYear] = useState<Date>(initialMonthYear);
  const [changeableData, setChangableData] = useState<ScheduleData[]>(scheduleData);

  const callAPI = useCallback(async () => {
    const data = await backend.schedule.event(monthYear);
    await setChangableData(data);
    console.log(data);
  }, [monthYear]);

  useEffect(() => {
    if (monthYear !== initialMonthYear) {
      callAPI();
    }
  }, [callAPI, monthYear, initialMonthYear, scheduleData]);

  const router = useRouter();
  return (
    <>
      <Header
        menuItems={globalMenu}
        onHrefClick={(href) => router.push(href)}
      />
      <Text type={'primary'}>Schedule</Text>
      <Container pad>
        <ScheduleCalendar
          scheduleData={changeableData}
          onChange={setMonthYear}
        />
        <Container
          pad
          display={'inline-block'}
        >
          {changeableData.map((data) => {
            return (
              <div key={data.id}>
                <h3>{data.title}</h3>
                <p>
                  from {new Date(data.startDate).getDate()} until {new Date(data.endDate).getDate()}
                </p>
                <h5>assign to {data.assignPeople}</h5>
              </div>
            );
          })}
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps<ScheduleDataProps> = async () => {
  const scheduleData = await backend.schedule.event(new Date());
  return {
    props: { scheduleData },
    revalidate: SCHEDULE_REVALIDATE_SECOND,
  };
};

export default Schedule;
