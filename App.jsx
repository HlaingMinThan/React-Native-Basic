import React from 'react'
import { Alert } from 'react-native';
import { View, Text, StyleSheet, Pressable } from 'react-native'

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
  },
  btnText: {
    color: 'white'
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
        <Text style={styles.btnText}>click here</Text>
      </Pressable>
    </View>
  )
}
//notes
//react native's components has no classname props,need to handle with css module
//react native's View component already applied display flex and default flex direction is column