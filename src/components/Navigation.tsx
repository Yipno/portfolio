import { useState, useEffect } from 'react';
import ToggleTheme from './ToggleTheme';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Accueil', id: 'hero', href: '#' },
  { label: 'Compétences', id: 'skills', href: '#skills' },
  { label: 'Projets', id: 'projects', href: '#projects' },
  { label: 'A propos', id: 'about', href: '#about' },
  { label: 'Contact', id: 'contact', href: '#contact', cta: true },
];

type SectionId = (typeof navItems)[number]['id'];

const Navigation = ({ activeSection }: { activeSection: SectionId }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeLabel, setActiveLabel] = useState<string | null>(null);

  useEffect(() => {
    const currentNav = navItems.find(n => n.id === activeSection);
    setActiveLabel(currentNav?.label ?? '');
  }, [activeSection]);

  const toggleNav = (): void => {
    setIsOpen(!isOpen);
  };
  return (
    <nav
      className={`sticky top-0 w-full h-20 z-50 flex justify-between items-center border-x border-b border-border backdrop-blur-lg duration-300`}>
      <div className='pl-2 items-center w-1/12'>
        <a
          href='#'
          className='font-bold font-title text-3xl hover:text-primary duration-300 ease-in-out text-text'>
          {'<AG>'}
        </a>
      </div>
      <div className='hidden md:flex items-center w-10/12 justify-center md:justify-end'>
        <ul className='flex md:flex-row justify-end items-center gap-4 px-4'>
          {navItems.map(item => {
            const isActive: boolean = activeSection === item.id;

            const base = 'font-title text-2xl tracking-wide duration-300 ease-in-out';
            const activeId = isActive ? 'text-primary' : 'text-text hover:text-primary';
            const cta =
              isActive ?
                'bg-primary text-bg dark:hover:text-white px-4 pt-2 pb-1.5 rounded-full hover:bg-primary hover:text-text'
              : 'bg-text text-bg dark:hover:text-text px-4 pt-2 pb-1.5 rounded-full hover:bg-primary hover:text-text';
            return (
              <li key={item.label}>
                <a className={`${base} ${item.cta ? cta : activeId}`} href={item.href}>
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className='md:hidden flex justify-between w-2/5'>
        <button onClick={toggleNav} aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}>
          {isOpen ?
            <X className='w-8 h-8' />
          : <Menu className='w-8 h-8' />}
        </button>
        {!isOpen && (
          <p className='font-title text-2xl text-primary mr-8 pt-1 pl-2'>{activeLabel}</p>
        )}
        {isOpen && (
          <div className='md:hidden absolute left-0 right-0 top-full border-x border-b border-border bg-surface/80 backdrop-blur-2xl'>
            <ul className='flex flex-col justify-end items-center gap-4 px-4 pb-4 -mt-13'>
              {navItems.map(item => {
                const isActive: boolean = activeSection === item.id;

                const base = 'font-title text-2xl tracking-wide duration-300 ease-in-out';
                const activeId = isActive ? 'text-primary' : 'text-text hover:text-primary';
                const cta =
                  isActive ?
                    'bg-primary text-bg dark:hover:text-white px-4 pt-2 pb-1.5 rounded-full hover:bg-primary hover:text-text'
                  : 'bg-text text-bg dark:hover:text-text px-4 pt-2 pb-1.5 rounded-full hover:bg-primary hover:text-text';
                return (
                  <li key={item.label}>
                    <a
                      className={`${base} ${item.cta ? cta : activeId}`}
                      onClick={toggleNav}
                      href={item.href}>
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      <ToggleTheme />
    </nav>
  );
};

export default Navigation;
