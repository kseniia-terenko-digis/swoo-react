import { LayoutProps, SpaceProps, ColorProps } from 'styled-system';

export interface IButtonProps extends LayoutProps, SpaceProps, ColorProps {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
