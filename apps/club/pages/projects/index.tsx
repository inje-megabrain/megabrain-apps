import { projects } from '@megabrain/toolkit-notion';
import { useEffect } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { PROJECT_REVALIDATE_SECOND } from '~/constants/isr';
import Seo from '~/components/Seo';
import { Container, Header } from '@megabrain/ui';
import globalMenu from '~/constants/globalMenu';
import { useRouter } from 'next/router';
import Footer from '@megabrain/ui/components/Footer/Footer';
import Link from 'next/link';

interface ProjectProps {
  projectsData: {
    id: string;
    properties: {
      android: {
        url: string;
      };
      contact: {
        email: string;
      };
      description: {
        rich_text: { plain_text: string }[];
      };
      ios: {
        url: string;
      };
      developer: {
        people: { avatar_url: string; name: string }[];
      };
      link: {
        url: string;
      };
      platform: {
        multi_select: { name: string; color: string }[];
      };
      status: {
        status: {
          name: string;
          color: string;
        };
      };
      techstack: {
        multi_select: { name: string; color: string }[];
      };
      title: {
        title: { text: { content: string } }[];
      };
    };
  }[];
}
export const getStaticProps: GetStaticProps<ProjectProps> = async () => {
  const projectsData = await projects.listRaw();

  if (!projectsData) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      projectsData: projectsData.results,
    },
    revalidate: PROJECT_REVALIDATE_SECOND,
  };
};

const ProjectPage = ({ projectsData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  useEffect(() => {
    console.log(projectsData);
  }, [projectsData]);
  const router = useRouter();

  return (
    <>
      <Seo templateTitle={'프로젝트'} />
      <Header
        menuItems={globalMenu}
        onHrefClick={(href) => router.push(href)}
      />
      <div style={{ height: '70px' }}></div>
      <Container pad>
        {projectsData.map((project, index) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            style={{
              borderBottom: '1px solid #eee',
              marginBottom: '20px',
            }}
          >
            <h2>{project.properties.title.title[0]?.text.content}</h2>
            <p>{project.properties.platform.multi_select.map((platform) => platform.name)}</p>
            <p>{project.properties.techstack.multi_select.map((tech) => tech.name)}</p>
            <p
              style={{ backgroundColor: project.properties.status.status.color, display: 'inline' }}
            >
              {project.properties.status.status.name}
            </p>
          </Link>
        ))}
      </Container>
      <Footer />
    </>
  );
};

export default ProjectPage;
