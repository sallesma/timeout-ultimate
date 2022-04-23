import React from 'react';
import { render, waitFor } from '@testing-library/react-native';

import HistoryScreen from '../HistoryScreen';

describe('<HistoryScreen />', () => {
  it('renders correctly', async () => {
    const { toJSON } = await waitFor(() => render(<HistoryScreen />));

    expect(toJSON()).toMatchSnapshot();
  });
});
