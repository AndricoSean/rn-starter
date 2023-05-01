import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

export const ListScreen = () => {
  const friends = [
    { id: "1", name: "Sean", age: 20 },
    { id: "2", name: "Andrico", age: 21 },
    { id: "3", name: "Maddie", age: 22 },
    { id: "4", name: "Madeline", age: 23 },
    { id: "5", name: "BigD", age: 24 },
    { id: "6", name: "Dee", age: 25 },
    { id: "7", name: "Dee Dee", age: 26 },
  ];
  return (
    <View style={styles.layout}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        //horizontal
        showsVerticalScrollIndicator={false}
        keyExtractor={(friend) => friend.id}
        data={friends}
        renderItem={({ item }) => {
          return (
            <Text style={styles.textStyle}>
              {item.name} - Age {item.age}
            </Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
  layout: {
    alignItems: "center",
  },
});
