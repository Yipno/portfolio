import CodeBlock from './CodeBlock';
import { skills } from '../data/skills';

const Skills = () => {
  return (
    <div id='skills' className='pt-24 w-full min-h-screen flex flex-col items-center pattern-col'>
      <div className='flex justify-center border-y border-border w-full'>
        <div className='text-left bg-bg border-x border-border'>
          <p className='border-b border-border font-mono font-light text-xs text-primary pt-1 px-1'>
            // Stuff I can do
          </p>
          <h2 className='font-title text-6xl pt-2 px-1 -mb-1.5'>Compétences & Technologies</h2>
        </div>
      </div>
      <div className='w-full flex justify-center pt-4'>
        <CodeBlock code={JSON.stringify(skills, null, 2)} />
      </div>
    </div>
  );
};

export default Skills;
