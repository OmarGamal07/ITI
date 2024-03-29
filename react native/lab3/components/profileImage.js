import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function ProfileImage() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/snack-icon.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  logo: {
    height: 128,
    width: 128,
    borderRadius: 64, // Add border radius
    border:2
  }
});
