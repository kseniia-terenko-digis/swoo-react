import { useCallback } from 'react';
import Button from '../../shared/components/Button';
import Container from '../../shared/components/Container';
import Counter from '../../shared/components/Counter';
import { useAppDispatch } from '../../state/hooks/useAppDispatch';
import { useAppSelector } from '../../state/hooks/useAppSelector';
import { decrement, increment } from '../../state/slices/counter/actions';

const MainPage: React.FC = () => {
  const counterValue = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const incrementCounter = useCallback(() => dispatch(increment()), [dispatch]);
  const decrementCounter = useCallback(() => dispatch(decrement()), [dispatch]);

  return (
    <Container
      bg="blue"
      height="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Button onClick={incrementCounter}>+ 1</Button>
      <Container my={104} color="green">
        <Counter>{counterValue}</Counter>
      </Container>
      <Button onClick={decrementCounter}>- 1</Button>
    </Container>
  );
};

export default MainPage;
