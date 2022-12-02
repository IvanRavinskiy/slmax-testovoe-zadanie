import {Insets, StyleSheet, ViewStyle} from 'react-native';

type NoteItemStyles = {
  rootContainer: ViewStyle;
  noteContainer: ViewStyle;
  verticalLine: ViewStyle;
  titleText: ViewStyle;
  descriptionText: ViewStyle;
  hitSlop: Insets;
};

export const noteItemStyles = StyleSheet.create<NoteItemStyles>({
  rootContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 37,
    width: '90%',
    marginHorizontal: '5%',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 17,
  },
  noteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  verticalLine: {
    height: 15,
    justifyContent: 'center',
    width: 0.5,
    backgroundColor: '#000000',
    marginHorizontal: 11,
  },
  titleText: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 17,
  },
  descriptionText: {
    fontSize: 10,
    fontWeight: '300',
    lineHeight: 12,
  },
  hitSlop: {
    top: 30,
    bottom: 30,
    left: 30,
    right: 30,
  },
});
