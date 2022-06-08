import { shallow } from 'enzyme';
import MainPage from '..';

const mockHookResult = {
  counterValue: 10,
  decrementCounter: () => {},
  incrementCounter: () => {},
};

jest.mock('../../../shared/hooks/useCounter', () => ({
  useCounter: () => mockHookResult,
}));

describe('MainPage component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<MainPage />);

    expect(wrapper).toMatchSnapshot();
  });
});
