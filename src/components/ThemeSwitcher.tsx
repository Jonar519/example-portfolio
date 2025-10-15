'use client';

import { useTheme } from "@/contexts/ThemeContext";
import { Sun, Moon, Monitor } from "lucide-react";

export default function ThemeSwitcher() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <div className="flex items-center gap-1 bg-foreground dark:bg-foreground-dark rounded-lg p-1">
      <button
        onClick={() => setTheme('light')}
        className={`p-1 sm:p-2 rounded-md transition-colors ${
          theme === 'light' 
            ? 'bg-background dark:bg-background-dark' 
            : 'hover:bg-background dark:hover:bg-background-dark'
        }`}
        title="Light mode"
      >
        <Sun className={`w-3 h-3 sm:w-4 sm:h-4 ${
          theme === 'light' ? 'text-yellow-500' : 'text-white'
        }`} />
      </button>
      
      <button
        onClick={() => setTheme('dark')}
        className={`p-1 sm:p-2 rounded-md transition-colors ${
          theme === 'dark' 
            ? 'bg-background dark:bg-background-dark' 
            : 'hover:bg-background dark:hover:bg-background-dark'
        }`}
        title="Dark mode"
      >
        <Moon className={`w-3 h-3 sm:w-4 sm:h-4 ${
          theme === 'dark' ? 'text-blue-400' : 'text-white'
        }`} />
      </button>
      
      <button
        onClick={() => setTheme('system')}
        className={`p-1 sm:p-2 rounded-md transition-colors ${
          theme === 'system' 
            ? 'bg-background dark:bg-background-dark' 
            : 'hover:bg-background dark:hover:bg-background-dark'
        }`}
        title="System preference"
      >
        <Monitor className={`w-3 h-3 sm:w-4 sm:h-4 ${
          theme === 'system' ? 'text-green-400' : 'text-white'
        }`} />
      </button>
    </div>
  );
}