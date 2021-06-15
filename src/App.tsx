import React,{ useState, useEffect, useRef } from 'react';
import {  View, AppState, AppStateStatus  } from 'react-native';
import { Button, Chip } from 'react-native-paper'

import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator, StackView } from '@react-navigation/stack';

import CameraScreen from './screen/cameraScreen'
import DetailScreen from './screen/detailScreen'
import TestScreen from './screen/testScreen'
import LoginScreen from './screen/loginScreen'
const Stack = createStackNavigator()

export default function App() {
  const appState = useRef(AppState.currentState) 
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  
  useEffect(()=>{
    AppState.addEventListener("change",_handleAppStateChange)

    return () => {
      AppState.removeEventListener("change",_handleAppStateChange)
    }

  },[]);
  
  const _handleAppStateChange = (nextAppState: AppStateStatus) => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === "active"
    ) {
      console.log("App has come to the foreground!");
    }
      console.log(nextAppState, appState.current);
    appState.current = nextAppState;
    setAppStateVisible(appState.current);
  }
  const DemoScreen = ()=>{
    return(
      <View></View>
    )
  }
  const HomeScreen = ({navigation}:{navigation: {navigate:(routeName : string)=> any}})=>{
    console.log( navigation)
    return (
      <View style={{flex:1}}>
        <Button mode='contained'
           onPress={ () => {navigation.navigate('camera')} }>
           LAUNCH CAMERA
        </Button>
        <Button mode='contained'
           onPress={ () => {navigation.navigate('detail')} }>
           LAUNCH DETAIL
        </Button>
        <Button mode='contained'
           onPress={ () => {navigation.navigate('test')} }>
           LAUNCH TEST
        </Button>
     
      </View>
    )
  }
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName={'home'}>
            <Stack.Screen name='login' component={LoginScreen} />
            <Stack.Screen name='home' component={HomeScreen}  />
            <Stack.Screen name='detail' component={DetailScreen} />
            <Stack.Screen name='camera' component={CameraScreen} />
            <Stack.Screen name='test' component={TestScreen} />
        </Stack.Navigator>
    </NavigationContainer>

   
  );
}
