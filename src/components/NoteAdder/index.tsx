import {TextInput, TouchableOpacity, View} from 'react-native';
import React, {FC, useState} from 'react';
import {noteAdderStyles} from './styles';
import Icon from '../../../assets/Vector.svg';
import {useAppDispatch} from '../../state';
import {ADD_NOTE} from '../../state/reducers/note';

const MAX_SYMBOLS = 25;

export const NoteAdder: FC = () => {
  const [title, setTitle] = useState('');

  const [description, setDescription] = useState('');

  const dispatch = useAppDispatch();

  const addNote = () => {
    dispatch(ADD_NOTE({title, description}));
    setTitle('');
    setDescription('');
  };

  return (
    <View style={noteAdderStyles.rootContainer}>
      <TextInput
        placeholder={'Add title'}
        maxLength={MAX_SYMBOLS}
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
        <TouchableOpacity
          style={noteAdderStyles.iconContainer}
          onPress={addNote}
          hitSlop={noteAdderStyles.hitSlop}>
          <Icon />
        </TouchableOpacity>
      </View>
    </View>
  );
};
