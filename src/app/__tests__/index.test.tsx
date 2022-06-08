import { shallow } from 'enzyme';
import App from '..';

describe('App component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });
});
