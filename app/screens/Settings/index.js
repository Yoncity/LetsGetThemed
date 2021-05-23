import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Switch} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import style from './style';

import useTheme from '../../hooks/useTheme';
import Header from '../../components/Header/';

export default props => {
  const [theme, _, updateTheme] = useTheme();
  const date = new Date().getFullYear();

  const [themeSwitch, setThemeSwitch] = useState(theme.themeName === 'dark');
  const toggleThemeSwitch = status => {
    setThemeSwitch(status);
    if (status) updateTheme('dark');
    else updateTheme('default');
  };

  return (
    <View style={[style.container, {backgroundColor: theme.primaryBackground}]}>
      <Header title="Settings" icon="info" theme={theme} />

      <View style={style.settingsItems}>
        <TouchableOpacity>
          <View
            style={[
              style.itemContainer,
              {borderBottomColor: theme.secondaryBackground},
            ]}>
            <MaterialIcons
              style={style.itemIcon}
              name="style"
              size={24}
              color={theme.contrast}
            />

            <View style={style.itemText}>
              <Text style={[style.itemTitle, {color: theme.text.title}]}>
                Dark Theme
              </Text>
              <Text style={[style.itemDetails, {color: theme.text.subtitle}]}>
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
          <View
            style={[
              style.itemContainer,
              {borderBottomColor: theme.borderColor},
            ]}>
            <MaterialIcons style={style.itemIcon} name="language" size={24} />

            <View style={style.itemText}>
              <Text style={[style.itemTitle, {color: theme.text.title}]}>
                Language
              </Text>
              <Text style={[style.itemDetails, {color: theme.text.subtitle}]}>
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
                style={[style.actionButtonsText, {color: theme.text.title}]}>
                Share
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={[
              style.actionBorder,
              {borderRightColor: theme.borderColor},
            ]}></View>
          <TouchableOpacity>
            <View style={style.actionButtons}>
              <MaterialIcons name="star" size={32} color={theme.contrast} />
              <Text
                style={[style.actionButtonsText, {color: theme.text.title}]}>
                Rate
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={style.copyrightInfo}>
        <MaterialIcons name="copyright" size={48} color={theme.text.subtitle} />
        <Text style={[style.copyrightInfoText, {color: theme.text.subtitle}]}>
          of Yoncity {date}
        </Text>
      </View>
    </View>
  );
};
