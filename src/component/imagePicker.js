import { launchImageLibrary } from 'react-native-image-picker'
import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'
globalThis.launch = launchImageLibrary
console.log(launchImageLibrary)
const ImagePickButton = ({ width }) => {
  const handlePress = (type) => {
    let options = {
      mediaType: 'photo',
    };
    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      console.log('base64 -> ', response.base64);
      console.log('uri -> ', response.uri);
      console.log('width -> ', response.width);
      console.log('height -> ', response.height);
      console.log('fileSize -> ', response.fileSize);
      console.log('type -> ', response.type);
      console.log('fileName -> ', response.fileName);
    });
  }
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[styles.buttonStyle, {width}]}
      onPress={() => handlePress('photo')}>
      <Text style={styles.textStyle}>ChooseImage</Text>
    </TouchableOpacity>
  )
}
export default ImagePickButton
// Type 2: Persistent datastore with manual loading


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    padding: 10,
    color: 'black',
    textAlign: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 5,
    marginVertical: 10,
    width: 250,
  },
  imageStyle: {
    width: 200,
    height: 200,
    margin: 5,
  },
});