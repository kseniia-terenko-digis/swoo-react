import { memo } from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';
import { ICounterProps } from './interfaces/iCounterProps';

const Counter = styled.span<ICounterProps>(
  ({ theme }) => ({
    color: theme.colors.green,
    fontWeight: 'bold',
    fontSize: 64,
  }),
  color
);

export default memo<ICounterProps>(Counter);
