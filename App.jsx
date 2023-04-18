import React from 'react'
import { Alert } from 'react-native';
import { View, Text, StyleSheet, Pressable } from 'react-native'
import IconSetting from './IconSetting';

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  button: {
    paddingHorizontal: 6,
    paddingVertical: 4,
    backgroundColor: "red",
    borderRadius: 50,
    display: "flex",
    flexDirection: "row"
  },
  btnText: {
    color: 'white',
    marginLeft: 6
  }
});

let pressHandler = () => {
  Alert.alert("hello world guys")
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        hello world
      </Text>
      <Text>
        hello world
      </Text>
      <Text>
        hello world
      </Text>

      <Pressable style={styles.button} onPress={pressHandler}>
        <IconSetting width={16} height={16} color="white"></IconSetting>
        <Text style={styles.btnText}>click here</Text>
      </Pressable>
    </View>
  )
}
//notes
//react native's components has no classname props,need to handle with css module
//react native's View component already applied display flex and default flex direction is column


//using svgs
//convert normal svg to react expo svg using https://react-svgr.com/playground/?native=true&typescript=true