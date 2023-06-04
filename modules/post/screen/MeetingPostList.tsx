import React from 'react';
import TestId from '@shared/constants/testIds';
import { Text, View } from 'react-native';
import { Button } from '@rneui/themed';

function MeetingPostList() {
  return (
    <View testID={TestId.post.list}>
      <Text>MeetingPostList</Text>
      <Button title="Clear" type="clear" />
    </View>
  );
}

export default MeetingPostList;
