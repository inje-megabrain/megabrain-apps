import { GetStaticProps } from 'next';
import { WakaMetadata, backend } from '@megabrain/core';
import { WAKA_REVALIDATE_SECOND } from '~/constants/isr';

interface WakaProps {
  metadata: WakaMetadata[];
}

const Waka: React.FC<WakaProps> = ({}) => {
  return <>hello</>;
};

// export const getStaticPaths: GetStaticPaths = async () => {
//   return { paths: [], fallback: 'blocking' };
// };

export const getStaticProps: GetStaticProps<WakaProps> = async () => {
  const data = await backend.wakas.metadata();

  return {
    props: {
      metadata: data,
    },
    revalidate: WAKA_REVALIDATE_SECOND,
  };
};

export default Waka;
