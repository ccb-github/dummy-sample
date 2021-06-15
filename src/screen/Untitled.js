import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";

export default function Untitled(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}></View>
      <View style={styles.rect2}>
        <View style={styles.imageRow}>
          <Image
            source={require("../assets/images/IMG_0007.PNG")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
          <Icon name="camera" style={styles.icon}></Icon>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    width: 337,
    height: 575,
    backgroundColor: "#E6E6E6",
    marginTop: 61,
    marginLeft: 19
  },
  rect2: {
    width: 337,
    height: 134,
    backgroundColor: "#E6E6E6",
    flexDirection: "row",
    marginLeft: 19
  },
  image: {
    width: 115,
    height: 107
  },
  icon: {
    fontSize: 74,
    color: "rgba(126,211,33,1)",
    height: 83,
    width: 74,
    marginLeft: 17,
    marginTop: 12
  },
  imageRow: {
    height: 107,
    flexDirection: "row",
    flex: 1,
    marginRight: 131,
    marginTop: 13
  }
});

export default Untitled;
