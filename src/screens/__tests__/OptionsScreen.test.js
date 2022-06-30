import React from 'react';
import { render } from '@testing-library/react-native';

import OptionsScreen from '../OptionsScreen';

describe('<OptionsScreen />', () => {
  it('renders correctly', async () => {
    const { toJSON } = render(<OptionsScreen />);

    expect(toJSON()).toMatchSnapshot();
  });
});
