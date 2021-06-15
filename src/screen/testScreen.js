import React, { useEffect, useState } from 'react'
import { Button, Text, View } from 'react-native'
import firebase from '../../firebaseApp'



const TestScreen = (props) => {
  const detailData = useState(null)
  useEffect(() => {
    firebase.firestore().collection('records').doc('UctFQ2Uo64owA5nLcmsu').get()
      .then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
      console.log("Error getting document:", error);
      });
  }, []);  

  return(
    <View>
      
    </View>
  )
}


export default TestScreen