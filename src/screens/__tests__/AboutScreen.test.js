import React from 'react';
import { render } from '@testing-library/react-native';

import AboutScreen from '../AboutScreen';

describe('<AboutScreen />', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<AboutScreen />);

    expect(toJSON()).toMatchSnapshot();
  });
});
