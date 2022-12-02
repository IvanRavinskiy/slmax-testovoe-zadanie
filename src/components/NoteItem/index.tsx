import {Text, TouchableOpacity, View} from 'react-native';
import Icon from '../../../assets/Vector.svg';
import {noteItemStyles} from './styles';
import React, {FC, useState} from 'react';
import {Note, REMOVE_NOTE} from '../../state/reducers/note';
import {Description} from '../Description';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {useAppDispatch} from '../../state';

const START_INDEX = 0;
const END_INDEX = 19;

export const NoteItem: FC<Note> = props => {
  const {id, title, description, date} = props;

  const [isShowDescription, setIsShowDescription] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const showDescription = () => {
    setIsShowDescription(!isShowDescription);
  };

  const getShortDescription = (text: string) => {
    return text.slice(START_INDEX, END_INDEX);
  };
  const deleteNote = () => {
    dispatch(REMOVE_NOTE(id));
  };

  const renderDeleteButton = () => {
    return (
      <TouchableOpacity
        style={noteItemStyles.deleteButton}
        onPress={deleteNote}>
        <Text style={noteItemStyles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable renderRightActions={renderDeleteButton}>
      <View style={noteItemStyles.commonNoteContainer}>
        <View style={noteItemStyles.noteContainer}>
          <Text style={noteItemStyles.titleText}>{title}</Text>
          <View style={noteItemStyles.verticalLine} />
          <Text style={noteItemStyles.descriptionText}>
            {getShortDescription(description)}
          </Text>
        </View>
        <TouchableOpacity
          onPress={showDescription}
          hitSlop={noteItemStyles.hitSlop}>
          <Icon />
        </TouchableOpacity>
      </View>
      {isShowDescription && (
        <Description date={date} description={description} />
      )}
    </Swipeable>
  );
};
