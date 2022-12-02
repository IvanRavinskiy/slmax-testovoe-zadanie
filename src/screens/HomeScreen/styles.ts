import {StyleSheet, ViewStyle} from 'react-native';

type HomeScreenStyles = {
  gestureContainer: ViewStyle;
  rootContainer: ViewStyle;
};

export const homeScreenStyles = StyleSheet.create<HomeScreenStyles>({
  gestureContainer: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
