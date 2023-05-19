import { backend } from '@megabrain/core';
import { Button, Header } from '@megabrain/ui';
import { useRouter } from 'next/router';
import Footer from '@megabrain/ui/components/Footer/Footer'; // UI Libs
//import { Clock } from '@megabrain/ui/icons'; // Icon

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Header
        menuItems={[
          {
            label: 'Team',
            href: '/schedule',
            children: [
              { label: 'Schedule', href: '/schedule' },
              { label: 'Members', href: '/members' },
            ],
          },
          {
            label: 'Project',
            href: '/infrastructure',
            children: [
              { label: 'Infrastructure', href: '/infrastructure' },
              { label: 'Apps 3.0', href: '/apps' },
            ],
          },
          {
            label: 'Tech',
            href: '/effort-board',
            children: [
              { label: 'Effort Board', href: '/effort-board' },
              { label: 'Server Health Check', href: '/health-check' },
              { label: 'Codebase', href: '/codebase' },
              { label: 'Member Blog Feed', href: '/blog-feed' },
            ],
          },
          {
            label: 'Recruit',
            href: '/recruit',
          },
        ]}
        onHrefClick={(href) => router.push(href)}
      />
      <h1>메가브레인 클럽</h1>
      <Button onClick={() => backend.systems.ping('hello').then(console.log)}>API 보내보기</Button>
      <Footer />
    </>
  );
}
