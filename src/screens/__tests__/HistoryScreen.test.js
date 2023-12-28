import React from 'react';
import { render, waitFor } from '@testing-library/react-native';

import HistoryScreen from '../HistoryScreen';

describe('<HistoryScreen />', () => {
  it('renders correctly', async () => {
    const { toJSON } = render(<HistoryScreen />);

    await waitFor(() => expect(toJSON()).toMatchSnapshot());
  });
});
