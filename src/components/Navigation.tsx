import ToggleTheme from './ToggleTheme';

const navItems = [
  { label: 'Accueil', href: '#' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Projets', href: '#projects' },
  { label: 'A propos', href: '#about' },
  { label: 'Contact', href: '#contact', cta: true },
];

const Navigation = () => {
  return (
    <nav className='sticky top-0 w-full h-20 z-50 flex items-center justify-between border-b border-border bg-background/80 backdrop-blur-md'>
      <div className='pl-4 items-center'>
        <a
          href='#'
          className='font-bold font-title text-3xl hover:text-primary duration-300 ease-in-out'>
          {'<AG>'}
        </a>
      </div>
      <div className='flex items-center'>
        <ul className='flex justify-end items-center gap-4 px-4'>
          {navItems.map(item => (
            <>
              <li key={item.label}>
                <a
                  className={[
                    'font-title text-2xl tracking-wide text-text hover:text-primary duration-300 ease-in-out',
                    item.cta
                      ? 'bg-text text-white px-4 pt-2 pb-1.5 rounded-full hover:bg-primary hover:text-text'
                      : '',
                  ].join(' ')}
                  href={item.href}>
                  {item.label}
                </a>
              </li>
            </>
          ))}
        </ul>
        <ToggleTheme />
      </div>
    </nav>
  );
};

export default Navigation;
