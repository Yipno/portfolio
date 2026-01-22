import pawconnectImg from '@/assets/projects/pawconnect.png';
import hackatweetImg from '@/assets/projects/hackatweet_cp.png';
import cinedbImg from '@/assets/projects/cinedb_cp.png';
// import placeholderImg from '@/assets/projects/placeholder.jpg';

export type ProjectCardProps = {
  image: string;
  title: string;
  github: string;
  video?: string;
  link?: string;
  description: string;
  stack?: string[];
  // isOpen: boolean;
};

export const projects: ProjectCardProps[] = [
  {
    image: pawconnectImg,
    title: 'PawConnect',
    github: 'https://github.com/Yipno',
    video:
      'https://res.cloudinary.com/dourrti76/video/upload/v1767071988/PAWCONNECT_SUB_nifpes.mov',
    description:
      'Application mobile de signalement et de coordination pour la protection animale. Alertes géolocalisées avec photo, suivies en temps réel, backend sécurisé.',
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
    // isOpen: false,
  },
  {
    image: hackatweetImg,
    title: 'Hackatweet',
    github: 'https://github.com/Yipno',
    description:
      'Clone de Twitter réalisé en hackathon. Publication des tweets, like, suppression et suivi du fil en temps réel. Le projet met l’accent sur la rapidité d’exécution et la mise en place d’un feed interactif.',
    stack: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Redux Toolkit'],
    // isOpen: false,
  },
  {
    image: cinedbImg,
    title: 'CineDB',
    github: 'https://github.com/Yipno',
    link: 'https://mymoviz-frontend-five-indol.vercel.app',
    description:
      "Application web basée sur l’API TheMovieDB : recherche, fiches détaillées, système de favoris. Le projet d'étude pour se familiariser avec les appels API et la gestion d’état.",
    stack: ['React', 'Redux Toolkit', 'TheMovieDB API', 'CSS', 'Node.js', 'Express'],
    // isOpen: false,
  },
];
