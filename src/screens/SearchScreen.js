import React from "react";
import { View, Text, StyleSheet, TextInput, Feather} from "react-native";
import SearchHeader from "../components/SearchHeader";
import SearchFilter from "../components/SearchFilter";
import TabNav from "../navigation/TabNav";

const SearchScreen = () => {
 
    return (
    <View style={styles.container}>
        <Text>{'\n'}</Text>
    </View>
)};

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor: '#7CA1B4'
    }
})

export default SearchScreen;