import React from "react";
import { StyleSheet, View } from "react-native";
import { NavButton } from "../components/Navigate/NavButton";

const HomeScreen = (props) => {
  const { navigate } = props.navigation;

  return (
    <View style={styles.layout}>
      <NavButton
        navigate={navigate}
        screen="Components"
        title="Go to Components Demo"
      />
      <NavButton navigate={navigate} screen="List" title="Go to List Demo" />
      <NavButton navigate={navigate} screen="Image" title="Go to Image Demo" />
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    alignItems: "center",
  },
});

export default HomeScreen;
