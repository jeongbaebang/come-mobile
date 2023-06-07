import createTabBarIcon from '../components/TabBarIcon/TabBarIcon';

export enum Tab {
  one = 'TabOne',
  two = 'TabTwo',
  three = 'TabThree',
}

export const options = {
  [Tab.one]: {
    tabBarLabel: '모임 관리',
    tabBarIcon: createTabBarIcon('groups'),
  },
  [Tab.two]: {
    tabBarLabel: '모임 입장',
    tabBarIcon: createTabBarIcon('meeting-room'),
  },
  [Tab.three]: {
    tabBarLabel: '마이페이지',
  },
} as const;
