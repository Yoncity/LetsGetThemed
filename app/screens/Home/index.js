import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import _ from './style';
import useTheme from '../../hooks/useTheme';
import Header from '../../components/Header';

export default () => {
  const [theme] = useTheme();
  const style = _(theme);
  return (
    <View style={style.container}>
      <Header theme={theme} title="Home" icon="more-vert" />

      <View
        style={style.floatingContainer}>
        <View style={style.floatingContainerHeader}>
          <Text style={style.floatingContainerTitle}>
            Featured
          </Text>

          <TouchableOpacity>
            <Text
              style={style.floatingContainerSubTitle}>
              See All
            </Text>
          </TouchableOpacity>
        </View>

        <View style={style.floatingContainerButtons}>
          <Text style={style.buttons}>
            Mobile
          </Text>
          <Text style={style.buttons}>
            Laptops
          </Text>
          <Text style={style.buttons}>
            Appliances
          </Text>
          <Text style={style.buttons}>
            Other
          </Text>
        </View>
      </View>

      <View style={style.body}>
        <Text style={style.errorMessage}>
          No Items Found
        </Text>
        <TouchableOpacity>
          <View
            style={[style.buttons, style.retryButton]}>
            <MaterialIcons name="replay" size={24} color={theme.white} />
            <Text style={style.retryText}>Retry</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
