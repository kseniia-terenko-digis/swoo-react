import { useCallback } from 'react';
import { useAppDispatch } from '../../state/hooks/useAppDispatch';
import { useAppSelector } from '../../state/hooks/useAppSelector';
import { decrement, increment } from '../../state/slices/counter/actions';

export const useCounter = () => {
  const counterValue = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const incrementCounter = useCallback(() => dispatch(increment()), [dispatch]);
  const decrementCounter = useCallback(() => dispatch(decrement()), [dispatch]);

  return { counterValue, incrementCounter, decrementCounter };
};
