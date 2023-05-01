import React from "react";
import { StyleSheet, View } from "react-native";
import { ImageDetail } from "../components/Images/ImageDetail";

export const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title="Forest" />
      <ImageDetail title="Beach" />
      <ImageDetail title="Mountain" />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 45,
  },
});
