import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Switch} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import _ from './style';

import useTheme from '../../hooks/useTheme';
import Header from '../../components/Header/';

export default props => {
  const [theme, __, updateTheme] = useTheme();
  const style = _(theme);
  const date = new Date().getFullYear();

  const [themeSwitch, setThemeSwitch] = useState(theme.themeName === 'dark');

  const toggleThemeSwitch = status => {
    setThemeSwitch(status);
    if (status) updateTheme('dark');
    else updateTheme('default');
  };

  return (
    <View style={style.container}>
      <Header title="Settings" icon="info" theme={theme} />

      <View style={style.settingsItems}>
        <TouchableOpacity>
          <View
            style={style.itemContainer}>
            <MaterialIcons
              style={style.itemIcon}
              name="style"
              size={24}
              color={theme.contrast}
            />

            <View style={style.itemText}>
              <Text style={style.itemTitle}>
                Dark Theme
              </Text>
              <Text style={style.itemDetails}>
                Use Dark/Night Theme to reduce eye strain
              </Text>
            </View>

            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={true ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleThemeSwitch}
              value={themeSwitch}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={style.itemContainer}>
            <MaterialIcons style={style.itemIcon} name="language" size={24} color={theme.contrast}/>

            <View style={style.itemText}>
              <Text style={style.itemTitle}>
                Language
              </Text>
              <Text style={style.itemDetails}>
                Change the language of this application.
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <View style={style.actionButtonsContainer}>
          <TouchableOpacity>
            <View style={style.actionButtons}>
              <MaterialIcons name="share" size={32} color={theme.contrast} />
              <Text
                style={style.actionButtonsText}>
                Share
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={style.actionBorder}></View>
          <TouchableOpacity>
            <View style={style.actionButtons}>
              <MaterialIcons name="star" size={32} color={theme.contrast} />
              <Text
                style={style.actionButtonsText}>
                Rate
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={style.copyrightInfo}>
        <MaterialIcons name="copyright" size={48} color={theme.text.subtitle} />
        <Text style={style.copyrightInfoText}>
          of Yoncity {date}
        </Text>
      </View>
    </View>
  );
};
