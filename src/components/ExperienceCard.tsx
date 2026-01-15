import type { ExperienceCardProps } from '../data/experiences';

const ExperienceCard = ({
  title,
  date,
  school,
  description,
  competences,
  type,
}: ExperienceCardProps) => {
  return (
    <div className='bg-bg border border-border w-full h-52 rounded-2xl p-5 flex-col justify-between hover:border-primary/50 hover:shadow-[0_0_14px] hover:shadow-primary hover:scale-102 duration-300'>
      <div className='flex justify-between'>
        <h3 className='font-title text-left text-2xl'>{title}</h3>
        <p className='font-title text-2xl'>{date}</p>
      </div>
      <div className='flex flex-col'>
        <p className='-mt-2 mb-2 font-mono text-sm text-primary/80 text-left'>{school}</p>
        <p className='text-left leading-4'>{description}</p>
        {competences && (
          <ul className='mt-1 text-left list-disc list-inside text-sm'>
            {competences.map((comp, index) => (
              <li key={index}>{comp}</li>
            ))}
          </ul>
        )}
      </div>
      <p className='text-right'>{type}</p>
    </div>
  );
};

export default ExperienceCard;
