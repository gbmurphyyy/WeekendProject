import React, { useState } from "react";
import {Text, View, StyleSheet, SearchBar, TextInput, SafeAreaView} from 'react-native';

const SearchFilter = () => {

    const [searchQuery, setSearchQuery] = useState("");

    return (
        <SafeAreaView style={{flex:1, marginHorizontal: 20}}>
            <TextInput 
            placeholder="Type Here..." 
            clearButtonMode="always"
            style={styles.container}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(query) => handleSearch(query)}
            />                
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
container:{
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: "row",
        backgroundColor: "#d9dbda",
        borderColor: "#ccc",
        borderRadius: 8,
        borderWidth:1,
    },
})

export default SearchFilter

