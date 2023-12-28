import React from 'react';
import { render } from '@testing-library/react-native';

import RulesScreen from '../rules';

describe('<RulesScreen />', () => {
  it('renders correctly', () => {
    const navigation = { setOptions: jest.fn() };

    const { toJSON } = render(<RulesScreen navigation={navigation} />);

    expect(toJSON()).toMatchSnapshot();
  });
});
