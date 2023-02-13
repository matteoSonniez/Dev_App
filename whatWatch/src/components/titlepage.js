import React from 'react';
import styled from 'styled-components';
import {Text, View} from 'react-native';

const TitlePage = (props) => {
  return (
    <AllTitle>
      <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 25}}>
        <View style={{flex: 1, height: 1, backgroundColor: 'grey'}} />
        <View>
          <Text style={{width: 100, textAlign: 'center', fontSize: 17, fontWeight: 'bold', color: '#C3B5B2'}}>{props.name}</Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: 'grey'}} />
      </View>
    </AllTitle>
  );
};

const AllTitle = styled.View`
  margin-top: 5%;
`;

export default TitlePage;


