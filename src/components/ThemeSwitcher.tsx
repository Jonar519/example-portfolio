'use client';

import { Sun, Moon, Monitor } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'system' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      applyTheme('system');
    }
  }, []);

  const applyTheme = (selectedTheme: 'light' | 'dark' | 'system') => {
    const root = window.document.documentElement;
    
    if (selectedTheme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.toggle('dark', systemTheme === 'dark');
    } else {
      root.classList.toggle('dark', selectedTheme === 'dark');
    }
    
    localStorage.setItem('theme', selectedTheme);
  };

  const handleThemeChange = (selectedTheme: 'light' | 'dark' | 'system') => {
    setTheme(selectedTheme);
    applyTheme(selectedTheme);
  };

  return (
    <div className="flex items-center gap-2 bg-foreground dark:bg-foreground-dark rounded-lg p-1">
      <button 
        onClick={() => handleThemeChange('light')}
        className={`p-2 rounded-md transition-colors ${
          theme === 'light' 
            ? 'bg-background dark:bg-background-dark' 
            : 'hover:bg-background dark:hover:bg-background-dark'
        }`}
      >
        <Sun className="w-4 h-4 text-white" />
      </button>
      <button 
        onClick={() => handleThemeChange('dark')}
        className={`p-2 rounded-md transition-colors ${
          theme === 'dark' 
            ? 'bg-background dark:bg-background-dark' 
            : 'hover:bg-background dark:hover:bg-background-dark'
        }`}
      >
        <Moon className="w-4 h-4 text-white" />
      </button>
      <button 
        onClick={() => handleThemeChange('system')}
        className={`p-2 rounded-md transition-colors ${
          theme === 'system' 
            ? 'bg-background dark:bg-background-dark' 
            : 'hover:bg-background dark:hover:bg-background-dark'
        }`}
      >
        <Monitor className="w-4 h-4 text-white" />
      </button>
    </div>
  );
}