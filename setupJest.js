import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.mock('react-native/src/private/animated/NativeAnimatedHelper.js');

// Font issue with expo 48: https://github.com/expo/expo/issues/21434
jest.mock('expo-font');
jest.mock('expo-asset');
