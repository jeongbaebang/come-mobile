import type { StyleProp, TextStyle } from 'react-native';

export interface Ifont {
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
  bold?: boolean;
  numberOfLines?: number;
}

export interface IscreenFont {
  children: React.ReactNode;
}
