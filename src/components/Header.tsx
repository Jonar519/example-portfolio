'use client'; // ¡Añade esto en la primera línea!

import LanguageSwitcher from "./LanguageSwitcher";
import { Sun, Moon, Monitor } from "lucide-react";
import { Lang } from "@/app/i18n/config";
import { useTheme } from "@/contexts/ThemeContext";

interface HeaderProps {
  currentLang: Lang;
}

export default function Header({ currentLang }: HeaderProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <div className="fixed top-0 left-0 right-0 z-10 bg-background dark:bg-background-dark border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <LanguageSwitcher currentLang={currentLang} />
        
        {/* Theme Switcher */}
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
      </div>
    </div>
  );
}