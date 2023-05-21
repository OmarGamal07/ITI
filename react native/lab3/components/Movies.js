import axios from 'react-native-axios';
import React, { useEffect, useState } from 'react';
import { Text, Card } from '@rneui/themed';
import { Button, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Movies() {
  const navigation = useNavigation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/popular?api_key=aa6fc65fcedb7431af3ac2fbe6484cd0&language=en-US&page=1'
      )
      .then((res) => setMovies(res.data.results))
      .catch((err) => alert(err));
  }, []);

  return (
    <ScrollView>
      <Text> List Movies </Text>
      {movies.map((movie, index) => {
        return (
          <Card key={index}>
            <Card.Title>{movie.original_title}</Card.Title>
            <Text style={{ marginBottom: 10 }}>Rate: {movie.vote_average}</Text>
            <Text style={{ marginBottom: 10 }}>{movie.overview}</Text>
            <Button
              title="Details"
              onPress={() => navigation.navigate('Details', { id: movie.id })}
            />
          </Card>
        );
      })}
    </ScrollView>
  );
}