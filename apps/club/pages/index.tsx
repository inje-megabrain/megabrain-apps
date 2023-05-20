import { Container, Header } from '@megabrain/ui';
import { useRouter } from 'next/router';
import Footer from '@megabrain/ui/components/Footer/Footer';
import globalMenu from '../constants/globalMenu'; // UI Libs
//import { Clock } from '@megabrain/ui/icons'; // Icon

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Header
        menuItems={globalMenu}
        onHrefClick={(href) => router.push(href)}
      />
      <Container
        display={'block'}
        full={'vertical'}
        css={{
          padding: '0 20px',
        }}
      >
        <h1>메가브레인</h1>
        <p>메가브레인은 무엇인가요?</p>
        <p>메가브레인은 무엇을 하나요?</p>
        <p>메가브레인은 어떻게 하나요?</p>
        <p>메가브레인은 어떻게 하면 좋을까요?</p>
        <p>메가브레인은 어떻게 하면 더 좋을까요?</p>
        <p>메가브레인은 어떻게 하면 더 더 좋을까요?</p>
        <p>메가브레인은 어떻게 하면 더 더 더 좋을까요?</p>
        <p>메가브레인은 어떻게 하면 더 더 더 더 좋을까요?</p>
      </Container>
      {/*<Button onClick={() => backend.systems.ping('hello').then(console.log)}>API 보내보기</Button>*/}
      <Footer />
    </>
  );
}
