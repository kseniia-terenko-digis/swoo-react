import { SpaceProps, ColorProps } from 'styled-system';

export interface IButtonProps extends SpaceProps, ColorProps {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
