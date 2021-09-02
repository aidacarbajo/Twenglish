import React from 'react';
import { icons } from '../../assets/theme/styles';
import * as myIcons from './IconsList';
import { Text } from 'react-native';
import { decode } from 'html-entities';


export const Icon = ({icon}) => {
  return (
      <Text style={icons.all}>{decode(myIcons.getIcon(icon))}</Text>
  );
};
