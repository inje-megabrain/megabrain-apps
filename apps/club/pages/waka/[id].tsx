import { GetStaticPaths, GetStaticProps } from 'next';
import { GithubUser, WakaMemberDetail, backend } from '@megabrain/core';
import { WAKA_REVALIDATE_SECOND } from '~/constants/isr';
import { Container } from '@megabrain/ui';
import { WakaDetail } from '~/components';
import { sortWakaDetail } from '~/components/Waka/utils';

interface WakaMemberPageProps {
  detail: WakaMemberDetail;
  githubUser: GithubUser;
}

export const WakaMemberPage: React.FC<WakaMemberPageProps> = ({
  detail,
  githubUser,
  // languages,
}) => {
  return (
    <Container
      layoutCenter
      css={{
        paddingBottom: '100px',
      }}
    >
      <Container
        css={{
          marginBottom: 40,
        }}
      >
        <WakaDetail.Statusbar
          data={detail}
          githubUser={githubUser}
        />
      </Container>
      <WakaDetail.TotalDaily detail={detail} />
      <WakaDetail.DataOS
        projects={detail.projects}
        editors={detail.editors}
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
  const githubUser = await backend.githubs.user(detail.githubId);
  return {
    props: {
      githubUser,
      detail: sortWakaDetail(detail),
    },
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
