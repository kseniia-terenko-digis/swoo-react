import {
  LayoutProps,
  SpaceProps,
  ColorProps,
  FlexboxProps,
} from 'styled-system';

export interface IContainerProps
  extends LayoutProps,
    SpaceProps,
    ColorProps,
    FlexboxProps {
  children: React.ReactNode;
}
