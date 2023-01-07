import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { Levels, Categories } from '../../utils/config';

import QuizzScreen from '../QuizzScreen';

describe('<QuizzScreen />', () => {
  it('renders correctly', async () => {
    const navigation = { setOptions: jest.fn() };
    const route = {
      params: {
        number: 1,
        time: 30,
        level: Levels.ANY,
        checkedCategories: [Categories.STATUS],
      },
    };
    const { toJSON, getByText } = render(<QuizzScreen navigation={navigation} route={route} />);

    expect(toJSON()).toMatchSnapshot();

    await fireEvent.press(getByText('Valider'));

    expect(toJSON()).toMatchSnapshot();

    await fireEvent.press(getByText('Question suivante'));

    expect(toJSON()).toMatchSnapshot();
  });
});
