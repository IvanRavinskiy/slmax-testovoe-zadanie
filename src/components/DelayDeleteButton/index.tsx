import {
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
  View,
} from 'react-native';
import {noteItemStyles} from '../NoteItem/styles';
import Delay from '../../../assets/wait.svg';
import React, {FC, useEffect, useState} from 'react';

type DelayDeleteButtonProps = {
  onCancelDeletePress: TouchableOpacityProps['onPress'];
};

export const DelayDeleteButton: FC<DelayDeleteButtonProps> = props => {
  const {onCancelDeletePress} = props;

  const [deleteDelayTimer, setDeleteDelayTimer] = useState<number>(5);

  useEffect(() => {
    const interval = setInterval(() => {
      deleteDelayTimer === 0
        ? clearInterval(interval)
        : setDeleteDelayTimer(deleteDelayTimer - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <TouchableOpacity
      onPress={onCancelDeletePress}
      style={noteItemStyles.deleteButton}>
      <Delay />
      <View style={noteItemStyles.deleteButtonTextContainer}>
        <Text style={noteItemStyles.deleteButtonText}>{deleteDelayTimer}</Text>
      </View>
    </TouchableOpacity>
  );
};
