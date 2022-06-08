import { useCounter } from '../useCounter';
import { renderHook } from '@testing-library/react-hooks';
import { decrement, increment } from '../../../state/slices/counter/actions';

const mockDispatch = jest.fn();

jest.mock('../../../state/hooks/useAppSelector', () => ({
  useAppSelector: () => 0,
}));

jest.mock('../../../state/hooks/useAppDispatch', () => ({
  useAppDispatch: () => mockDispatch,
}));

describe('useQueryParamState hook', () => {
  const { result } = renderHook(() => useCounter());

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('result matches snapshot', () => {
    expect(result).toMatchSnapshot();
  });

  it('decrementCounter and fire dispatch with correct parameters', () => {
    result.current.decrementCounter();

    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith(decrement());
  });

  it('incrementCounter and fire fire dispatch with correct parameters', () => {
    result.current.incrementCounter();

    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith(increment());
  });
});
