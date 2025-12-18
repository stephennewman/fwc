'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type ThemeName = 'irish-green' | 'ocean-blue' | 'coastal-coral' | 'slate-modern' | 'sunset-warm' | 'chicago-bears';

interface ThemeContextType {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const themes: { id: ThemeName; name: string; description: string }[] = [
  { id: 'irish-green', name: 'Homepage 1', description: 'Irish Green & Gold' },
  { id: 'ocean-blue', name: 'Homepage 2', description: 'Ocean Blue & Coral' },
  { id: 'coastal-coral', name: 'Homepage 3', description: 'Coastal Teal & Pink' },
  { id: 'slate-modern', name: 'Homepage 4', description: 'Slate & Electric Blue' },
  { id: 'sunset-warm', name: 'Homepage 5', description: 'Burgundy & Orange' },
  { id: 'chicago-bears', name: 'Homepage 6', description: 'Chicago Bears 🐻' },
];

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeName>('irish-green');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('fwc-theme') as ThemeName;
    if (saved && themes.some(t => t.id === saved)) {
      setTheme(saved);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('fwc-theme', theme);
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme, mounted]);

  // Prevent hydration mismatch
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}

