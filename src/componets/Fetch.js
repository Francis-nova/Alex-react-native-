import { AntDesign } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';

const Fetch = () => {
    const BASE_URL = 'https://dummyapi.io/data/api';
    const APP_ID = '60a066927f11463e38f0ba00';

    const [loading, setloading] = useState(true);
    const [data, setdata] = useState([]);

    useEffect(() => {
        const res = fetch(`${BASE_URL}/post?limit=10`, {headers: {'app-id': APP_ID}})
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            setdata(data.data)
            console.log(data.data)
        })
        
        
    }, [])

    return (
        <FlatList 
            numColumns={2}
            keyExtractor={(item) => item.id}
            data={data}
            renderItem={({item}) => (
                <View>
                    <View style={styles.beneficiaries}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{fontSize: 10}}>{`${item.owner.title}`.toUpperCase()} {item.owner.firstName} {item.owner.lastName}</Text>
                            <AntDesign name="edit" size={10} color='#4bd1d7'></AntDesign>
                        </View>
                        <Text style={{fontSize: 10, color: '#888', marginTop: 10}}>{item.owner.email}</Text>
                        <Text style={{fontSize: 10, color: '#888', marginTop: 10}}>Ref ID: <Text style={{fontSize: 8, color: '#555'}}>{item.owner.id}</Text></Text>
                    </View>

                </View>
            )}
        >
        </FlatList>
    )
}

export default Fetch;

const styles = StyleSheet.create({
    beneficiaries: {
        backgroundColor: '#eee',
        padding: 10,
        margin: 10,
        marginLeft: 0,
        textTransform: 'capitalize',
        width: 170,
        height: 100
    }
})
