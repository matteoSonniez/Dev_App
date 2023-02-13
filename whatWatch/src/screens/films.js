import axios from 'axios';
import React, {useEffect} from 'react';
import styled from 'styled-components';
import Logo from '../components/logo';
import {useNavigation} from '@react-navigation/native';
import Headers from '../components/header';
import {Picker} from '@react-native-picker/picker';
import Plateforme from '../components/plateforme';
import TitlePage from '../components/titlepage';
import {FlatList, View} from 'react-native';

const Films = () => {
  const navigation = useNavigation();
  const [popularFilms, setPopular] = React.useState([]);
  const [popularFilmsImutable, setPopularImu] = React.useState([]);
  const [selectedValue, setSelectedValue] = React.useState('Filtre');
  function allFilm(){
    axios({
      method: 'get',
      url: 'https://api.themoviedb.org/3/movie/popular',
      params: {
        api_key: 'c8ec946078f792a9b9bfd875668c6e5b',
      },
    })
      .then(response => {
        console.log('it works');
        setPopular([...popularFilms, ...response.data.results]);
        setPopularImu([...popularFilmsImutable, ...response.data.results]);
      })
      .catch(error => {
        console.log(error);
      });
  }
  const goFilter = (id_genre) => {
    //allFilm();
    var tab = [];
    for (var i = 0; i < popularFilmsImutable.length; i++) {
      for (var y = 0; y < popularFilmsImutable[i].genre_ids.length; y++){
        if (popularFilmsImutable[i].genre_ids[y] == id_genre) {
          tab.push(popularFilmsImutable[i])
        }
      }
    }
    setPopular(tab);
  };
  const deleteFilter = () => {
    setPopular(popularFilmsImutable);
  };
  useEffect(() => {
    allFilm();
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
      <TitlePage name="Films" />
      <AllPage>
        <ThePicker>
          <Picker 
            selectedValue={selectedValue}
            style={{ color: "grey"}}
            onValueChange={(itemValue, itemIndex) => goFilter(itemValue)}>
            <Picker.Item label="Trier" value="filtre" />
            <Picker.Item label="Action" value="28" />
            <Picker.Item label="Adventure" value="12"/>
            <Picker.Item label="Comedy" value="35"/>
          </Picker>
        </ThePicker>
        <RenderFiltre onPress={() => deleteFilter()}>
          <Filtre source={require('../img/filtre.png')}/>
        </RenderFiltre>
      </AllPage>
      <AllPage>
        <FlatList 
          numColumns={2}
          data={popularFilms}
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
const ThePicker = styled.View`
  height: 50px;
  width: 120px;
  margin-left: 4%;
`;
const RenderAll = styled.TouchableOpacity`
  margin-left: 5%;
`;
const RenderFiltre = styled.TouchableOpacity`
  margin-top: 5%;
`;
const RenderImage = styled.Image`
  width: 170px;
  height: 250px;
  border-radius: 12px;
  margin-bottom: 10px;
`;
const Filtre = styled.Image`
  width: 20px;
  height: 20px;
`;
export default Films;