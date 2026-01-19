import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import type { SectionId } from '@/App';

const Projects = ({ setActiveSection }: { setActiveSection: (id: SectionId) => void }) => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  useEffect(() => {
    if (inView) setActiveSection('projects');
  }, [inView, setActiveSection]);
  return (
    <section
      id='projects'
      ref={ref}
      className='pt-24 w-full min-h-screen flex flex-col justify-start items-center'>
      <div className='flex justify-center border-y border-border w-full'>
        <div className='text-left bg-surface border-x border-border '>
          <p className='border-b border-border commentary-text dark:text-glow'>// Portfolio</p>
          <h2 className='font-title text-6xl px-1 bg-surface pt-1.5 leading-11'>Projets</h2>
        </div>
      </div>
      <div className='bg-surface border-y border-border mt-4 w-full flex md:flex-wrap lg:flex-nowrap flex-col md:flex-row justify-center sm:justify-evenly gap-2 p-2'>
        {projects.map(p => (
          <ProjectCard
            key={p.title}
            image={p.image}
            github={p.github}
            video={p.video}
            link={p.link}
            title={p.title}
            description={p.description}
            stack={p.stack}
            // isOpen={isOpen}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
