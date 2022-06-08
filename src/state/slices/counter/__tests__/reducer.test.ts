import { decrement, increment } from '../actions';
import { initialState } from '../initialState';
import reducer from '../reducer';

describe('counter reducer', () => {
  it('should return initial state', () => {
    const action = {
      type: '',
      payload: undefined,
    };

    expect(reducer(undefined, action).value).toBe(initialState.value);
  });

  it('should handle increment action', () => {
    expect(reducer(undefined, increment()).value).toBe(1);
  });

  it('should handle decrement action', () => {
    expect(reducer(undefined, decrement()).value).toBe(-1);
  });
});
