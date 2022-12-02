import {SafeAreaView, View} from 'react-native';
import React, {FC} from 'react';
import {Header} from '../../components/Header';
import {NoteItem} from '../../components/NoteItem';
import {NoteAdder} from '../../components/NoteAdder';
import {homeScreenStyles} from './styles';

export const HomeScreen: FC = () => {
  return (
    <SafeAreaView style={homeScreenStyles.rootContainer}>
      <View>
        <Header />
        <NoteItem />
      </View>
      <NoteAdder />
    </SafeAreaView>
  );
};
