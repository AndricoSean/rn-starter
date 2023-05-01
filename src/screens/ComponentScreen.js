import React from "react";
import { Text, StyleSheet, View } from "react-native";

export const ComponentsScreen = () => {
  const name = "Maddie";

  return (
    <View>
      <Text style={styles.header}>Getting Started with React Native!</Text>
      <Text style={styles.subHeader}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 45,
  },
  subHeader: {
    fontSize: 20,
  },
});
