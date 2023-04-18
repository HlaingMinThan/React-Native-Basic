import React from 'react'
import { View,Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container : {
    alignItems:"center",
    justifyContent:"center",
    flex:1,
  }
});

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
    </View>
  )
}
//notes
//react native's components has no classname props,need to handle with css module
//react native's View component already applied display flex and default flex direction is column