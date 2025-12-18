'use client';

import { useTheme, themes, layouts, ThemeName, LayoutName } from './ThemeContext';
import { Palette, Layout } from 'lucide-react';

const themeColors: Record<ThemeName, { bg: string; accent: string }> = {
  'irish-green': { bg: 'bg-green-700', accent: 'bg-yellow-500' },
  'ocean-blue': { bg: 'bg-sky-800', accent: 'bg-orange-500' },
  'coastal-coral': { bg: 'bg-teal-600', accent: 'bg-pink-400' },
  'slate-modern': { bg: 'bg-slate-700', accent: 'bg-blue-500' },
  'sunset-warm': { bg: 'bg-red-900', accent: 'bg-orange-500' },
  'chicago-bears': { bg: 'bg-[#0B162A]', accent: 'bg-[#C83803]' },
};

const layoutIcons: Record<LayoutName, string> = {
  'default': '◈',
  'clean': '◇',
  'bold': '◆',
  'value': '♥',
};

export default function ThemeSwitcher() {
  const { theme, setTheme, layout, setLayout } = useTheme();

  return (
    <div className="border-t border-white/20 pt-6 mt-6 space-y-6">
      {/* Layout Switcher */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Layout className="w-4 h-4 text-white/60" />
          <span className="text-sm text-white/60 font-medium">Layout Style</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {layouts.map((l) => (
            <button
              key={l.id}
              onClick={() => {
                setLayout(l.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`group relative flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm transition-all ${
                layout === l.id
                  ? 'bg-white text-slate-900 font-semibold shadow-lg'
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
            >
              <span className="text-lg">{layoutIcons[l.id]}</span>
              <div className="text-left">
                <span className="block">{l.name}</span>
                <span className={`block text-xs ${layout === l.id ? 'text-slate-500' : 'text-white/50'}`}>
                  {l.description}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Color Switcher */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Palette className="w-4 h-4 text-white/60" />
          <span className="text-sm text-white/60 font-medium">Color Palette</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setTheme(t.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`group relative flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all ${
                theme === t.id
                  ? 'bg-white text-slate-900 font-medium'
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
            >
              {/* Color preview dots */}
              <span className="flex gap-0.5">
                <span className={`w-3 h-3 rounded-full ${themeColors[t.id].bg}`} />
                <span className={`w-3 h-3 rounded-full ${themeColors[t.id].accent}`} />
              </span>
              <span>{t.name}</span>
              
              {/* Tooltip */}
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                {t.description}
              </span>
            </button>
          ))}
        </div>
      </div>

      <p className="text-xs text-white/40">
        Mix and match layouts with color palettes. Changes are saved locally.
      </p>
    </div>
  );
}
