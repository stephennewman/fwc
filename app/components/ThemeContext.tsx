'use client';

import { createContext, useContext, useEffect, ReactNode } from 'react';

// Fixed to customer's choice: Layout 3 (Bold) + Color 1 (Irish Green)
const THEME = 'irish-green';
const LAYOUT = 'bold';

interface ThemeContextType {
  theme: string;
  layout: string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Set the fixed theme and layout
    document.documentElement.setAttribute('data-theme', THEME);
    document.documentElement.setAttribute('data-layout', LAYOUT);
    // Clear any old localStorage values
    localStorage.removeItem('fwc-theme');
    localStorage.removeItem('fwc-layout');
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: THEME, layout: LAYOUT }}>
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

