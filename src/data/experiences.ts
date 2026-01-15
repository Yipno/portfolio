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
    description: 'RNCP 6 - Certification professionnelle en développement web & mobile',
    competences: [
      'Développement Frontend et Backend',
      'Gestion de bases de données',
      "Déploiement et maintenance d'applications",
    ],
  },
  {
    title: 'Conducteur de trains',
    date: '2013',
    school: '// SNCF',
    description: 'Diplome de conducteur de train',
    competences: ['Conduite de trains', 'Sécurité ferroviaire', "Gestion des situations d'urgence"],
  },
  {
    title: 'Operateur exterieur en raffinage',
    date: '2008',
    school: '// IFP School - ENSPM',
    description:
      'Exploitation des unités de de pétrochimie & sécurité des procédés industriels de production',
    competences: [
      'Exploitation des unités de raffinage',
      'Contrôle des procédés',
      'Sécurité industrielle',
    ],
  },
];
