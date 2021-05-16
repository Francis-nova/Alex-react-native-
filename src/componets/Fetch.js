import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Fetch = () => {
    const BASE_URL = 'https://dummyapi.io/data/api';
    const APP_ID = '60a066927f11463e38f0ba00';

    const [loading, setloading] = useState(true);
    const [data, setdata] = useState([]);

    useEffect(() => {
        const res = fetch(`${BASE_URL}/post`, {headers: {'app-id': APP_ID}})
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            setdata(data)
            console.log(data)
        })
        
        
    }, [])

    return (
        <View>
            <Text></Text>
        </View>
    )
}

export default Fetch;

const styles = StyleSheet.create({})
