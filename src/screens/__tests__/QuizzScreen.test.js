import React from 'react';
import { render } from '@testing-library/react-native';

import { Levels, Categories } from '../../utils/config';

import QuizzScreen from '../QuizzScreen';

describe('<QuizzScreen />', () => {
  it('renders correctly', () => {
    const navigation = { setOptions: jest.fn() };
    const route = {
      params: {
        number: 10,
        time: 30,
        level: Levels.ANY,
        checkedCategories: [Categories.STATUS],
      },
    };
    const { toJSON } = render(<QuizzScreen navigation={navigation} route={route} />);

    expect(toJSON()).toMatchSnapshot();
  });
});
