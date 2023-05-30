import { Container, Header, Text } from '@megabrain/ui';
import { useRouter } from 'next/router';
import Footer from '@megabrain/ui/components/Footer/Footer';
import globalMenu from '../constants/globalMenu';
import Seo from '~/components/Seo'; // UI Libs
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
            }}
          >
            인제대학교 컴퓨터공학과의 학술동아리 메가브레인에 오신 것을 환영합니다! 우리는 웹 개발과
            관련된 모든 것을 연구, 개발 및 프로젝트 협력에 전념하는 역동적인 커뮤니티입니다.
            프런트엔드 설계에서 백엔드 구현 및 인프라 관리(CI, CD, K8s)에 이르기까지 디지털 세계의
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
            }}
          >
            메가브레인은 지속적인 학습과 협업을 중요하게 생각합니다. 우리의 창의성, 기술력, 팀워크의
            힘을 결합하여 웹 개발에서 한계를 뛰어 넘습니다. 세미나, 코딩 챌린지, 공동 프로젝트를
            통해 빠르게 변화하는 이 분야에서 앞서 나가는 데 필요한 기술과 지식을 회원들에게
            제공합니다.
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
              padding: '0 1rem',
              fontWeight: '300',
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
