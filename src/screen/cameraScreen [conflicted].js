import React, { useState, useEffect } from 'react';

import { View, Image, Platform, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper'

import { BarCodeScanner } from 'expo-barcode-scanner';



import ImagePickButton from '../component/imagePickerExpo'

const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(true);
  const [scanned, setScanned] = useState(false);
  const [imageSource, setImageSource] = useState(null);

  useEffect(() => {
    (async () => {

      if (Platform.OS === 'web') {
        Alert.alert('This is web')
        return
      }

      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    globalThis.data = data
    console.log(data)
  };

  if (Platform.OS === 'web') {
    return (
      <Text>Web do not have camera</Text>
    )
  }
  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  console.log("The source", imageSource)
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.cameraScreen}>
        {/* {imageSource ? */}
        {/* <Image source={{ uri: null }}></Image>: */}

        <BarCodeScanner style={styles.barCodeScanner}
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        />
        {
          scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />
        }
      </View>
      <View style={[styles.bottomBar, { flexDirection: 'row', backgroundColor: 'white' }]}>
        <Image
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
          resizeMode="contain"
          style={styles.image}>
        </Image>
        <ImagePickButton setImageSource={setImageSource} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  cameraScreen: {
    width: '100%',
    flex: 6,
    borderColor: 'black',
    borderWidth: 2,
  },
  barCodeScanner: {
    width: '100%',
    height: '100%'
  }
  ,
  bottomBar: {
    backgroundColor: 'black',
    width: '100%',

    alignItems: 'center',
    flex: 2,

  },
  image: {
    height: 100,
    aspectRatio: 1,
    borderColor: 'black',
    borderWidth: 1,
  }

})
export default CameraScreen
