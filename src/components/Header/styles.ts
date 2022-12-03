import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

type HeaderStyles = {
  left: ViewStyle;
  right: ViewStyle;
  textContainer: ViewStyle;
  text: TextStyle;
};

export const headerStyles = StyleSheet.create<HeaderStyles>({
  left: {
    marginBottom: '5%',
  },
  right: {
    position: 'absolute',
    zIndex: 1,
  },
  textContainer: {
    position: 'absolute',
    zIndex: 2,
    top: 50,
    alignItems: 'center',
    width: '100%',
  },
  text: {
    fontSize: 28,
    fontWeight: '600',
    lineHeight: 33,
    color: '#FFFFFF',
  },
});
