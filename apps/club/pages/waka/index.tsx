import { WakaMember, WakaPeriod, backend } from '@megabrain/core';
import { Button, Container, Text } from '@megabrain/ui';
import { GetStaticProps } from 'next';
import { useState } from 'react';
import { WakaPreview } from '~/components/Waka';
import { WAKA_REVALIDATE_SECOND } from '~/constants/isr';

const TIME_UNDER_BOUNDARY = {
  limit: 600,
  period: WakaPeriod.Seven,
};

interface WakaProps {
  members: WakaMember[];
  lastUpdate: number;
}

const kor = Intl.DateTimeFormat('ko', { dateStyle: 'long', timeStyle: 'short' });

const Waka: React.FC<WakaProps> = ({ members, lastUpdate }) => {
  const [registerVisible, setRegisterVisible] = useState(false);
  const handleRegisterModalOpen = () => setRegisterVisible(true);
  const handleRegisterModalClose = () => setRegisterVisible(false);
  return (
    <Container css={{ marginTop: 20 }}>
      <Container gravity="horizontal">
        <Button
          pad
          type="contained"
          css={{
            marginBottom: '20px',
          }}
          onClick={handleRegisterModalOpen}
        >
          등록
        </Button>
      </Container>
      <Text
        tag="p"
        align="center"
      >
        마지막 업데이트 {kor.format(lastUpdate)}
      </Text>
      <WakaPreview>
        <WakaPreview.MemberList members={members} />
      </WakaPreview>
      <Text
        tag="h1"
        align="center"
      >
        근무시간 미달자
      </Text>
      <WakaPreview.PureList
        members={members.filter((m) => m[WakaPeriod.Seven] < TIME_UNDER_BOUNDARY.limit)}
        additional={TIME_UNDER_BOUNDARY}
      />
      {registerVisible && (
        <WakaPreview.RegisterModal
          open={registerVisible}
          close={handleRegisterModalClose}
        />
      )}
    </Container>
  );
};

export const getStaticProps: GetStaticProps<WakaProps> = async () => {
  try {
    await backend.wakas.updateTime(7);
  } catch {
    console.log('ISR API ERROR');
  }

  const members = await backend.wakas.members();
  return {
    props: {
      members,
      lastUpdate: new Date().valueOf(),
    },
    revalidate: WAKA_REVALIDATE_SECOND,
  };
};

export default Waka;
