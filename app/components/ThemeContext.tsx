'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type ThemeName = 'irish-green' | 'ocean-blue' | 'coastal-coral' | 'slate-modern' | 'sunset-warm' | 'chicago-bears';
export type LayoutName = 'default' | 'clean' | 'bold' | 'value';

interface ThemeContextType {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  layout: LayoutName;
  setLayout: (layout: LayoutName) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const themes: { id: ThemeName; name: string; description: string }[] = [
  { id: 'irish-green', name: 'Color 1', description: 'Irish Green & Gold' },
  { id: 'ocean-blue', name: 'Color 2', description: 'Ocean Blue & Coral' },
  { id: 'coastal-coral', name: 'Color 3', description: 'Coastal Teal & Pink' },
  { id: 'slate-modern', name: 'Color 4', description: 'Slate & Electric Blue' },
  { id: 'sunset-warm', name: 'Color 5', description: 'Burgundy & Orange' },
  { id: 'chicago-bears', name: 'Color 6', description: 'Chicago Bears 🐻' },
];

export const layouts: { id: LayoutName; name: string; description: string }[] = [
  { id: 'default', name: 'Layout 1', description: 'Original' },
  { id: 'clean', name: 'Layout 2', description: 'Clean & Simple' },
  { id: 'bold', name: 'Layout 3', description: 'Bold & Dynamic' },
  { id: 'value', name: 'Layout 4', description: 'Value & Emotion' },
];

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeName>('irish-green');
  const [layout, setLayout] = useState<LayoutName>('default');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('fwc-theme') as ThemeName;
    const savedLayout = localStorage.getItem('fwc-layout') as LayoutName;
    if (savedTheme && themes.some(t => t.id === savedTheme)) {
      setTheme(savedTheme);
    }
    if (savedLayout && layouts.some(l => l.id === savedLayout)) {
      setLayout(savedLayout);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('fwc-theme', theme);
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme, mounted]);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('fwc-layout', layout);
      document.documentElement.setAttribute('data-layout', layout);
    }
  }, [layout, mounted]);

  // Prevent hydration mismatch
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-layout', layout);
  }, [theme, layout]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, layout, setLayout }}>
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

