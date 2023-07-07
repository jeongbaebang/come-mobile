import { ComponentMeta } from '@storybook/react-native';

import FontThemeProvider from '@shared/provider/FontProvider';
import mockMembers from '@post/mocks/members';
import Component from './AddVenue';
import { View } from 'react-native';

type Meta = ComponentMeta<typeof Component>;

export default {
  title: 'Detail - Planner',
  component: Component,
  decorators: [
    (Story) => (
      <FontThemeProvider>
        <View style={{ margin: 10 }}>
          <Story />
        </View>
      </FontThemeProvider>
    ),
  ],
} as Meta;

export const AddVenue: Meta = {
  args: {},
};
