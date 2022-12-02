import {TextInput, TouchableOpacity, View} from 'react-native';
import React, {FC, useState} from 'react';
import {noteAdderStyles} from './styles';
import Icon from '../../../assets/Vector.svg';

export const NoteAdder: FC = () => {
  const [title, setTitle] = useState('');

  const [description, setDescription] = useState('');

  return (
    <View style={noteAdderStyles.rootContainer}>
      <TextInput
        placeholder={'Add title'}
        style={noteAdderStyles.titleInput}
        value={title}
        onChangeText={setTitle}
      />
      <View style={noteAdderStyles.horizontalLine} />
      <View style={noteAdderStyles.descriptionContainer}>
        <TextInput
          placeholder={'Add description'}
          style={noteAdderStyles.descriptionInput}
          value={description}
          onChangeText={setDescription}
        />
        <TouchableOpacity hitSlop={noteAdderStyles.hitSlop}>
          <Icon />
        </TouchableOpacity>
      </View>
    </View>
  );
};
