'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('system');
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  // Función para establecer el tema que también guarda en localStorage
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  useEffect(() => {
    setMounted(true);
    
    // Cargar tema guardado de localStorage solo en el cliente
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setThemeState(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    
    // Remover clases anteriores
    root.classList.remove('light', 'dark');
    
    // Determinar el tema resuelto
    let actualTheme: 'light' | 'dark';
    
    if (theme === 'system') {
      actualTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } else {
      actualTheme = theme;
    }
    
    setResolvedTheme(actualTheme);
    root.classList.add(actualTheme);
    
    // Guardar en localStorage
    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  // Evitar hidratación incorrecta mostrando contenido solo cuando esté montado
  if (!mounted) {
    return (
      <ThemeContext.Provider value={{ theme: 'system', setTheme, resolvedTheme: 'light' }}>
        {children}
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}