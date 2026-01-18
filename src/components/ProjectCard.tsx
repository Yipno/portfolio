import type { ProjectCardProps } from '../data/projects';
import { Github, SquarePlay, ExternalLink } from 'lucide-react';
// import { useState } from 'react';

const ProjectCard = ({
  image,
  title,
  github,
  video,
  link,
  description,
  stack,
  // isOpen,
}: ProjectCardProps) => {
  // const [isCollapsed, setIsCollapsed] = useState<Boolean>(isOpen);
  return (
    <div
      className='bg-bg border border-border w-full sm:w-2/3 md:w-5/12 lg:w-1/3 h-50 sm:h-120 rounded-2xl 
    overflow-hidden hover:shadow-[0_0_30px] hover:shadow-primary hover:scale-102 duration-300
    flex sm:flex-col'>
      <img src={image} alt={title} className='w-1/3 sm:w-full h-full md:h-1/2 object-cover' />
      <div className='h-full sm:h-1/2 flex flex-col justify-start'>
        <div className='h-2/3 text-left px-3 pt-1'>
          <div className='flex justify-between'>
            <h3 className=' text-2xl sm:text-3xl font-title text-text'>{title}</h3>
            <div className='flex gap-2 justify-end'>
              {video && (
                <div className='relative group'>
                  <a
                    href={video}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={`Vidéo de démonstration de ${title}`}
                    className='hover:text-primary transition-colors text-text'>
                    <SquarePlay className='sm:pt-1 h-7 sm:h-8 w-7 sm:w-8' />
                  </a>

                  {/* Tooltip */}
                  <div
                    className='
                      pointer-events-none absolute right-1 -top-6
                      whitespace-nowrap rounded-md bg-bg border border-border
                      px-2 py-1 text-xs text-text shadow-lg
                      opacity-0 translate-y-1
                      transition-all duration-200
                      group-hover:opacity-100 group-hover:translate-y-0
                    '>
                    Vidéo de démonstration
                  </div>
                </div>
              )}
              {link && (
                <div className='relative group'>
                  <a
                    href={link}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={`Lien vers le projet ${title}`}
                    className='hover:text-primary transition-colors text-text'>
                    <ExternalLink className='sm:pt-1 h-7 sm:h-8 w-7 sm:w-8' />
                  </a>

                  {/* Tooltip */}
                  <div
                    className='
                      pointer-events-none absolute right-1 -top-6
                      whitespace-nowrap rounded-md bg-bg border border-border
                      px-2 py-1 text-xs text-text shadow-lg
                      opacity-0 translate-y-1
                      transition-all duration-200
                      group-hover:opacity-100 group-hover:translate-y-0
                    '>
                    Accéder au projet
                  </div>
                </div>
              )}
              <div className='relative group'>
                <a
                  href={github}
                  target='_blank'
                  aria-label={`repertoire github de ${title}`}
                  rel='noopener noreferrer'
                  className='hover:text-primary ease-in-out duration-300 text-text'>
                  <Github className='sm:pt-1 h-7 sm:h-8 w-7 sm:w-8' />
                </a>
                {/* Tooltip */}
                <div
                  className='
                      pointer-events-none absolute right-1 -top-6
                      whitespace-nowrap rounded-md bg-bg border border-border
                      px-2 py-1 text-xs text-text shadow-lg
                      opacity-0 translate-y-1
                      transition-all duration-200
                      group-hover:opacity-100 group-hover:translate-y-0
                    '>
                  Repertoire GitHub
                </div>
              </div>
            </div>
          </div>
          <p className='text-text text-sm font-sans'>{description}</p>
        </div>
        {stack && (
          <div className='hidden md:flex flex-wrap gap-1 p-1 md:gap-2 md:p-3 font-light'>
            {stack.map(s => (
              <p
                className='font-mono text-xs md:text-xs border border-muted/60 bg-bg px-0.5 rounded-md text-primary'
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
