'use client';

import { useTheme } from './components/ThemeContext';
import HomeDefault from './components/HomeDefault';
import HomeClean from './components/HomeClean';
import HomeBold from './components/HomeBold';
import HomeValue from './components/HomeValue';

export default function Home() {
  const { layout } = useTheme();

  switch (layout) {
    case 'clean':
      return <HomeClean />;
    case 'bold':
      return <HomeBold />;
    case 'value':
      return <HomeValue />;
    default:
      return <HomeDefault />;
  }
}
