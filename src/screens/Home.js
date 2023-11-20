import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import LipList from "../components/LipList";
import BlushList from "../components/BlushList";
import Cart from './Cart';

// const itemList = [
//     {name: 'Lipstick', details: 'Red', price: '$15'},
//     {name: 'Lipstick', details: 'Peach', price: '$15'},
//     {name: 'Blush', details: 'Copper', price: '$12'},
//     {name: 'Blush', details: 'Pink', price: '$12'},
// ];

const Home = () => {
    return (
        <View style={styles.root}>
            <Text style={styles.title}>Hello there!</Text>
            <Text style={styles.intro}>PRODUCTS</Text>
                <Text style={styles.subtitle}>Lipsticks</Text>
                <Text>{'\n'}</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
            <LipList />
        </ScrollView>
                <Text style={styles.subtitle}>Blushes</Text>
                <Text>{'\n'}</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
            <BlushList />
        </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
      },
    
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#800000',
        margin: 10,
      },

      intro: {
        fontSize: 20,
        color: 'black'
      },

      subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginRight: 250,
      }
});
export default Home;