import React from 'react';
import { renderAsync } from '@testing-library/react-native';

import HomeScreen from '../HomeScreen';

describe('<HomeScreen />', () => {
  it('renders correctly', async () => {
    const { toJSON } = await renderAsync(<HomeScreen />);

    expect(toJSON()).toMatchSnapshot();
  });
});
