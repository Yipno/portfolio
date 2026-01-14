import { Github, Linkedin } from 'lucide-react';
const Footer = () => {
  return (
    <div className='w-full h-24 px-3 bg-surface border-t flex items-center justify-between inset-shadow-xl'>
      <div className='w-1/12 text-2xl items-center'>
        <a
          href='/'
          className='font-bold font-title text-3xl hover:text-primary duration-300 ease-in-out'>
          {'</dev>'}
        </a>
      </div>
      <p className='text-text text-sm font-extralight font-sans'>
        Fait main par <strong>Aubry Gamard</strong> © 2026 ⚡️{' '}
        <em>Là où on va, on n'a pas besoin de route.</em>
      </p>
      <div className='w-1/12 flex justify-evenly items-center '>
        <a
          href='https://github.com/Yipno'
          target='blank'
          className='hover:cursor-pointer hover:text-primary hover:scale-120 ease-in-out duration-300'>
          <Github className='h-7 w-7' />
        </a>
        <a
          href='https://www.linkedin.com/in/aubry-gamard-1460a728a/'
          target='blank'
          className='hover:cursor-pointer hover:text-primary hover:scale-120 ease-in-out duration-300'>
          <Linkedin className='h-7 w-7' />
        </a>
      </div>
    </div>
  );
};

export default Footer;
