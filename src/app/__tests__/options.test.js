import React from 'react';
import { render } from '@testing-library/react-native';

import OptionsScreen from '../options';

describe('<OptionsScreen />', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<OptionsScreen />);

    expect(toJSON()).toMatchSnapshot();
  });
});
