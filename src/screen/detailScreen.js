import { View, Text, Button } from "react-native"
import React from 'react'
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';

function dataSchema(){

}

const DetailScreen = ({data})=>{
  return (
    <View>
      {
       /*  Object.keys(data).map(
          item =>
        ) */
      }
  {/*     <Button title={'Open link'} onPress={()=>{
        console.log(Linking)
        Linking.openURL('https://cn.bing.com');}}></Button>
        <Button title={'Open link interal'} onPress={()=>{
        
        WebBrowser.openBrowserAsync('https://cn.bing.com');}}></Button>  */}
    </View>  
  )

}


export default DetailScreen