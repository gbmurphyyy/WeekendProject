import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import FavHeader from "../components/FavHeader";

const FavScreen = () => {
    return (
    <View style={styles.container}>
        <Text>{'\n'}</Text>
        <FavHeader title="Favorite Products" />
        <Text>{'\n'}</Text>
    </View>
)};

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor: '#7CA1B4'
    }
})

export default FavScreen;