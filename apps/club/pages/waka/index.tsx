import { GetStaticProps } from 'next';
import { WakaMember, WakaPeriod, backend } from '@megabrain/core';
import { WAKA_REVALIDATE_SECOND } from '~/constants/isr';
import { WakaPreview } from '~/components/Waka';
import { useState } from 'react';
import { Button, Container, Text } from '@megabrain/ui';

const TIME_UNDER_BOUNDARY = {
  limit: 600,
  period: WakaPeriod.Seven,
};

interface WakaProps {
  members: WakaMember[];
}

const Waka: React.FC<WakaProps> = ({ members }) => {
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
    },
    revalidate: WAKA_REVALIDATE_SECOND,
  };
};

export default Waka;
