import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

export const NavButton = (props) => {
  const { navigate, screen, title } = props;

  return (
    <View>
      <TouchableOpacity onPress={() => navigate(screen)}>
        <Text style={styles.btnText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btnText: {
    marginTop: 10,
    fontSize: 20,
  },
});
