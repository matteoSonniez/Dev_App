import axios from 'axios';
import React, {useEffect} from 'react';
import styled from 'styled-components';
import {FlatList, TouchableOpacity, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DetailSerie = ({route}) => {
  const [det_film, setTest] = React.useState([]);
  //const [test_storage, setStorage] = React.useState([]);
  const id = route.params.id_film;
  console.log(id);
  const setStorage = async (value) => {
    var items = await getStorage();
    var is_on_watchlist = false;
    if (items) {
      for (var i = 0; i < items.length; i++){
        if (items[i].id == value.id){
          is_on_watchlist = true;
          items.splice(i, 1);
        }
      };
    }
    if (is_on_watchlist == false){
      if (items) {
        items.push(value);
        console.log('1');
        await AsyncStorage.setItem('watchlist', JSON.stringify(items));
      } else {
        console.log('2');
        await AsyncStorage.setItem('watchlist', JSON.stringify([value]));
      }
    } else {
      await AsyncStorage.setItem('watchlist', JSON.stringify(items));
    }
  }

  const getStorage = async () => {
    try {
      const wesh = await AsyncStorage.getItem('watchlist')
      return JSON.parse(wesh);
    } catch(e) {
      // read error
    }
    console.log('Done.')
  }

  useEffect(() => {
    axios({
      method: 'get',
      url: `https://api.themoviedb.org/3/tv/${id}`,
      params: {
        api_key: 'c8ec946078f792a9b9bfd875668c6e5b',
        page: 1
      },
    })
      .then(response => {
        console.log('bon c bon');
        setTest([response.data]);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const renderItem = ({item}) => {
    const note = Math.round(item.vote_average);
    const date = item.first_air_date.slice(0, 4);
    console.log(date);
    return (
      <View>
        <RenderImage 
          source={{
            uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
          }}
        />
        <TitleFilm>
          {item.name} ({date})
        </TitleFilm>
        <Margin>
          <Row>
            <WatchList>WATCHLIST</WatchList>
            <TouchableOpacity onPress={() => setStorage(item)}>
              <RenderWatchlist source={require('../img/fav.png')}/>
            </TouchableOpacity>
          </Row>
        </Margin>
        <Margin>
          <Row>
            <Note>NOTE</Note>
            <AllText>{note}</AllText>
          </Row>
          <RenderImbd source={require('../img/imdb.png')}/>
        </Margin>
        <Margin>
          <Decription>
            <Resume>RESUME</Resume>
            <AllText>{item.overview}</AllText>
          </Decription>
        </Margin>
        <Decription>
          <Margin>
            <Resume>GENRES</Resume>
          </Margin>
        </Decription>
      </View>
    );
  };


  return (
    <View>
      <FlatList
        data={det_film}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onEndReachedThreshold={0.4}/>
    </View>
  );
};
const TitleFilm = styled.Text`
  font-weight: 700;
  font-size: 22px;
  color: white;
  margin-right: 3%;
  margin-left: 3%;
  margin-top: 2%;
`;
const Note = styled.Text`
  font-size: 15px;
  font-weight: 700;
  color: #C3B5B2;
  margin-right: 10%;
`;
const AllText = styled.Text`
  font-size: 15px;
  font-weight: 400;
  color: #C3B5B2;
`;
const Resume = styled.Text`
  font-size: 15px;
  font-weight: 700;
  color: #C3B5B2;
  margin-bottom: 3%;
`;
const WatchList = styled.Text`
  font-size: 15px;
  font-weight: 700;
  color: #C3B5B2;
  margin-right: 10%;
`;
const Margin = styled.View`
  margin-top: 4%;
`;
const RenderImage = styled.Image`
  width: 100%;
  height: 450px;
`;
const RenderWatchlist = styled.Image`
  width: 25px;
  height: 25px;
`;
const RenderImbd = styled.Image`
  width: 28px;
  height: 28px;
  margin-left: 3%;
`;
const Row = styled.View`
  flex-direction: row;
  margin-left: 3%;
`;
const Decription = styled.View`
  margin-left: 3%;
`;
export default DetailSerie;
