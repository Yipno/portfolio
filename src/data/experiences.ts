export type ExperienceCardProps = {
  title: string;
  date: string;
  school: string;
  description: string;
  competences: string[];
  type?: string;
};

export const experiences: ExperienceCardProps[] = [
  {
    title: "Concepteur d'applications web et mobile",
    date: '2026',
    school: '// La Capsule',
    description: 'RNCP 6 - Certification développement web & mobile full stack',
    competences: [
      'Conception et développement d’applications web & mobile (React, React Native)',
      'Développement backend API REST (Node.js, Express)',
      'Modélisation et exploitation de bases de données (MongoDB, SQL)',
      'Authentification, gestion des rôles et sécurité applicative (JWT)',
      'Déploiement et mise en production',
    ],
  },
  {
    title: 'Conducteur de trains',
    date: '2013',
    school: '// SNCF',
    description: 'Diplome de conducteur de train et license de conducteur européen',
    competences: [
      'Application stricte de procédures de sécurité ferroviaire',
      'Prise de décision rapide sous contraintes opérationnelles',
      'Gestion d’incidents et situations d’urgence',
      'Rigueur, fiabilité et travail en autonomie',
      'Conducteur moniteur',
    ],
  },
  {
    title: 'Opérateur extérieur en raffinage',
    date: '2008',
    school: '// IFP School - ENSPM',
    description: 'Exploitation des unités pétrochimique & sécurité des procédés',
    competences: [
      'Exploitation et supervision de procédés industriels complexes',
      'Respect strict des normes HSE, des procédures de sécurité',
      'Analyse d’incidents et résolution de problèmes techniques',
      'Travail en coordination avec équipes pluridisciplinaires',
      'Culture de la fiabilité et de la prévention des risques',
    ],
  },
];
