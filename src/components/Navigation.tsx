import ToggleTheme from './ToggleTheme';
// import { useOnInView } from 'react-intersection-observer';

const navItems = [
  { label: 'Accueil', id: 'hero', href: '#' },
  { label: 'Compétences', id: 'skills', href: '#skills' },
  { label: 'Projets', id: 'projects', href: '#projects' },
  { label: 'A propos', id: 'about', href: '#about' },
  { label: 'Contact', id: 'contact', href: '#contact', cta: true },
];

type SectionId = (typeof navItems)[number]['id'];

const Navigation = ({ activeSection }: { activeSection: SectionId }) => {
  return (
    <nav className='sticky top-0 w-full h-20 z-50 flex items-center justify-between border-b border-border backdrop-blur-lg'>
      <div className='pl-4 items-center'>
        <a
          href='#'
          className='font-bold font-title text-3xl hover:text-primary duration-300 ease-in-out text-text'>
          {'<AG>'}
        </a>
      </div>
      <div className='flex items-center'>
        <ul className='flex justify-end items-center gap-4 px-4'>
          {navItems.map(item => {
            const isActive: boolean = activeSection === item.id;

            const base = 'font-title text-2xl tracking-wide duration-300 ease-in-out';
            const activeId = isActive ? 'text-primary' : 'text-text hover:text-primary';
            const cta = isActive
              ? 'bg-primary text-bg dark:hover:text-white px-4 pt-2 pb-1.5 rounded-full hover:bg-primary hover:text-text'
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
        <ToggleTheme />
      </div>
    </nav>
  );
};

export default Navigation;
