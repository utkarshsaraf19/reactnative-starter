import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  console.log(props.navigation);
  const componentText = "Go To Components Screen";
  const listText = "Go To List Screen";
  return <View>
    <Text style={styles.text}>HomeScreen</Text>
    <Button 
    onPress={() => props.navigation.navigate("Component")}
    title={componentText} 
    />
    <TouchableOpacity
    onPress={() => props.navigation.navigate("List")}
    >
      <Text>{listText}</Text>
      <Text>{listText}</Text>
      <Text>{listText}</Text>
    </TouchableOpacity>
    </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
