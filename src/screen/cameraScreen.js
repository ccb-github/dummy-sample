import React, {useState, useEffect} from 'react';

import { View, Image, Platform, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper'

import { BarCodeScanner } from 'expo-barcode-scanner';



import ImagePickButton from '../component/imagePickerExpo' 

const CameraScreen = ({navigation}) => {
  const [hasPermission, setHasPermission] = useState(true);
  const [scanned, setScanned] = useState(false);
  const [imageSource, setImageSource] = useState(null);
 
  useEffect(() => {
    (async () => {
    
      if(Platform.OS === 'web'){
        Alert.alert('This is web')
        return 
      }
      
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);  
  
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
  };

  if(Platform.OS === 'web'){
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

    return (
      <View style={styles.container}>
        <View style={styles.cameraContainer}>
     
        <BarCodeScanner style={styles.cameraScreen}
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        />
        {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
        </View>
          <View style={[styles.rect2]}>
          <Image style={styles.image}></Image>
        <ImagePickButton setImageSource={setImageSource}/>
        </View>
      </View>
    )
  }
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"    
  },
  cameraContainer: {
    width: 337,
    flex: 3,
    backgroundColor: "#E6E6E6",
    marginTop: 61,
    marginLeft: 19
  },
  rect2: {
    width: 337,
    flex: 1,
    backgroundColor: "#E6E6E6",
    flexDirection: "row",
    marginLeft: 19
  },
  image: {
    width: 115,
    height: 107
  },
 
  imageRow: {
    height: 107,
    flexDirection: "row",
    flex: 1,
    marginRight: 131,
    marginTop: 13
  }
});

 export default CameraScreen
