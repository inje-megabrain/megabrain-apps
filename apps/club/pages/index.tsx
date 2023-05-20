import { backend } from '@megabrain/core';
import { Button, Header } from '@megabrain/ui';
import { useRouter } from 'next/router';
import Footer from '@megabrain/ui/components/Footer/Footer';
import globalMenu from '../config/globalMenu'; // UI Libs
//import { Clock } from '@megabrain/ui/icons'; // Icon

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Header
        menuItems={globalMenu}
        onHrefClick={(href) => router.push(href)}
      />
      <h1>메가브레인 클럽</h1>
      <Button onClick={() => backend.systems.ping('hello').then(console.log)}>API 보내보기</Button>
      <Footer />
    </>
  );
}
