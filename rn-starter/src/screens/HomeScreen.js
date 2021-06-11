import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  console.log(navigation);
  const componentText = "Go To Components Screen";
  const listText = "Go To List Screen";
  const imageText = "Go To Image Screen";

  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        onPress={() => navigation.navigate("Component")}
        title={componentText}
      />
      <Button onPress={() => navigation.navigate("List")} title={listText} />
      <Button onPress={() => navigation.navigate("Image")} title={imageText} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
