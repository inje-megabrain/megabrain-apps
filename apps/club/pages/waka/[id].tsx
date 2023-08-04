import { GithubUser, WakaMemberDetail, backend } from '@megabrain/core';
import { Container, Flex } from '@megabrain/ui';
import { GetStaticPaths, GetStaticProps } from 'next';
import { WakaDetail } from '~/components';
import { sortWakaDetail } from '~/components/Waka/utils';
import { WAKA_REVALIDATE_SECOND } from '~/constants/isr';

interface WakaMemberPageProps {
  detail: WakaMemberDetail;
  githubUser: GithubUser;
}

export const WakaMemberPage: React.FC<WakaMemberPageProps> = ({ detail, githubUser }) => {
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
      {detail.editors.length > 0 ? (
        <Container>
          <Flex
            justify="around"
            items="center"
            direction={{
              '@tablet': 'col',
            }}
            css={{
              marginBottom: 25,
              '@tablet': {
                rowGap: 15,
              },
            }}
          >
            <WakaDetail.Abstract detail={detail} />
          </Flex>
          <WakaDetail.TotalDaily detail={detail} />
          <WakaDetail.Editor editors={detail.editors} />
          <WakaDetail.Project projects={detail.projects} />
        </Container>
      ) : null}
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
