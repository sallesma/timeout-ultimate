import React from 'react';
import { render } from '@testing-library/react-native';

import HomeScreen from '../HomeScreen';

describe('<HomeScreen />', () => {
  it('renders correctly', async () => {
    const { toJSON } = render(<HomeScreen />);

    expect(toJSON()).toMatchSnapshot();
  });
});
