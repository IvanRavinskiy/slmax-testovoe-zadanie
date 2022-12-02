import {Text, TouchableOpacity, View} from 'react-native';
import Icon from '../../../assets/Vector.svg';
import {noteItemStyles} from './styles';
import React, {FC} from 'react';

export const NoteItem: FC = () => {
  return (
    <View style={noteItemStyles.rootContainer}>
      <View style={noteItemStyles.noteContainer}>
        <Text style={noteItemStyles.titleText}>Title</Text>
        <View style={noteItemStyles.verticalLine} />
        <Text style={noteItemStyles.descriptionText}>Description</Text>
      </View>
      <TouchableOpacity hitSlop={noteItemStyles.hitSlop}>
        <Icon />
      </TouchableOpacity>
    </View>
  );
};
