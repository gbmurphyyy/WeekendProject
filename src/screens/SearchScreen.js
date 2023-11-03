import React from "react";
import { View, Text, StyleSheet, TextInput, Feather} from "react-native";
import SearchHeader from "../components/SearchHeader";

const SearchScreen = () => {
 
    return (
    <View style={styles.container}>
        <Text>{'\n'}</Text>
        <SearchHeader title="Search Products" />
    </View>
)};

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor: '#7CA1B4'
    }
})

export default SearchScreen;