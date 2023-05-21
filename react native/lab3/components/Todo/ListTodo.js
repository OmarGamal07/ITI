
import React,{useState} from 'react';
import { Text, Button ,TextInput} from 'react-native';

export default function List({item,onDelete, onEdit }) {
    const [dataupdate, setdataupdate] = useState([]);
     const onChangeValue = (text) => {
        setdataupdate(text)
    }

  return (
      <>
        <Text style={{color: 'blue', fontSize: 20}}> {item.value} </Text>
        
      <Button title='delete' onPress={() => onDelete(item)} />
        <TextInput placeholder='update value' onChangeText={onChangeValue} /> 
      
      <Button title='update' onPress={() => onEdit(item.value,dataupdate)} />
      </>
        
  );
}

