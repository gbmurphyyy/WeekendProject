import React from "react";
import { View, StyleSheet, Text, ScrollView, Image} from "react-native";
import MainHeader from "../components/MainHeader";
import LipList from "../components/LipList";
import BlushList from "../components/BlushList";

const HomeScreen = () => {
    return (
    <View style={styles.container}>
        <Text>{'\n'}</Text>
            <MainHeader title="Makeup Products"/>
                <Text>{'\n'}</Text>
                <Text style={styles.title}>Lipsticks</Text>
                <Text>{'\n'}</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
            <LipList />
        </ScrollView>
                <Text style={styles.title}>Blushes</Text>
                <Text>{'\n'}</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
            <BlushList />
        </ScrollView>
    </View>
)};

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor: '#7CA1B4',
    },
    title: {
        fontSize:18,
        fontWeight: 'bold',
    }
})

export default HomeScreen;