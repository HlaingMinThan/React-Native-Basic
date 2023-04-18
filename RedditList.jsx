import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet, StatusBar, SafeAreaView } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
})

export default function RedditList() {

    let [redditDatas, setRedditDatas] = useState([]);

    useEffect(() => {
        fetch('https://reddit.com/r/aww.json').then(res => res.json())
            .then(data => {
                setRedditDatas(data.data.children)
            });
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                style={{ padding: 30 }}
                data={redditDatas}
                renderItem={({ item }) => <Text style={{ marginTop: 20 }}>{item.data.title}</Text>}
                keyExtractor={item => item.data.id}
            />
        </SafeAreaView>
    )
}
