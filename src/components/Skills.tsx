import CodeBlock from './CodeBlock';
import { skills } from '../data/skills';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

type SkillsProps = {
  setActiveSection: (id: 'hero' | 'skills' | 'projects' | 'about' | 'contact') => void;
};

const Skills = ({ setActiveSection }: SkillsProps) => {
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
      className='pt-24 w-full min-h-screen flex flex-col items-center pattern-col'>
      <div className='flex justify-center border-y border-border w-full'>
        <div className='text-left bg-surface border-x border-border'>
          <p className='border-b border-border font-mono font-light text-xs text-primary pt-1 px-1 dark:text-shadow-[0_0_14px_rgba(55,210,85,0.3)]'>
            // Stuff I can do
          </p>
          <h2 className='font-title text-6xl px-1 pt-3.5 leading-11 bg-surface'>
            Compétences & Technologies
          </h2>
        </div>
      </div>
      <div className='w-full flex justify-center pt-4'>
        <CodeBlock code={JSON.stringify(skills, null, 2)} />
      </div>
    </section>
  );
};

export default Skills;
