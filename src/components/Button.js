import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import colour from '../../config/colors.js';

export const Button = ({
  onPress = () => {
    console.log("Button Pressed!");
  },
  children = '',
  outline = false,
}) => {
  const containerStyles = [styles.container];
  const textStyles = [styles.text];

  if (outline) {
    containerStyles.push(styles.containerOutline);
    textStyles.push(styles.textOutline);
  }

  return (
    <TouchableOpacity onPress={onPress} style={containerStyles}>
      <Text style={textStyles}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colour.button.success,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colour.button.primary,
    marginVertical: 7,
  },
  containerOutline: {
    backgroundColor: 'transparent',
    borderColor: colour.button.border,
  },
  text: {
    color: colour.button.white,
    alignSelf: 'center',
    fontSize: 22,
    fontWeight: '500',
  },
  textOutline: {
    color: colour.button.primary,
  },
});
