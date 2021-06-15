import React,{ useState, useEffect, useRef } from 'react';


import { Text, View, StyleSheet, AppState, Image, Platform, Alert} from 'react-native';
import { Button } from 'react-native-paper'


import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'


//import CameraScreen from './screen/cameraScreen'
//import DetailScreen from './screen/detailScreen'
//import TestScreen from './screen/testScreen'
//import LoginScreen from './screen/loginScreen'

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
  
  const _handleAppStateChange = (nextState='active') => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === "active"
    ) {
      console.log("App has come to the foreground!");
    }

    appState.current = nextAppState;
    setAppStateVisible(appState.current);
    console.log("AppState", appState.current);
  }
  const HomeScreen = ({navigation})=>{
    return (
      <View style={{flex:1}}>
         <Text>{appState.current}</Text>
         <Button mode='contained' style={styles.mainButton}
           onPress={ () => {navigation.navigate('camera')} }>
           LAUNCH CAMERA
        </Button>
        <Button mode='contained' style={styles.mainButton}
           onPress={ () => {navigation.navigate('detail')} }>
           LAUNCH DETAIL
        </Button>
        <Button mode='contained' style={styles.mainButton}
           onPress={ () => {navigation.navigate('login')} }>
           LAUNCH TEST
        </Button>
     
      </View>
    )
  }
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName={'test'}>
            <Stack.Screen name='login' component={LoginScreen} />
            <Stack.Screen name='home' component={HomeScreen}  />
            <Stack.Screen name='detail' component={DetailScreen} />
            {/* <Stack.Screen name='camera' component={CameraScreen} /> */}
            <Stack.Screen name='test' component={TestScreen} />
        </Stack.Navigator>
    </NavigationContainer>

   
  );
}

const styles = StyleSheet.create({
  mainButton: {
    marginTop: 20,
    marginBottom: 20
  }


})


/*style={StyleSheet.absoluteFillObject}*/ 