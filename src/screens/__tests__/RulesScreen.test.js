import React from 'react';
import { renderAsync } from '@testing-library/react-native';

import RulesScreen from '../RulesScreen';

describe('<RulesScreen />', () => {
  it('renders correctly', async () => {
    const navigation = { setOptions: jest.fn() };

    const { toJSON } = await renderAsync(<RulesScreen navigation={navigation} />);

    expect(toJSON()).toMatchSnapshot();
  });
});
