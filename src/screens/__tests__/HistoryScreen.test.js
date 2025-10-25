import React from 'react';
import { renderAsync, waitFor } from '@testing-library/react-native';

import HistoryScreen from '../HistoryScreen';

describe('<HistoryScreen />', () => {
  it('renders correctly', async () => {
    const { toJSON } = await renderAsync(<HistoryScreen />);

    await waitFor(() => expect(toJSON()).toMatchSnapshot());
  });
});
