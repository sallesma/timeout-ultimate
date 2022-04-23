import React from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import { BottomSheet, Button } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import theme from '../../utils/theme.js';

export default ({ onClose, isVisible, children }) => {
  return (
    <BottomSheet modalProps={{ onRequestClose: onClose }} isVisible={isVisible}>
      <Pressable style={styles.container} onPress={onClose}>
        {children}
        <Button
          type="clear"
          containerStyle={styles.closeIcon}
          icon={<MaterialCommunityIcons name="close" size={theme.FONT_SIZE_ICON} color="#666666" />}
          onPress={onClose}
        />
      </Pressable>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  closeIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
