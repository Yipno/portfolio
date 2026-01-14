import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <div
      id='projects'
      className='pt-24 w-11/12 min-h-screen flex flex-col justify-start items-center'>
      <div className='text-left'>
        <p className='font-mono text-primary'>// Portfolio</p>
        <h2 className='font-title text-text text-6xl pb-4'>Projets</h2>
      </div>
      <section className='mt-4 w-full flex justify-evenly gap-4 p-2'>
        {projects.map(p => (
          <ProjectCard
            key={p.title}
            image={p.image}
            github={p.github}
            title={p.title}
            description={p.description}
            stack={p.stack}
          />
        ))}
      </section>
    </div>
  );
};

export default Projects;
