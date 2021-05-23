import React, {createContext, useState} from 'react';
import {useColorScheme} from 'react-native';
import colors from '../style/colors';

export const ThemeContext = createContext();

const ThemeContextProvider = ({children}) => {
  const isDarkTheme = useColorScheme() === 'dark';

  const [theme, setTheme] = useState(
    isDarkTheme ? colors.dark : colors.default,
  );

  const toggleTheme = value => {
    setTheme(value === 'dark' ? colors.dark : colors.default);
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
