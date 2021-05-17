import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Beneficiary = ({navigation, route}) => {
    const {item} = route.params;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: item.owner.firstName
        })
        
    }, [navigation])


    return (
        <View>
            <Text>{item.owner.firstName}</Text>
        </View>
    )
}

export default Beneficiary

const styles = StyleSheet.create({})
