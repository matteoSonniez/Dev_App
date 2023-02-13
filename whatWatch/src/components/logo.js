import {useNavigation} from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components';
import {TouchableOpacity, View} from 'react-native';
const Logo = () => {
  const navigation = useNavigation();
  const goToHome = () => {
    navigation.navigate('Home');
  };
  return (
    <View>
      <TouchableOpacity onPress={goToHome}>
        <LogoImg source={require('../img/logo.png')}/>
      </TouchableOpacity>
    </View>
  );
};
const LogoImg = styled.Image`
  width: 240px;
  height: 100px;
`;

export default Logo;

