import { SpaceProps, ColorProps } from 'styled-system';

export interface ICounterProps extends SpaceProps, ColorProps {
  children: React.ReactNode;
}
