
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    // Add transition class for smooth theme changes
    setIsChanging(true);
    
    // Apply the theme
    root.classList.add(theme);
    
    // Remove transition class after animation completes
    const timeout = setTimeout(() => {
      setIsChanging(false);
    }, 500);
    
    return () => clearTimeout(timeout);
  }, [theme]);

  // Add transition styles to the document head
  useEffect(() => {
    if (!document.getElementById('theme-transition-style')) {
      const style = document.createElement('style');
      style.id = 'theme-transition-style';
      style.innerHTML = `
        *, *::before, *::after {
          transition: background-color 0.5s ease, border-color 0.5s ease, color 0.5s ease, fill 0.5s ease, stroke 0.5s ease;
        }
      `;
      document.head.appendChild(style);
    }
    
    return () => {
      const style = document.getElementById('theme-transition-style');
      if (style) style.remove();
    };
  }, []);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
