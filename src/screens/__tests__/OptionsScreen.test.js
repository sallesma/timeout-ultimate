import React from 'react';
import { renderAsync } from '@testing-library/react-native';

import OptionsScreen from '../OptionsScreen';

describe('<OptionsScreen />', () => {
  it('renders correctly', async () => {
    const { toJSON } = await renderAsync(<OptionsScreen />);

    expect(toJSON()).toMatchSnapshot();
  });
});
