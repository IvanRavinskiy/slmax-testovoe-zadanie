import {Text, View} from 'react-native';
import React, {FC} from 'react';
import {descriptionStyles} from './styles';

type DescriptionProps = {
  date: string;
  description: string;
};

export const Description: FC<DescriptionProps> = props => {
  const {date, description} = props;

  return (
    <View style={descriptionStyles.rootContainer}>
      <View style={descriptionStyles.dateContainer}>
        <Text style={descriptionStyles.date}>{date}</Text>
      </View>
      <View style={descriptionStyles.titleContainer}>
        <Text style={descriptionStyles.title}>{description}</Text>
      </View>
    </View>
  );
};
