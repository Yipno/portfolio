import portraitImg from '@/assets/portrait.jpeg';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import type { SectionId } from '@/App';

const Hero = ({ setActiveSection }: { setActiveSection: (id: SectionId) => void }) => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView) setActiveSection('hero');
  }, [inView, setActiveSection]);

  return (
    <>
      <section ref={ref} id='hero' className='py-4 w-full min-h-screen pattern-col'>
        <div className='h-full flex border-y justify-center border-border'>
          <div className='w-1/2 flex flex-col justify-start text-left mt-5.5'>
            <p className='bg-surface font-mono text-primary border-y border-border dark:text-shadow-[0_0_14px_rgba(55,210,85,0.5)]'>
              // Hello World
            </p>
            <h1 className='bg-surface border-b border-border pt-3 pl-2 font-title font-bold text-9xl leading-23'>
              Aubry <br />
              <span className='text-primary dark:text-shadow-[0_0_14px_rgba(55,210,85,0.2)]'>
                Gamard
              </span>
            </h1>
            <div>
              <p className='bg-surface border-b border-border pt-2 pl-2 font-title text-4xl'>
                Développeur web et mobile fullstack*
              </p>
              <div className='w-full h-6 border-b border-border' />
              <p className='bg-surface pt-0.5 pl-2 font-mono text-primary font-light text-xs leading-4 border-b border-border dark:text-shadow-[0_0_14px_rgba(55,210,85,0.5)]'>
                // About Me
              </p>
              <div className='bg-surface pb-1 pl-2 font-sans text-lg border-b border-border leading-6'>
                <p>
                  Je suis passionné par la création d’applications performantes et intuitives.
                  J’aide à transformer des idées en produits numériques réels. Spécialisé en{' '}
                  <strong>React</strong>, <strong>Next.js</strong>, <strong>Node.js</strong>,{' '}
                  <strong>MongoDB</strong>, <strong>TailwindCSS</strong>, et plus encore. Je suis
                  disponible pour des opportunités freelance ou CDI.
                </p>
                <p className='mt-3 -mb-px'>
                  <em className='text-sm font-light'>*junior, en apprentissage continu</em>
                </p>
              </div>
            </div>
          </div>
          <div className='w-1/2 border-l border-border flex'>
            <div className='flex flex-col h-full w-1/6 '>
              <div className='border-border border-b border-r h-12 w-full' />
              <div className='border-border border-r h-112 w-full' />
              <div className='border-border border-t border-r h-12 w-full' />
            </div>

            <div className='flex flex-col w-4/6'>
              <div className='border-border border-b h-12 w-full' />
              <img
                src={portraitImg}
                alt='portrait'
                className='w-full h-112 object-contain p-2 bg-bg'
              />
              <div className='border-border border-t h-12 w-full' />
            </div>

            <div className='flex flex-col w-1/6 h-full '>
              <div className='border-border border-b border-l h-12 w-full' />
              <div className='border-border border-l h-112 w-full' />
              <div className='border-border border-t border-l h-12 w-full' />
            </div>
          </div>
        </div>
        <div className='w-full h-50 border-b border-border flex'>
          <div className='w-[calc(50%+1px)] h-full bg-surface border-r border-border flex flex-col gap-4 p-2'>
            <a
              href='#projects'
              aria-label='Aller aux projets'
              className='w-full h-14 pt-1 rounded-full bg-bg font-title tracking-wide text-2xl border-2 border-text flex justify-center items-center hover:cursor-pointer hover:border-primary hover:text-primary hover:scale-102 hover:shadow-[0_0_14px] hover:shadow-primary duration-300'>
              Voir mes projets
            </a>
            <a
              href='#about'
              aria-label='Voir mon parcours'
              className='w-full h-14 pt-1 rounded-full bg-bg font-title tracking-wide text-2xl border-2 border-text flex justify-center items-center hover:cursor-pointer hover:border-primary hover:text-primary hover:scale-102 hover:shadow-[0_0_14px] hover:shadow-primary duration-300'>
              Voir mon CV
            </a>
            <a
              href='#contact'
              aria-label='Envoyer un message'
              className='w-full h-14 pt-1 rounded-full bg-text text-bg font-title tracking-wide text-2xl flex justify-center items-center hover:text-text hover:cursor-pointer hover:bg-primary hover:scale-102 hover:shadow-[0_0_14px] hover:shadow-primary duration-300'>
              Me contacter
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
