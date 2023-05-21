import axios from 'react-native-axios';
import React, { useEffect, useState } from 'react';

import { Text } from 'react-native';
import { Card } from '@rneui/themed';

export default function Details({ navigation, route }) {
  const id = route.params.id;
  const [move, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=aa6fc65fcedb7431af3ac2fbe6484cd0`
      )
      .then((res) => setMovies(res.data))
      .catch((err) => alert(err));
  }, []);

  return (
    <>
      <Text> Details </Text>
       <Card> 
            <Card.Title>{move.original_title}</Card.Title>
            <Text style={{ marginBottom: 10 }}>popularity: {move.popularity} </Text>   
            <Text style={{ marginBottom: 10 }}>poster_path: {move.poster_path} </Text>   

            <Text style={{ marginBottom: 10 }}>overview: {move.overview} </Text>   
            <Text style={{ marginBottom: 10 }}>original_language: {move.original_language} </Text>    

      </Card>
    </>
  );
}