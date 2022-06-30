import React from 'react';
import { render } from '@testing-library/react-native';

import RulesScreen from '../RulesScreen';

describe('<RulesScreen />', () => {
  it('renders correctly', async () => {
    const navigation = { setOptions: jest.fn() };

    const { toJSON } = render(<RulesScreen navigation={navigation} />);

    expect(toJSON()).toMatchSnapshot();
  });
});
