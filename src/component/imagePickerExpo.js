import React, { useState, useEffect } from 'react';
import { Image, View, Platform, Button, StyleSheet, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import Icon from "react-native-vector-icons/SimpleLineIcons";

export default function ImageButton({setImageSource, style}) {

  
  useEffect(() => {
   console.log('Test of effect',setImageSource)
  }, []);

  const pickImage = async () => {
    if(Platform.OS === 'web')
      return 
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if(result.cancelled)
      return 
    console.log('URI', result.uri)
    setImageSource(result.uri)

   
  };

  return (
      
         
     
     
   
  <Icon name="camera" style={styles.icon}></Icon>
   
  );
}


const styles = StyleSheet.create({

  icon: {
    fontSize: 74,
    color: "rgba(126,211,33,1)",
    height: 83,
    width: 74,
    marginLeft: 17,
    marginTop: 12
  }
});