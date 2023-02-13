import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Films from '../screens/films';
import Series from '../screens/series';
import Home from '../screens/home';
import Watchlist from '../screens/watchlist';
import DetailFilm from '../screens/detailfilm';
import DetailSerie from '../screens/detailserie';


const Stack = createNativeStackNavigator();
const Routes = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions=
          {{contentStyle: {backgroundColor: '#04494B'}, 
          headerShown: false}}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Series" component={Series}/>
        <Stack.Screen name="Films" component={Films}/>
        <Stack.Screen name="Watchlist" component={Watchlist}/>
        <Stack.Screen
          name="detailFilm"
          component={DetailFilm}
          options={{
            title: '',
            headerTransparent: true,
            headerShown: true,
            headerStyle: {},
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="detailSerie"
          component={DetailSerie}
          options={{
            title: '',
            headerTransparent: true,
            headerShown: true,
            headerStyle: {},
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;