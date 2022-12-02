import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

type DescriptionStyles = {
  rootContainer: ViewStyle;
  dateContainer: ViewStyle;
  date: TextStyle;
  titleContainer: ViewStyle;
  title: TextStyle;
};

export const descriptionStyles = StyleSheet.create<DescriptionStyles>({
  rootContainer: {
    width: '80%',
    marginHorizontal: '10%',
    marginBottom: 27,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 9,
  },
  date: {
    fontSize: 8,
    fontWeight: '300',
    lineHeight: 10,
  },
  titleContainer: {},
  title: {
    fontSize: 10,
    fontWeight: '300',
    lineHeight: 12,
  },
});
