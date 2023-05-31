import { Container, Header, Text } from '@megabrain/ui';
import { useRouter } from 'next/router';
import Footer from '@megabrain/ui/components/Footer/Footer';
import globalMenu from '../constants/globalMenu';
import Seo from '~/components/Seo';
import { FcCollaboration, FcConferenceCall, FcSearch, FcSerialTasks } from 'react-icons/fc'; // UI Libs
//import { Clock } from '@megabrain/ui/icons'; // Icon

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Seo />
      <Header
        menuItems={globalMenu}
        onHrefClick={(href) => router.push(href)}
      />
      <Container
        display={'block'}
        full={'vertical'}
        css={{
          minHeight: '100vh',
        }}
      >
        <Container
          display={'flex'}
          full={'vertical'}
          css={{
            minHeight: '70vh',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            tag={'h1'}
            full
            align={'center'}
            css={{
              background: 'linear-gradient(90deg, #00F260 0%, #0575E6 100%)',
              backgroundClip: 'text',
              '-webkit-text-fill-color': 'transparent',
              fontSize: '2.4rem',
              '@mobile': {
                fontSize: '1.7rem',
              },
            }}
          >
            웹 개발을 위한 유일한 동아리, <br />
            <b>메가브레인</b>
          </Text>
        </Container>
        <Container
          display={'flex'}
          full={'vertical'}
          css={{
            minHeight: '50vh',
            justifyContent: 'center',
            alignItems: 'center',
            borderTop: '1px solid #eee',
            background: 'linear-gradient(90deg, #4568DC 0%, #B06AB3 100%)',
          }}
        >
          <Text
            tag={'p'}
            full
            align={'center'}
            css={{
              fontSize: '1.5rem',
              maxWidth: '800px',
              padding: '0 1rem',
              wordBreak: 'keep-all',
              color: '#fff',
              '@mobile': {
                textAlign: 'left',
              },
            }}
          >
            인제대학교 컴퓨터공학과 학술동아리 메가브레인에 오신 것을 환영합니다! 우리는 프론트엔드
            설계에서 백엔드 구현 및 인프라 관리(CI, CD, K8s)에 이르기까지 디지털 세계의 무한한
            가능성을 탐구합니다.
          </Text>
        </Container>
        <Container
          display={'flex'}
          full={'vertical'}
          css={{
            minHeight: '50vh',
            justifyContent: 'center',
            alignItems: 'center',
            borderTop: '1px solid #eee',
            flexDirection: 'column',
            padding: '3rem 1rem',
          }}
        >
          <Text
            tag={'p'}
            full
            align={'center'}
            css={{
              fontSize: '1.5rem',
              maxWidth: '800px',
              padding: '1rem 1rem',
              wordBreak: 'keep-all',
              '@mobile': {
                textAlign: 'left',
              },
            }}
          >
            메가브레인은 지속적인 학습과 협업을 중요하게 생각합니다. 창의성과 기술력, 팀워크를
            활용하여 웹 개발에서 지식의 한계를 뛰어 넘습니다. 빠르게 변화하는 이 분야에서 앞서
            나가는 필요한 기술과 지식을 공유합니다.
          </Text>
          <Container
            display={'flex'}
            full={'horizontal'}
            css={{
              justifyContent: 'center',
              alignItems: 'center',
              '@mobile': {
                flexDirection: 'column',
              },
            }}
          >
            <Container
              display={'flex'}
              css={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                margin: '0 1rem',
                '@mobile': {
                  width: '100%',
                  margin: '1rem 0',
                },
              }}
            >
              <FcConferenceCall size={100} />
              <Text tag={'span'}>신입생 대상 세미나</Text>
            </Container>
            <Container
              display={'flex'}
              css={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                margin: '0 1rem',
                '@mobile': {
                  width: '100%',
                  margin: '1rem 0',
                },
              }}
            >
              <FcSerialTasks size={100} />
              <Text tag={'span'}>최신 웹 개발 커리큘럼</Text>
            </Container>
            <Container
              display={'flex'}
              css={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                margin: '0 1rem',
                '@mobile': {
                  width: '100%',
                  margin: '1rem 0',
                },
              }}
            >
              <FcCollaboration size={100} />
              <Text tag={'span'}>협업 프로젝트</Text>
            </Container>
            <Container
              display={'flex'}
              css={{
                alignItems: 'center',
                flexDirection: 'column',
                margin: '0 1rem',
                '@mobile': {
                  width: '100%',
                  margin: '1rem 0',
                },
              }}
            >
              <FcSearch size={100} />
              <Text tag={'span'}>최신 기술 연구</Text>
            </Container>
          </Container>
        </Container>
        <Container
          display={'flex'}
          full={'vertical'}
          css={{
            minHeight: '50vh',
            justifyContent: 'center',
            alignItems: 'center',
            borderTop: '1px solid #eee',
            background: 'linear-gradient(90deg, #e65c00 0%, #F9D423 100%)',
            color: '#fff',
          }}
        >
          <Text
            tag={'p'}
            full
            align={'center'}
            css={{
              fontSize: '1.5rem',
              maxWidth: '800px',
              padding: '3rem 1rem',
              wordBreak: 'keep-all',
              '@mobile': {
                textAlign: 'left',
              },
            }}
          >
            웹 개발에 관심이 있으신가요? 그렇다면 메가브레인에 가입하세요. 우리 동아리는 웹 개발에
            대한 지식과 기술을 공유하고, 함께 성장하는 것을 목표로 합니다. 웹사이트에서 동아리에
            대한 자세한 정보를 확인하세요.
          </Text>
        </Container>
      </Container>
      <Footer />
    </>
  );
}
