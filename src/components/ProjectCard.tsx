import type { ProjectCardProps } from '../data/projects';
import { Github, SquarePlay, ExternalLink } from 'lucide-react';

const ProjectCard = ({
  image,
  title,
  github,
  video,
  link,
  description,
  stack,
}: ProjectCardProps) => {
  return (
    <div className='bg-bg border border-border w-110 h-120 rounded-2xl overflow-hidden hover:shadow-[0_0_30px] hover:shadow-primary hover:scale-102 duration-300'>
      <img src={image} alt={title} className='w-full h-1/2 object-cover' />
      <div className='h-1/2 flex flex-col justify-start'>
        <div className='h-2/3 text-left px-3 pt-1'>
          <div className='flex justify-between mr-2'>
            <h3 className='text-3xl font-title text-text'>{title}</h3>
            <div className='flex gap-1 justify-end'>
              {video && (
                <div className='relative group'>
                  <a
                    href={video}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={`Vidéo de démonstration de ${title}`}
                    className='hover:text-primary transition-colors text-text'>
                    <SquarePlay className='pt-1 h-8 w-8' />
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
                    <ExternalLink className='pt-1 h-8 w-8' />
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
                  <Github className='pt-1 h-8 w-8' />
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
          <div className='flex flex-wrap gap-2 p-3 font-light'>
            {stack.map(s => (
              <p
                className='font-mono text-xs border border-muted/60 bg-bg px-1 pt-1 pb-0.5 rounded-md text-primary'
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
