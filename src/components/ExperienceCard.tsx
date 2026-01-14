import type { ExperienceCardProps } from '../data/experiences';

const ExperienceCard = ({ title, date, school, description, type }: ExperienceCardProps) => {
  return (
    <div className='border border-border shadow-md w-11/12 h-70 rounded-2xl p-6 flex-col hover:shadow-lg hover:shadow-primary hover:-translate-y-4 duration-300'>
      <div className='flex justify-between'>
        <h3 className='font-title text-3xl'>{title}</h3>
        <p className='font-title text-text text-2xl'>{date}</p>
      </div>
      <p className='text-left'>{school}</p>
      <p>{description}</p>
      <p>{type}</p>
    </div>
  );
};

export default ExperienceCard;
