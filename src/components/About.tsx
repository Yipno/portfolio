import { experiences } from '../data/experiences';
import ExperienceCard from './ExperienceCard';

const About = () => {
  return (
    <div
      id='about'
      className='pt-24 w-full min-h-screen flex flex-col justify-start items-center pattern-col'>
      <div className='flex justify-center border-y border-border w-full'>
        <div className='text-left bg-bg border-x border-border'>
          <p className='border-b border-border font-mono font-light text-xs text-primary px-2 pt-1'>
            // Curriculum Vitae
          </p>
          <h2 className='font-title text-6xl px-2 -mb-1.5'>Parcours</h2>
        </div>
      </div>

      <div className='bg-bg mt-4 px-2 border-y border-border w-full flex gap-2'>
        <div className='w-1/2 h-full mt-2 p-4 text-left border border-border rounded-2xl'>
          <p className='bg-bg text-xl font-sans mb-2'>
            De la conduite des trains au développement d'applications.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat fugiat quasi at
            corrupti perferendis cumque accusamus dolore provident veritatis ex! Modi ab quisquam
            adipisci cum nam praesentium at vero impedit! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Voluptatibus doloremque a necessitatibus minus eveniet? Odio, iusto.
            In modi rem molestias ipsum animi nesciunt maxime velit, ad saepe omnis! Dolorem,
            voluptatem? Lorem, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            blanditiis. Dicta, autem. Magni animi aliquam aperiam, aliquid dolore consequatur,
            laborum, nostrum corrupti dolorum consectetur unde iure fugiat soluta sunt veniam!
          </p>
        </div>
        <div className='w-1/2 h-full flex flex-col items-center gap-2 py-2 pl-2 border-l border-border'>
          {experiences.map(exp => (
            <ExperienceCard
              title={exp.title}
              date={exp.date}
              school={exp.school}
              description={exp.description}
              competences={exp.competences}
              type={exp.type}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
