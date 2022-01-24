import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import theme from '../../utils/theme.js';
import Rule from './Rule';

export default (props) => {
  const [expanded, setExpanded] = useState(false);

  const number = props.title.match(/^(\d+.)+/)[0];

  return (
    <View>
      <TouchableOpacity style={styles.header} onPress={()=> setExpanded(!expanded) }>
        <MaterialCommunityIcons name={expanded ? 'chevron-down' : 'chevron-right'} size={30} color="#666666" />
        <Text style={[styles.title, styles.font]}>{number} {props.title.replace(number, '')}</Text>
      </TouchableOpacity>
        {expanded &&
          <View style={styles.content}>
            {props.data.map((rule, index) => (<Rule key={index.toString()} rule={rule} />))}
          </View>
        }
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    paddingVertical: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: theme.MAIN_COLOR,
  },
  title: {
    marginLeft: 8,
    fontSize: theme.FONT_SIZE_L,
  },
  content: {
    paddingVertical: 16,
  }
});
