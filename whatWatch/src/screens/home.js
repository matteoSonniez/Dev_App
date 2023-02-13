import axios from 'axios';
import React, {useEffect} from 'react';
import styled from 'styled-components';
import Logo from '../components/logo';
import {useNavigation} from '@react-navigation/native';
import Headers from '../components/header';
import TitlePage from '../components/titlepage';
import {FlatList, View} from 'react-native';

const Home = () => {
  const navigation = useNavigation();
  const [topFilms, setTop] = React.useState([]);
  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://api.themoviedb.org/3/movie/top_rated',
      params: {
        api_key: 'c8ec946078f792a9b9bfd875668c6e5b',
        page: 1
      },
    })
      .then(response => {
        console.log('it works');
        setTop([...topFilms, ...response.data.results]);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
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
      <TitlePage name="Top Rate" />
      <AllPage>
        <FlatList 
          numColumns={2}
          data={topFilms}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          onEndReachedThreshold={0.4}/>
      </AllPage>
    </View>
  );
};
const AllPage = styled.View`
  flex-direction: row;
`;
const RenderAll = styled.TouchableOpacity`
  margin-left: 4%;
`;
const RenderImage = styled.Image`
  width: 175px;
  height: 250px;
  border-radius: 12px;
  margin-bottom: 5%;
`;
export default Home;