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
    <section ref={ref} id='hero' className='md:pt-5.5 w-full min-h-screen px-2 md:px-0'>
      <div className='h-full flex flex-col sm:flex-row md:border-y border-border justify-evenly border-x md:border-x-0'>
        <div className='w-full md:w-1/2 flex flex-col justify-start text-left mt-2 sm:mt-5.5'>
          <div className='flex w-full border-border'>
            <div className='w-1/2 md:w-full border-b md:border-l-0 border-border'>
              <p className='text-xs md:text-base bg-surface font-mono text-primary border-y border-border dark:text-shadow-[0_0_14px_rgba(55,210,85,0.5)]'>
                // Hello World
              </p>
              <h1 className='bg-surface border-b border-border md:pt-3 pl-2 font-title font-bold text-6xl md:text-9xl md:leading-24'>
                Aubry <br className='hidden' />
                <span className='text-primary dark:text-shadow-[0_0_24px_rgba(55,210,85,0.2)]'>
                  Gamard
                </span>
              </h1>

              <p className='bg-surface pt-2 pl-2 font-title text-3xl'>
                Développeur web et mobile fullstack*
              </p>
            </div>
            <div className='w-1/2 md:hidden flex justify-center border-y border-l border-border'>
              <img src={portraitImg} alt='portrait' className='h-full object-cover p-2 bg-bg ' />
            </div>
          </div>
          <div className='w-full h-6 border-b border-border' />
          <p className='bg-surface pt-0.5 pl-2 font-mono text-primary font-light text-xs leading-4 border-b border-border dark:text-shadow-[0_0_14px_rgba(55,210,85,0.5)]'>
            // About Me
          </p>
          <div className='bg-surface pb-1 pl-2 font-sans text-sm md:text-lg border-b border-border sm:leading-6'>
            <p>
              Je suis passionné par la création d’applications performantes et intuitives. J’aide à
              transformer des idées en produits numériques réels. Spécialisé en{' '}
              <strong>React</strong>, <strong>Next.js</strong>, <strong>Node.js</strong>,{' '}
              <strong>MongoDB</strong>, <strong>TailwindCSS</strong>, et plus encore. Je suis
              disponible pour des opportunités freelance ou CDI.
            </p>
            <p className='mt-1.75'>
              <em className='text-sm font-light'>*junior, en apprentissage continu</em>
            </p>
          </div>
        </div>
        <div className='w-1/2 border-l border-border hidden md:flex'>
          <div className='sm:flex flex-col h-full w-1/12 lg:w-1/6 '>
            <div className='border-border border-b border-r h-12 w-full' />
            <div className='border-border border-r h-112 w-full' />
            <div className='border-border border-t border-r h-12 w-full' />
          </div>

          <div className='flex flex-col lg:w-4/6 w-10/12'>
            <div className='border-border border-b h-12 w-full' />
            <img
              src={portraitImg}
              alt='portrait'
              className='w-full h-112 object-cover rounded-2xl p-2 bg-bg'
            />
            <div className='border-border border-t h-12 w-full' />
          </div>

          <div className='sm:flex flex-col lg:w-1/6 w-1/12 h-full '>
            <div className='border-border border-b border-l h-12 w-full' />
            <div className='border-border border-l h-112 w-full' />
            <div className='border-border border-t border-l h-12 w-full' />
          </div>
        </div>
      </div>
      <div className='w-full h-50 border-x md:border-b border-border flex justify-center md:justify-start pt-5.5 md:pt-0'>
        <div className='w-full md:w-[calc(50%+1px)] h-full bg-surface border-b border-t md:border-t-0 md:border-b-0 md:border-r border-border flex flex-col gap-2  p-2'>
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
  );
};

export default Hero;
