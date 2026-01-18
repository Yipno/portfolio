import { Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

const ToggleTheme = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') return true;
    if (storedTheme === 'light') return false;
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <button
      onClick={toggleTheme}
      className='p-3 rounded-full hover:bg-text hover:text-bg transition-colors hover:cursor-pointer mr-4 duration-300 ease-in-out'
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
      {isDark ?
        <Sun className='w-8 h-7' />
      : <Moon className='w-8 h-7' />}
    </button>
  );
};

export default ToggleTheme;
