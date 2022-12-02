import {StyleSheet, ViewStyle} from 'react-native';

type HomeScreenStyles = {
  rootContainer: ViewStyle;
};

export const homeScreenStyles = StyleSheet.create<HomeScreenStyles>({
  rootContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
