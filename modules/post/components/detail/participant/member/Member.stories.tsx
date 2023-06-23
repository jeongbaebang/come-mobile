import { View } from 'react-native';
import { ComponentMeta } from '@storybook/react-native';

import { FontLoader } from '@shared/components/ThemeProvider';
import Member from './Member';

type Meta = ComponentMeta<typeof Member>;

export default {
  title: 'Detail - Member',
  component: Member,
  decorators: [
    (Story) => (
      <FontLoader>
        <View style={{ margin: 10 }}>
          <Story />
        </View>
      </FontLoader>
    ),
  ],
} as Meta;

export const Defualt: Meta = {
  args: {
    nickname: 'John Doe',
    profileImageUrl: 'https://picsum.photos/200/300',
  },
};

export const WrongUriAvatar: Meta = {
  args: {
    nickname: 'John Doe',
    profileImageUrl: 'https://xxx.jpg',
  },
};

export const EmptyUriAvatar: Meta = {
  args: {
    nickname: 'John Doe',
    profileImageUrl: '',
  },
};