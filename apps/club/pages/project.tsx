import { Projects, projects } from '@megabrain/toolkit-notion';
import { useEffect } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { PROJECT_REVALIDATE_SECOND } from '~/constants/isr';

interface ProjectProps {
  projectsData: Projects[];
}
export const getStaticProps: GetStaticProps<ProjectProps> = async () => {
  const projectsData = await projects.list();

  if (!projectsData) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      projectsData,
    },
    revalidate: PROJECT_REVALIDATE_SECOND,
  };
};

const ProjectPage = ({ projectsData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  useEffect(() => {
    console.log(projectsData);
  }, [projectsData]);

  return <div></div>;
};

export default ProjectPage;
