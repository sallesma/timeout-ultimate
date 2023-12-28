import React from 'react';
import { render, waitFor } from '@testing-library/react-native';

import HistoryScreen from '../history';

describe('<HistoryScreen />', () => {
  it('renders correctly', async () => {
    const { toJSON } = await waitFor(() => render(<HistoryScreen />));

    await waitFor(() => expect(toJSON()).toMatchSnapshot());
  });
});
