import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const SampleScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Sample Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
