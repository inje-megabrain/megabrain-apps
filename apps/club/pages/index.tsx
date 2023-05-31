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
            }}
          >
            새로운 웹 개발을 위한 동아리, <br />
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
            background: 'linear-gradient(90deg, #CAC531 0%, #F3F9A7 100%)',
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
              '@mobile': {
                textAlign: 'left',
              },
            }}
          >
            인제대학교 컴퓨터공학과 학술동아리 메가브레인에 오신 것을 환영합니다! 우리는 웹 개발과
            관련된 모든 것을 연구, 개발 및 프로젝트 협력에 전념하는 역동적인 커뮤니티입니다.
            프론트엔드 설계에서 백엔드 구현 및 인프라 관리(CI, CD, K8s)에 이르기까지 디지털 세계의
            무한한 가능성을 탐구하기 위해 존재합니다.
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
            메가브레인은 지속적인 학습과 협업을 중요하게 생각합니다. 우리의 창의성, 기술력, 팀워크의
            힘을 결합하여 웹 개발에서 한계를 뛰어 넘습니다. 빠르게 변화하는 이 분야에서 앞서 나가는
            데 필요한 기술과 지식을 회원들에게 제공합니다.
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
            backgroundColor: '#111',
            color: '#fff',
          }}
        >
          <Text
            tag={'p'}
            full
            align={'center'}
            css={{
              fontSize: '2rem',
              maxWidth: '1200px',
              padding: '3rem 1rem',
              fontWeight: '300',
              wordBreak: 'keep-all',
              '@mobile': {
                textAlign: 'left',
              },
            }}
          >
            함께 웹 개발의 미래를 만들어가는 과정에 참여하세요. 웹사이트를 탐험하여 우리의 성취를
            살펴보고, 재능 있는 회원들의 영감을 주는 이야기를 발견하고, 이 흥미진진한 영역에 놓여
            있는 가능성을 살짝 엿보십시오.
          </Text>
        </Container>
      </Container>
      <Footer />
    </>
  );
}
