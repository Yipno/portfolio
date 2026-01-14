import { Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

const ToggleTheme = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'light') {
      setIsDark(false);
      document.documentElement.classList.add('light');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    }
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className='p-2 rounded-lg glass-card hover:bg-primary/10 transition-colors'>
      {isDark ? (
        <Sun className='w-8 h-5 text-foreground' />
      ) : (
        <Moon className='w-8 h-5 text-foreground' />
      )}
    </button>
  );
};

export default ToggleTheme;
