import { createContext, PropsWithChildren, useContext } from 'react';
import { colors } from '../constants/colors';
import { typography } from '../constants/typography';

type themeType = {
  colors: typeof colors;
  typography: typeof typography;
};

const ThemeContext = createContext<themeType | undefined>(undefined);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeContext.Provider value={{ colors, typography }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider');
  return ctx;
};
