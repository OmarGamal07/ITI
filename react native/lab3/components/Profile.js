import * as React from 'react';
import  { useState,useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView ,CheckBox,Button} from 'react-native';
import Constants from 'expo-constants';
import { ProgressBar } from 'react-native-paper';

// You can import from local files
import AssetExample from './AssetExample';
import ProfileImage from './profileImage';
import Socialicon from './Socialicon';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
export default function App() {
const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  





  return (
    <ScrollView style={styles.container}>
      <ProfileImage />
      <Text style={styles.paragraph}>Omar Gamal</Text>
      <Text style={styles.paragraph}>Backend Developer</Text>
      <Socialicon />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
  <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />
  <View>
  </View>
  <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />
</View>
 <View style={styles.rowContainer}>
        <Text style={styles.informationLabel}>Age</Text>
        <Text style={styles.informationValue}>22</Text>
  </View>
   <View style={styles.rowContainer}>
        <Text style={styles.informationLabel}>Track</Text>
        <Text style={styles.informationValue}>os</Text>
  </View>
   <View style={styles.rowContainer}>
        <Text style={styles.informationLabel}>Address</Text>
        <Text style={styles.informationValue}>Assuit</Text>
  </View>
<View style={{flexDirection: 'row', alignItems: 'center'}}>
  <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />
  <View>
  </View>
  <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />
</View>
 <Text style={{color:'white',fontSize: 18,fontWeight: 'bold',margin: 15}}>Languages </Text> 
 <Text style={{color:'white',fontSize: 18,fontWeight: 'bold',margin: 15}}>Html </Text> 
<ProgressBar progress={0.5}  />

<Text>Extra Skills</Text>
<View style={{flexDirection: 'row', alignItems: 'center'}}>
  <Text style={styles.paragraph}>css</Text>
  <View style={styles.CheckBox}>
      <CheckBox value={isChecked} onValueChange={handleCheckboxChange} />
      <Text>{isChecked ? 'Checked' : 'Unchecked'}</Text>
    </View>

  </View>
       <Button title='Download CV'  /> 
     
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'black',
    padding: 8,
    color: 'white',
  },
  paragraph: {
    margin: 15,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 10,
  },
  informationLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginRight: 10,
  },
  informationValue: {
    fontSize: 18,
    color: 'white',
  },
  CheckBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
