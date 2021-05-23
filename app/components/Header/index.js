import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import style from './style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default ({title, icon, theme}) => {
  return (
    <View style={[style.container, {backgroundColor: theme.primaryBackground}]}>
      <Text style={[style.title, {color: theme.text.title}]}>{title}</Text>
      <TouchableOpacity>
        <MaterialIcons
          style={[style.icon]}
          name={icon}
          size={24}
          color={theme.contrast}
        />
      </TouchableOpacity>
    </View>
  );
};
