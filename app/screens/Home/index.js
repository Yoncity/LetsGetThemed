import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import style from './style';
import useTheme from '../../hooks/useTheme';
import Header from '../../components/Header';

export default () => {
  const [theme] = useTheme();
  return (
    <View style={[style.container, {backgroundColor: theme.primaryBackground}]}>
      <Header theme={theme} title="Home" icon="more-vert" />

      <View
        style={[
          style.floatingContainer,
          {backgroundColor: theme.secondaryBackground},
        ]}>
        <View style={style.floatingContainerHeader}>
          <Text style={[style.floatingContainerTitle, {color: theme.primary}]}>
            Featured
          </Text>

          <TouchableOpacity>
            <Text
              style={[
                style.floatingContainerSubTitle,
                {color: theme.text.subtitle},
              ]}>
              See All
            </Text>
          </TouchableOpacity>
        </View>

        <View style={[style.floatingContainerButtons]}>
          <Text style={[style.buttons, {backgroundColor: theme.white}]}>
            Mobile
          </Text>
          <Text style={[style.buttons, {backgroundColor: theme.white}]}>
            Laptops
          </Text>
          <Text style={[style.buttons, {backgroundColor: theme.white}]}>
            Appliances
          </Text>
          <Text style={[style.buttons, {backgroundColor: theme.white}]}>
            Other
          </Text>
        </View>
      </View>

      <View style={style.body}>
        <Text style={[style.errorMessage, {color: theme.text.title}]}>
          No Items Found
        </Text>
        <TouchableOpacity>
          <View
            style={[
              style.buttons,
              style.retryButton,
              {backgroundColor: theme.accent},
            ]}>
            <MaterialIcons name="replay" size={24} color={theme.white} />
            <Text style={[style.retryText, {color: theme.white}]}>Retry</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
