import CodeBlock from './CodeBlock';
import { skills } from '../data/skills';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import type { SectionId } from '@/App';

const Skills = ({ setActiveSection }: { setActiveSection: (id: SectionId) => void }) => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView) setActiveSection('skills');
  }, [inView, setActiveSection]);

  return (
    <section
      id='skills'
      ref={ref}
      className='pt-24 w-full min-h-screen flex flex-col items-center '>
      <div className='flex justify-center border-y border-border w-full'>
        <div className='bg-surface border-x border-border'>
          <p className='text-left border-b border-border font-mono font-light text-xs text-primary pt-1 px-1 dark:text-glow'>
            // Stuff I can do
          </p>
          <h2 className='text-center font-title text-6xl px-1 pt-3.5 leading-11 bg-surface'>
            Compétences &<br />
            Technologies
          </h2>
        </div>
      </div>
      <div className='w-full px-2 flex justify-center pt-4'>
        <CodeBlock code={JSON.stringify(skills, null, 2)} />
      </div>
    </section>
  );
};

export default Skills;
