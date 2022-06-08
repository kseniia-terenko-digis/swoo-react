import { memo } from 'react';
import styled from 'styled-components';
import { space, color, layout, flexbox } from 'styled-system';
import { IContainerProps } from './interfaces/iContainerProps';

const Container = styled.div<IContainerProps>(space, color, layout, flexbox);

export default memo<IContainerProps>(Container);
