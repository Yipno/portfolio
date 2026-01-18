import { useEffect } from 'react';
import { experiences } from '../data/experiences';
import ExperienceCard from './ExperienceCard';
import { useInView } from 'react-intersection-observer';
import type { SectionId } from '@/App';

const About = ({ setActiveSection }: { setActiveSection: (id: SectionId) => void }) => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView) setActiveSection('about');
  }, [inView, setActiveSection]);

  return (
    <section
      id='about'
      ref={ref}
      className='pt-24 w-full min-h-screen flex flex-col justify-start items-center'>
      <div className='flex justify-center border-y border-border w-full'>
        <div className='text-left bg-surface border-x border-border'>
          <p className='border-b border-border font-mono font-light text-xs text-primary px-1 pt-1 dark:text-shadow-[0_0_14px_rgba(55,210,85,0.5)]'>
            // Curriculum Vitae
          </p>
          <h2 className='font-title text-6xl px-1 pt-1.5 leading-11 bg-surface'>Parcours</h2>
        </div>
      </div>

      <div className='bg-surface mt-4 px-2 border-y border-border w-full flex flex-col md:flex-row gap-2'>
        <div className='bg-bg w-full sm:10/12 md:w-1/2 h-full flex flex-col justify-between mt-2 p-4 text-left border border-border rounded-2xl'>
          <h3 className='mt-1 font-title text-2xl text-center'>
            De la conduite des trains au développement d'applications.
          </h3>
          <div>
            <p className='my-8'>
              Après de nombreuses années dans des environnements techniques exigents, j’ai choisi de
              me reconvertir dans le développement web. Au cours de ces années j'ai acquis rigueur,
              sens des responsabilités et capacité à travailler sous pression, des qualités que
              j’applique aujourd’hui à mes projets techniques. <br />
              <br />
              Le code est rapidement devenu un moyen de créer et de résoudre des problèmes. J’aime
              apprendre de nouvelles technologies, explorer et améliorer continuellement la qualité
              de ce que je produis. Chaque projet est pour moi une occasion de progresser, d’affiner
              mes méthodes et de livrer des solutions fiables et maintenables. <br />
              <br />
              Aujourd’hui, je recherche de nouveaux défis qui me permettront de continuer à évoluer
              en tant que développeur. Qu'il s'agisse d'intégrer une équipe, contribuer à des
              produits utiles ou apporter des solutions à vos problématiques, je souhaite poursuivre
              dans une dynamique d’apprentissage continu et de construction. N'hésitez pas à me
              contacter pour discuter de collaborations potentielles ou d'opportunités de carrière.
            </p>
          </div>
          <a
            href='/cv_aubry_gamard.pdf'
            download
            aria-label='Télécharger mon CV'
            className='w-full h-14 pt-1 mt-5 rounded-full bg-text text-bg font-title tracking-wide text-2xl flex justify-center items-center hover:cursor-pointer hover:text-text hover:bg-primary hover:scale-102 hover:shadow-[0_0_14px] hover:shadow-primary duration-300'>
            Télécharger mon CV
          </a>
        </div>
        <div className='w-full sm:10/12 md:w-1/2 h-full flex flex-col items-center gap-2 py-2 pl-2 border-l border-border'>
          {experiences.map(exp => (
            <ExperienceCard
              key={exp.title}
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
    </section>
  );
};

export default About;
