import { Github, Linkedin } from 'lucide-react';
const Footer = () => {
  return (
    <div className='z-50 w-full h-24 px-2 bg-bg border-t border-border flex items-center justify-between'>
      <div className='w-1/12 text-2xl items-center'>
        <a
          href='#'
          className='font-bold font-title text-3xl hover:text-primary duration-300 ease-in-out text-text'>
          {'</AG>'}
        </a>
      </div>
      <p className='w-1/2 text-sm font-extralight font-sans text-text/60'>
        Fait main par <strong>Aubry Gamard</strong> <em className='text-xs'>v1.2</em> © 2026 ⚡️{' '}
        <em>Là où on va, on n'a pas besoin de route.</em>
      </p>
      <div className='w-1/12 flex justify-end items-center gap-4 pr-2'>
        <a
          href='https://github.com/Yipno'
          target='blank'
          aria-label='lien vers le profil github'
          className='hover:cursor-pointer hover:text-primary hover:scale-120 ease-in-out duration-300 text-text'>
          <Github className='h-7 w-7' />
        </a>
        <a
          href='https://www.linkedin.com/in/aubry-gamard-1460a728a/'
          target='blank'
          aria-label='lien vers le profil linkedin'
          className='hover:cursor-pointer hover:text-primary hover:scale-120 ease-in-out duration-300 text-text'>
          <Linkedin className='h-7 w-7' />
        </a>
      </div>
    </div>
  );
};

export default Footer;
