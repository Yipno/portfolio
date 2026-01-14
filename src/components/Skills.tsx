import CodeBlock from './CodeBlock';
import { skills } from '../data/skills';

const Skills = () => {
  return (
    <div id='skills' className='pt-24 w-11/12 min-h-screen flex flex-col items-center'>
      <div className='text-left'>
        <p className='font-mono text-primary'>// Stuff I can do</p>
        <h2 className='font-title text-6xl pb-4'>Compétences & Technologies</h2>
      </div>
      <CodeBlock code={JSON.stringify(skills, null, 2)} />
    </div>
  );
};

export default Skills;

// <section className='w-8/12 border rounded-2xl overflow-hidden'>
//         <div className='w-full p-3 flex justify-start bg-black'>
//           <div className='flex justify-evenly items-center gap-2'>
//             <div className='rounded-full bg-red-400 w-4 h-4'></div>
//             <div className='rounded-full bg-yellow-300 w-4 h-4'></div>
//             <div className='rounded-full bg-green-400 w-4 h-4'></div>
//           </div>
//           <p className='font-mono text-sm text-bg ml-12'>skills.json</p>
//         </div>
//         <div className='w-full p-4 h-80 bg-[#0a2936] text-left'>
//           <div className='p-6 font-mono text-sm'></div>
