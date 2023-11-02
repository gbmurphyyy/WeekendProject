import React, { useState } from "react";
import {FlatList, View, Text, Image, StyleSheet, SafeAreaView} from 'react-native';

const BlushList = props => {
    const [blush, setblush] = useState([
        {blush: 'Pink', id: '1', source: require('../images/blush/babypink.png')},
        {blush: 'Copper', id: '2', source: require('../images/blush/copper.png')},
        {blush: 'Rose', id: '3', source: require('../images/blush/rose.png')},
    ]);

    return (
        <SafeAreaView style={{flex:1}}>
        <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={blush} 
        renderItem={({item}) => {
            return (
                <View style={styles.card}>
                 <Text>{item.blush}</Text>
                    <View style={styles.box}>
                        <Image style={{width: 100, height:100}} source={item.source}/>
                    </View>
                </View>
            );
        }}/>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    card: {
        width: 120,
        height: 120,
    },
    box: {
        width: 100,
        height: 100,
        borderRadius: 50,
        overflow: 'hidden',
    },
})

export default BlushList