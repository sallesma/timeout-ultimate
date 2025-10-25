import React from 'react';
import { renderAsync, userEvent } from '@testing-library/react-native';

import { Levels, Categories } from '../../utils/config';

import QuizzScreen from '../QuizzScreen';

describe('<QuizzScreen />', () => {
  jest.useFakeTimers();

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
    const { toJSON, getByText } = await renderAsync(<QuizzScreen navigation={navigation} route={route} />);

    expect(toJSON()).toMatchSnapshot();

    const user = userEvent.setup();
    await user.press(getByText('Check the answer'));

    expect(toJSON()).toMatchSnapshot();

    await user.press(getByText('Next question'));

    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly with no questions', async () => {
    const navigation = { setOptions: jest.fn() };
    const route = {
      params: {
        number: 5,
        time: 30,
        level: Levels.DIFFICULT,
        checkedCategories: [Categories.INDOOR],
      },
    };
    const { toJSON, getByText } = await renderAsync(<QuizzScreen navigation={navigation} route={route} />);

    expect(toJSON()).toMatchSnapshot();
  });
});
