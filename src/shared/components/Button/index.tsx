import { memo } from 'react';
import styled from 'styled-components';
import { space, color } from 'styled-system';
import { IButtonProps } from './interfaces/iButtonProps';

const Button = styled.button<IButtonProps>(
  ({ theme }) => ({
    padding: '16px 68px',
    background: theme.colors.white,
    borderRadius: 24,
    border: 'none',
    color: theme.colors.black,
    fontWeight: 'bold',
    fontSize: 24,
  }),
  space,
  color
);

export default memo<IButtonProps>(Button);
