import React from 'react';
import { renderAsync } from '@testing-library/react-native';

import AboutScreen from '../AboutScreen';

describe('<AboutScreen />', () => {
  it('renders correctly', async () => {
    const { toJSON } = await renderAsync(<AboutScreen />);

    expect(toJSON()).toMatchSnapshot();
  });
});
