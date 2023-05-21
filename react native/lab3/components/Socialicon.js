import React from 'react';
import { View, StyleSheet, Linking, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AntDesign } from 'react-native-vector-icons';

export default function SocialIcon() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon
          size={50}
          color="yellow"
          name="facebook"
          onPress={() => {
            Linking.openURL("https://www.facebook.com");
          }}
        />
        <Icon
          size={50}
          color="yellow"
          name="linkedin-square"
          onPress={() => {
            Linking.openURL("https://www.linkedin.com");
          }}
        />
        <AntDesign
          size={50}
          color="yellow"
          name="instagram"
          onPress={() => {
            Linking.openURL("https://www.instagram.com");
          }}
        />
        <AntDesign
          size={50}
          color="yellow"
          name="twitter"
          onPress={() => {
            Linking.openURL("https://www.twitter.com");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',

    
    
  },
});