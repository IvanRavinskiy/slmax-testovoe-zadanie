import {FlatList} from 'react-native';
import {Note} from '../../state/reducers/note';
import {NoteItem} from '../NoteItem';
import React, {FC} from 'react';
import {useAppSelector} from '../../state';
import {getNotes} from '../../state/selectors/note';

export const NoteList: FC = () => {
  const notes = useAppSelector(getNotes);

  const renderItem = ({item}: {item: Note}) => {
    return <NoteItem {...item} />;
  };

  const keyExtractor = (item: Note) => item.id;

  return (
    <FlatList
      data={notes}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};
