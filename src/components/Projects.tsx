import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <div
      id='projects'
      className='pt-24 w-full min-h-screen flex flex-col justify-start items-center pattern-col'>
      <div className='flex justify-center border-y border-border w-full'>
        <div className='text-left bg-bg border-x border-border '>
          <p className='border-b border-border font-mono font-light text-xs text-primary pt-1 px-1'>
            // Portfolio
          </p>
          <h2 className='font-title text-6xl px-1 -mb-1.5'>Projets</h2>
        </div>
      </div>
      <section className='bg-bg border-y border-border mt-4 w-full flex justify-evenly gap-4 p-2'>
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
          />
        ))}
      </section>
    </div>
  );
};

export default Projects;
