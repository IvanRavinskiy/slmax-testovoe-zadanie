import {Insets, StyleSheet, ViewStyle} from 'react-native';

type NoteAdderStyles = {
  rootContainer: ViewStyle;
  horizontalLine: ViewStyle;
  titleInput: ViewStyle;
  descriptionContainer: ViewStyle;
  descriptionInput: ViewStyle;
  hitSlop: Insets;
};

export const noteAdderStyles = StyleSheet.create<NoteAdderStyles>({
  rootContainer: {
    justifyContent: 'center',
    height: 82,
    width: '90%',
    marginHorizontal: '5%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#D2D2D2',
    borderRadius: 10,
    paddingLeft: 17,
    paddingRight: 27,
    paddingVertical: 20,
  },
  horizontalLine: {
    alignSelf: 'center',
    width: '100%',
    height: 1,
    backgroundColor: '#D2D2D2',
    marginTop: 7,
    marginBottom: 11,
  },
  titleInput: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 17,
    paddingLeft: 4,
  },
  descriptionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  descriptionInput: {
    fontSize: 10,
    fontWeight: '300',
    lineHeight: 12,
    paddingLeft: 4,
  },
  hitSlop: {
    top: 30,
    bottom: 30,
    left: 30,
    right: 30,
  },
});
