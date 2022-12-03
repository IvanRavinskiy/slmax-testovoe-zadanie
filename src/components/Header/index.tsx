import {Text, View} from 'react-native';
import Left from '../../../assets/RectangleLeft.svg';
import Right from '../../../assets/RectangleRight.svg';
import React, {FC} from 'react';
import {headerStyles} from './styles';

export const Header: FC = () => {
  return (
    <View>
      <Left style={headerStyles.left} />
      <Right style={headerStyles.right} />
      <View style={headerStyles.textContainer}>
        <Text style={headerStyles.text}>Notes</Text>
      </View>
    </View>
  );
};
