import { Github, Linkedin } from 'lucide-react';
const Footer = () => {
  return (
    <div className='z-50 w-full h-25 px-4 bg-bg border-t border-x border-border flex items-center justify-between'>
      <div className='text-2xl items-center'>
        <a
          href='#'
          className='font-bold font-title text-3xl hover:text-primary duration-300 ease-in-out text-text'>
          {'</AG>'}
        </a>
      </div>
      <p className='w-1/2 text-sm font-extralight font-sans text-text/60'>
        Fait main par <strong>Aubry Gamard</strong> <em className='text-xs'>v1.4</em> © 2026 ⚡️{' '}
      </p>
      <div className='flex flex-col justify-end items-start gap-2'>
        <a
          href='https://www.linkedin.com/in/aubry-gamard-1460a728a/'
          target='_blank'
          aria-label='lien vers le profil linkedin'
          className='hover:cursor-pointer hover:text-primary hover:scale-120 ease-in-out duration-300 text-text flex justify-start items-end gap-1'>
          <Linkedin className='hidden md:inline h-7 w-7' /> Linkedin
        </a>
        <a
          href='https://github.com/Yipno'
          target='_blank'
          aria-label='lien vers le profil github'
          className='hover:cursor-pointer hover:text-primary hover:scale-120 ease-in-out duration-300 text-text w-full flex items-end gap-1'>
          <Github className='hidden md:inline h-7 w-7' /> GitHub
        </a>
      </div>
    </div>
  );
};

export default Footer;
