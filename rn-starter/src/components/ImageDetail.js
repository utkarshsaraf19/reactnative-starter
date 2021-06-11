import React from "react";
import { Text, View, TextStyle, Image } from "react-native";

const ImageDetail = (props) => {
  console.log(props);
  return (
    <View>
      <Image>{props.imageSource}</Image>
      <Text>{props.title}</Text>
    </View>
  );
};

export default ImageDetail;
