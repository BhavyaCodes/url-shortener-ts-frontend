import React, { createContext } from "react";
import useLocalStorageReducer from "./hooks/useLocalStorageReducer";
import themeReducer from "./ThemeReducer";

export const ThemeContext = createContext();
export const DispatchThemeContext = createContext();

export function ThemeModeProvider(props) {
  const [darkMode, setDarkMode] = useLocalStorageReducer(
    "dark-mode",
    "light",
    themeReducer
  );

  return (
    <ThemeContext.Provider value={darkMode}>
      <DispatchThemeContext.Provider value={setDarkMode}>
        {props.children}
      </DispatchThemeContext.Provider>
    </ThemeContext.Provider>
  );
}
