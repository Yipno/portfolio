import type { ProjectCardProps } from '../data/projects';
import { Github } from 'lucide-react';

const ProjectCard = ({ image, title, github, description, stack }: ProjectCardProps) => {
  return (
    <div className='border border-border w-110 h-120 rounded-2xl overflow-hidden shadow-md hover:shadow-lg hover:shadow-primary hover:scale-105 duration-300'>
      <img src={image} alt={title} className='w-full h-1/2 object-cover' />
      <div className='h-1/2 flex flex-col justify-start'>
        <div className='h-2/3 text-left px-3 pt-1'>
          <div className='flex justify-between mr-2'>
            <h3 className='text-3xl font-title'>{title}</h3>
            <a
              href={github}
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-primary ease-in-out duration-300'>
              <Github className='pt-1 h-8 w-8' />
            </a>
          </div>
          <p className='text-text text-sm font-sans'>{description}</p>
        </div>
        {stack && (
          <div className='flex flex-wrap gap-2 p-3 font-light'>
            {stack.map(s => (
              <p
                className='font-mono text-xs border border-muted/60 bg-muted/40 px-1 pt-1 pb-0.5 rounded-md text-primary'
                key={s}>
                {s}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
