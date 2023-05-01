import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

export const ImageDetail = (props) => {
  const { title } = props;
  let sourceImage;

  switch (title) {
    case "Forest":
      {
        sourceImage = require("../../../assets/forest.jpg");
      }
      break;
    case "Beach":
      {
        sourceImage = require("../../../assets/beach.jpg");
      }
      break;
    case "Mountain":
      {
        sourceImage = require("../../../assets/mountain.jpg");
      }
      break;
    default:
      sourceImage = require("../../../assets/forest.jpg");
  }

  return (
    <View>
      <Image source={sourceImage} />
      <Text style={styles.header}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 45,
  },
});
