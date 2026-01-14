import { experiences } from '../data/experiences';
import ExperienceCard from './ExperienceCard';

const About = () => {
  return (
    <div id='about' className='pt-24 w-11/12 min-h-screen flex flex-col justify-start items-center'>
      <div className='text-left'>
        <p className='font-mono text-primary'>// History</p>
        <h2 className='font-title text-6xl'>Curriculum</h2>
      </div>
      <p className='text-text text-xl font-sans'>
        De la conduite des trains au développement d'applications.
      </p>
      <section className='w-full h-full flex flex-col items-center gap-12 py-12'>
        {experiences.map(exp => (
          <ExperienceCard
            title={exp.title}
            date={exp.date}
            school={exp.school}
            description={exp.description}
            type={exp.type}
          />
        ))}
      </section>
    </div>
  );
};

export default About;
