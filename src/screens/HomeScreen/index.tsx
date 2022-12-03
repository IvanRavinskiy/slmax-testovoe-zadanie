import {SafeAreaView, View} from 'react-native';
import React, {FC} from 'react';
import {Header} from '../../components/Header';
import {NoteAdder} from '../../components/NoteAdder';
import {homeScreenStyles} from './styles';
import {NoteList} from '../../components/NoteList';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export const HomeScreen: FC = () => {
  return (
    <GestureHandlerRootView style={homeScreenStyles.gestureContainer}>
      <SafeAreaView style={homeScreenStyles.rootContainer}>
        <View>
          <Header />
          <NoteList />
        </View>
        <NoteAdder />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};
