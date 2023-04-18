import React, { useState } from 'react'
import { Alert } from 'react-native';
import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native'
// import IconSetting from './IconSetting';
import { AntDesign } from '@expo/vector-icons';
import RedditList from './RedditList';

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
  },
  input: {
    width: 250,
    height: 40,
    borderWidth: 1,
    marginTop: 20,
    padding: 10
  },
});

let pressHandler = () => {
  console.log('where')
  Alert.alert("hello world guys")
}

export default function App() {
  let [text, setText] = useState('');
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

      <Pressable style={styles.button} onPress={pressHandler}
        onPressIn={() => console.log('press in ')}
        onPressOut={() => console.log('press out ')}
        onLongPress={() => Alert.alert('long press')}
        hitSlop={20} // more rectangle box area to click
      >
        {/* <IconSetting width={16} height={16} color="white"></IconSetting> */}
        < AntDesign name="stepforward" size={16} color="white" />
        <Text style={styles.btnText}>click here</Text>
      </Pressable>

      <TextInput onChangeText={setText} value={text} style={styles.input} placeholder='type here' placeholderTextColor="gray" />
      <Text>{text}</Text>
      <RedditList />
    </View >
  )
}
//notes
//react native's components has no classname props,need to handle with css module
//react native's View component already applied display flex and default flex direction is column


//using svgs
//convert normal svg to react expo svg using https://react-svgr.com/playground/?native=true&typescript=true

//using textinput
// React Native's text input onChangeText can only accept useState setter function directly