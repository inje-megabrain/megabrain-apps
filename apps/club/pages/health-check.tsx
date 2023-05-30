import { backend } from '@megabrain/core';
import { GetStaticProps } from 'next';
import { ServerHealthResponse } from '@megabrain/core/types/health';
import React, { useEffect } from 'react';
import Seo from '~/components/Seo';
import { Container, Header, Text } from '@megabrain/ui';
import globalMenu from '~/constants/globalMenu';
import { useRouter } from 'next/router';
import Footer from '@megabrain/ui/components/Footer/Footer';

interface HealthProps {
  serverStatus: ServerHealthResponse;
}

export const getServerSideProps: GetStaticProps<HealthProps> = async () => {
  const serverStatus = await backend.serverhealth.server();
  return {
    props: { serverStatus },
  };
};
const ServerHealthCheck: React.FC<HealthProps> = ({ serverStatus }) => {
  useEffect(() => {
    console.log(serverStatus);
  }, [serverStatus]);
  const router = useRouter();
  return (
    <>
      <Seo templateTitle={'서버 상태'} />
      <Header
        menuItems={globalMenu}
        onHrefClick={(href) => router.push(href)}
      />
      <Container pad>
        <Text tag="h1">서버 상태</Text>
        <Container
          display={'grid'}
          css={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
          }}
        >
          {serverStatus?.servers.map((server) => (
            <div key={server.name}>
              <h3>
                {server.name} - {server.status}
              </h3>
              <p>{new Date(server.updatedDate).toLocaleString('ko-kr')}</p>
            </div>
          ))}
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default ServerHealthCheck;
