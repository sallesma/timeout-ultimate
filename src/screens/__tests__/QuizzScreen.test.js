import React from 'react';
import { render, waitFor } from '@testing-library/react-native';

import { Levels, Categories } from '../../utils/config';

import QuizzScreen from '../QuizzScreen';

describe('<QuizzScreen />', () => {
  it('renders correctly', async () => {
    const navigation = { setOptions: jest.fn() };
    const route = {
      params: {
        number: 10,
        time: 30,
        level: Levels.ANY,
        checkedCategories: [Categories.STATUS],
      },
    };
    const { toJSON } = await waitFor(() => render(<QuizzScreen navigation={navigation} route={route} />));

    expect(toJSON()).toMatchSnapshot();
  });
});
