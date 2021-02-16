import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

const StyledButton = (props) => {
  const type = props.type;
  const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
  const textColor = type === 'primary' ? '#FFFFFFA6' : '#171A20CC';

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={props.onPress}
      >
        <Text style={[styles.text, { color: textColor }]}>{props.content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
