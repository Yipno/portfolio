import ToggleTheme from './ToggleTheme';

const navItems = [
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const Navigation = () => {
  return (
    <nav className='fixed w-full h-20 z-50 flex items-center justify-between border-b border-orange-500 shadow-lg shadow-orange-500/20 px-3 bg-surface'>
      <div className='pl-4 items-center'>
        <a
          href='#'
          className='font-bold font-title text-3xl hover:text-primary duration-300 ease-in-out'>
          {'<dev>'}
        </a>
      </div>
      <div className='flex items-center'>
        <ul className='flex justify-end gap-12 px-4'>
          {navItems.map(item => (
            <li key={item.label}>
              <a
                className='font-medium text-xl text-text hover:text-primary duration-300 ease-in-out'
                href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <ToggleTheme />
      </div>
    </nav>
  );
};

export default Navigation;
