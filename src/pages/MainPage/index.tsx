import Button from '../../shared/components/Button';
import Container from '../../shared/components/Container';
import Counter from '../../shared/components/Counter';
import { useCounter } from '../../shared/hooks/useCounter';

const MainPage: React.FC = () => {
  const { counterValue, decrementCounter, incrementCounter } = useCounter();

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
      <Container my={104}>
        <Counter>{counterValue}</Counter>
      </Container>
      <Button onClick={decrementCounter}>- 1</Button>
    </Container>
  );
};

export default MainPage;
