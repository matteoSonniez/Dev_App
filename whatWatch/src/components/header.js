import {useNavigation} from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components';
import {View} from 'react-native';

const Headers = () => {
  const navigation = useNavigation();
  const goToFilms = () => {
    navigation.navigate('Films');
  };
  const goToSeries = () => {
    navigation.navigate('Series');
  };
  const goToWatchlist = () => {
    navigation.navigate('Watchlist');
  };
  return (
    <TheHeader>
      <View>
        <RedirButton onPress={goToFilms}>
          <TitleFilm>Films</TitleFilm>
        </RedirButton>
      </View>
      <View>
        <RedirButton onPress={goToSeries}>
          <TitleFilm>Séries</TitleFilm>
        </RedirButton>
      </View>
      <View>
        <RedirButton onPress={goToWatchlist}>
          <TitleFilm>Watchlist</TitleFilm>
        </RedirButton>
      </View>
    </TheHeader>
  );
};
const RedirButton = styled.TouchableOpacity`
  border-width: 1px;
  align-items: center;
  justify-content: center;
  width: 131px;
  height: 30px;
`;
const TheHeader = styled.View`
  flex-direction: row;
`;
const TitleFilm = styled.Text`
  font-weight: bold; 
  font-size: 15px;
  color: white;
`;
export default Headers;
