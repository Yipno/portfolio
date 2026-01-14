// import pawconnectImg from '@/assets/projects/pawconnect.png';
// import hackatweetImg from '@/assets/projects/hackatweet.png';
// import cinedbImg from '@/assets/projects/cinedb.png';
import placeholderImg from '@/assets/projects/placeholder.jpg';

export type ProjectCardProps = {
  image: string;
  title: string;
  github: string;
  description: string;
  stack?: string[];
};

export const projects: ProjectCardProps[] = [
  {
    image: placeholderImg,
    title: 'PawConnect',
    github: 'https://github.com/Yipno',
    description:
      'Application mobile de signalement et de coordination pour la protection animale. Les utilisateurs peuvent créer des alertes géolocalisées avec photo, suivies en temps réel par des bénévoles et des structures partenaires via un back-office sécurisé.',
    stack: [
      'React Native',
      'Expo',
      'Redux Toolkit',
      'Node.js',
      'Express',
      'MongoDB',
      'Cloudinary',
      'JWT',
    ],
  },
  {
    image: placeholderImg,
    title: 'Hackatweet',
    github: 'https://github.com/Yipno',
    description:
      'Clone de Twitter réalisé en hackathon. Les utilisateurs peuvent publier des tweets, liker, commenter et suivre un fil en temps réel. Le projet met l’accent sur la rapidité d’exécution et la mise en place d’un feed interactif.',
    stack: [
      'React',
      'Next.js',
      'Node.js',
      'Express',
      'MongoDB',
      'Socket.io',
      'TailwindCSS',
      'Redux Toolkit',
    ],
  },
  {
    image: placeholderImg,
    title: 'CineDB',
    github: 'https://github.com/Yipno',
    description:
      'Application web de découverte de films basée sur l’API TheMovieDB. Recherche, fiches films détaillées, notation et listes de favoris permettent d’explorer et d’organiser son catalogue personnel.',
    stack: ['React', 'Redux Toolkit', 'TheMovieDB API', 'CSS'],
  },
];
