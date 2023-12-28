import React from 'react';
import { render } from '@testing-library/react-native';

import IndexScreen from '../index';

describe('<IndexScreen />', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<IndexScreen />);

    expect(toJSON()).toMatchSnapshot();
  });
});
