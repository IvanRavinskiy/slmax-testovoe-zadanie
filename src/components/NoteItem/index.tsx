import {Text, TouchableOpacity, View} from 'react-native';
import Icon from '../../../assets/Vector.svg';
import {noteItemStyles} from './styles';
import React, {FC, useState} from 'react';
import {Note, REMOVE_NOTE} from '../../state/reducers/note';
import {Description} from '../Description';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {useAppDispatch} from '../../state';
import {DelayDeleteButton} from '../DelayDeleteButton';

const START_INDEX = 0;
const END_INDEX = 19;
const DELAY_DELETE_TIMER = 5000;

export const NoteItem: FC<Note> = props => {
  const {id, title, description, date} = props;

  const [isShowDescription, setIsShowDescription] = useState<boolean>(false);

  const [isDeleteButtonPress, setIsDeleteButtonPress] = useState<boolean>(true);
  const [delayDeleteNoteInterval, setDelayDeleteNoteInterval] = useState<
    number | null
  >(null);

  const dispatch = useAppDispatch();

  const showDescription = () => {
    setIsShowDescription(!isShowDescription);
  };

  const getShortDescription = (text: string) => {
    return text.slice(START_INDEX, END_INDEX);
  };

  const deleteNote = () => {
    setIsDeleteButtonPress(!isDeleteButtonPress);
    setDelayDeleteNoteInterval(
      setTimeout(() => {
        dispatch(REMOVE_NOTE(id));
      }, DELAY_DELETE_TIMER),
    );
  };

  const cancelDeleting = () => {
    clearTimeout(delayDeleteNoteInterval as number);
    setIsDeleteButtonPress(true);
  };

  const renderDeleteButton = () => {
    return isDeleteButtonPress ? (
      <TouchableOpacity
        style={noteItemStyles.deleteButton}
        onPress={deleteNote}>
        <Text style={noteItemStyles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    ) : (
      <DelayDeleteButton onCancelDeletePress={cancelDeleting} />
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
