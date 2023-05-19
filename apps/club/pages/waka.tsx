import { GetStaticProps } from 'next';
import { WakaMember, backend } from '@megabrain/core';
import { WAKA_REVALIDATE_SECOND } from '~/constants/isr';
import { WakaMemberList } from '~/components';

interface WakaProps {
  members: WakaMember[];
}

const Waka: React.FC<WakaProps> = ({ members }) => {
  return (
    <>
      <WakaMemberList members={members} />
    </>
  );
};

// export const getStaticPaths: GetStaticPaths = async () => {
//   return { paths: [], fallback: 'blocking' };
// };

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
