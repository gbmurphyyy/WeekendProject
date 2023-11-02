import React from "react";
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native'
import { useSafeAreaInsets } from "react-native-safe-area-context";

const MainHeader = ({title}) => {
    const insets = useSafeAreaInsets();
    return (
        <View style={[styles.container, {marginTop: insets.top}]}>
            <Text style={styles.title}>{title}</Text>          
        </View>
    )
}

const styles =StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
    }
})

export default MainHeader;