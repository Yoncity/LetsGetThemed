import {useContext} from 'react';
import {ThemeContext} from '../components/ThemeManager';
import * as AsyncStorage from '../components/AsyncStorage';
import {SETTINGS_KEY} from '../constants/StorageKeys';

export default props => {
  const {theme, toggleTheme} = useContext(ThemeContext);

  const readTheme = async () => {
    const data = await AsyncStorage.retrieveData(SETTINGS_KEY);
    if (data !== null && data !== undefined) {
      toggleTheme(data);
    }
  };

  const updateTheme = async value => {
    await AsyncStorage.storeData(SETTINGS_KEY, value);
    toggleTheme(value);
  };

  return [theme, readTheme, updateTheme];
};
