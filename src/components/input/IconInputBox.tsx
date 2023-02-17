import React from 'react';
import { makeStyles } from '@rneui/themed';
import { View, Text, StyleProp, ViewStyle } from 'react-native';
import Icon from '@components/Icon';
import { IconProps } from '../../types';

interface IconInputBoxProps {
  iconConfig: IconProps;
  condition: boolean;
  value: string;
  placeholder: string;
  style?: StyleProp<ViewStyle>;
}
export const isValid = <T extends string | object>(data: T): boolean => {
  if (!data) return false;

  return true;
};

function IconInputBox({
  iconConfig,
  condition,
  value,
  placeholder,
  style,
}: IconInputBoxProps) {
  const styles = useStyles();
  const { name, size, color } = iconConfig;

  return (
    <View style={[styles.dateContainer, style]}>
      <Icon name={name} size={size} color={color} />
      <Text style={styles.meetingNoteInput}>
        {condition ? value : placeholder}
      </Text>
    </View>
  );
}

const useStyles = makeStyles(theme => ({
  meetingNoteInput: {
    textAlignVertical: 'center',
    color: theme.grayscale['500'],
    marginLeft: 10,
  },
  dateContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: theme.grayscale['200'],
    padding: 12,
    alignItems: 'center',
  },
}));

export default IconInputBox;
