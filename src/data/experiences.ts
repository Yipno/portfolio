export type ExperienceCardProps = {
  title: string;
  date: string;
  school: string;
  description: string;
  type: string;
};

export const experiences: ExperienceCardProps[] = [
  {
    title: "Concepteur & Développeur d'applications web et mobile full stack",
    date: '2026',
    school: 'La Capsule',
    description:
      'RNCP 6 - Certification professionnelle niveau Bac+3/4 en développement web, mobile et transformation digitale',
    type: 'Certification',
  },
  {
    title: 'Conducteur de trains',
    date: '2013',
    school: 'SNCF',
    description: 'Diplome de conducteur de train',
    type: 'Certification',
  },
  {
    title: 'Operateur exterieur en raffinage',
    date: '2008',
    school: 'IFP School - ENSPM',
    description:
      'Certification professionnelle niveau Bac+3/4 en développement web, mobile et transformation digitale',
    type: 'Certification',
  },
];
