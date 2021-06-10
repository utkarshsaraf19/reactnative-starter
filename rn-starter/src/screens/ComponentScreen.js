import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ComponentScreen = () => {
return <View>
    <Text style={styles.textStyle}>This is new page</Text>
</View>
};

const styles = StyleSheet.create({
textStyle:{
    fontSize:50
}
});


export default ComponentScreen