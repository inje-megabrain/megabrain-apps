import { GetStaticProps } from 'next';
import { WakaMember, backend } from '@megabrain/core';
import { WAKA_REVALIDATE_SECOND } from '~/constants/isr';
import WakaComposite from '~/components/Waka';
import { useState } from 'react';
import { Button, Container } from '@megabrain/ui';

interface WakaProps {
  members: WakaMember[];
}

const Waka: React.FC<WakaProps> = ({ members }) => {
  const [registerVisible, setRegisterVisible] = useState(false);
  const handleRegisterModalOpen = () => setRegisterVisible(true);
  const handleRegisterModalClose = () => setRegisterVisible(false);
  return (
    <>
      <Container gravity="horizontal">
        <Button
          pad
          type="contained"
          onClick={handleRegisterModalOpen}
        >
          등록
        </Button>
      </Container>
      <WakaComposite>
        <WakaComposite.MemberList members={members} />
      </WakaComposite>
      {registerVisible && (
        <WakaComposite.RegisterModal
          open={registerVisible}
          close={handleRegisterModalClose}
        />
      )}
    </>
  );
};

export const getStaticProps: GetStaticProps<WakaProps> = async () => {
  const members = await backend.wakas.members();
  return {
    props: {
      members,
    },
    revalidate: WAKA_REVALIDATE_SECOND,
  };
};

export default Waka;
