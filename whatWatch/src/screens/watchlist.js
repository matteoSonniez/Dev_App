import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useCallback, useFocusEffect} from 'react';
import Logo from '../components/logo';
import styled from 'styled-components';
import Headers from '../components/header';
import TitlePage from '../components/titlepage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {FlatList, View, TouchableOpacity} from 'react-native';

const Watchlist = () => {
  const navigation = useNavigation();
  const [watch_list, setWatchList] = React.useState([]);
  const getStorage = useCallback(async () => { 
    try {
      const wesh = await AsyncStorage.getItem('watchlist')
      setWatchList([...watch_list, ...JSON.parse(wesh)]); 
      console.log('okkk');
      return JSON.parse(wesh);
    } catch(e) {
      // read error
      console.log('pas bon');
    }
    console.log('Done.')
  }, [])
  useEffect(() => {
    getStorage();
  }, [getStorage]);

  const renderItem = ({item}) => {
    return (
      <RenderAll 
        onPress={() => navigation.navigate('detailFilm', {id_film: item.id})}>
        <RenderImage 
          source={{
            uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
          }}
        />
      </RenderAll>
    );
  };
  return (
    <View>
      <Logo></Logo>
      <Headers></Headers>
      <TitlePage name="Watchlist" />
      <FlatList 
        numColumns={2}
        data={watch_list}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onEndReachedThreshold={0.4}/>
    </View>
  );
};

const RenderAll = styled.TouchableOpacity`
  margin-left: 5%;
`;
const RenderImage = styled.Image`
  width: 170px;
  height: 250px;
  border-radius: 12px;
  margin-bottom: 5%;
`;

export default Watchlist;