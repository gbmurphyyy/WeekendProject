import React from "react";
import {Text, View, StyleSheet, Image,} from 'react-native'
import { useSafeAreaInsets } from "react-native-safe-area-context";

const FavHeader = ({title}) => {
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

export default FavHeader;