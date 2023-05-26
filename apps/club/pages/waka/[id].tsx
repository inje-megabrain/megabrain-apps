import { GetStaticPaths, GetStaticProps } from 'next';
import { WakaMemberDetail, backend } from '@megabrain/core';
import { WAKA_REVALIDATE_SECOND } from '~/constants/isr';
import { Container } from '@megabrain/ui';
import { WakaDetail } from '~/components';

interface WakaMemberPageProps extends WakaMemberDetail {}

export const WakaMemberPage: React.FC<WakaMemberPageProps> = ({
  name,
  editors,
  projects,
  // languages,
}) => {
  return (
    <Container layoutCenter>
      {name}
      <WakaDetail.DataOS
        projects={projects}
        editors={editors}
      />
    </Container>
  );
};

export default WakaMemberPage;

export const getStaticProps: GetStaticProps<WakaMemberPageProps> = async (ctx) => {
  const memberId = ctx.params?.id as string;
  const detail = await backend.wakas.detail({
    id: memberId,
    date: 7,
  });
  console.log(detail);
  return {
    props: detail,
    revalidate: WAKA_REVALIDATE_SECOND,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const members = await backend.wakas.members();

  const paths = members.map((m) => ({
    params: { id: m.id },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};
