import { AntDesign } from '@expo/vector-icons';
import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Input, Button} from 'react-native-elements';

const Beneficiary = ({navigation, route}) => {
    const BASE_URL = 'https://dummyapi.io/data/api';
    const APP_ID = '60a066927f11463e38f0ba00';

    const {item} = route.params;

    const [first, setfirst] = useState(item.owner.firstName);
    const [second, setsecond] = useState(item.owner.lastName);
    const [email, setemail] = useState(item.owner.email);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: item.owner.firstName
        })
        
    }, [navigation])

    const updateInfo = () => {
        alert('Beneficiary Updated',)
        navigation.replace('Dashboard')
    }

    const deleteBen = () => {
        alert('Beneficiary Deleted',)
        navigation.replace('Dashboard')
    }


    return (
        <View style={styles.container}>
            <View style={styles.card}>
                {/* <Text>Name: {item.owner.firstName} {item.owner.lastName}</Text>
                <Text>Name: </Text> */}
                <View style={styles.inputRow}>
                    <View style={{flex: 1}}>
                        <Text style={styles.label}>First Name</Text>
                        <Input
                            style={styles.input}
                            value={first}
                            onChangeText={(val) => setfirst(val)}
                        ></Input>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={styles.label}>Last Name</Text>
                        <Input
                            style={styles.input}
                            value={second}
                            onChangeText={(val) => setsecond(val)}
                        ></Input>
                    </View>
                </View>
                <View>
                    <Text style={styles.label}>Email</Text>
                    <Input
                        style={styles.input}
                        value={email}
                        onChangeText={(val) => setemail(val)}
                    ></Input>
                </View>
                <View>
                    <Text style={styles.label}>Referral Code:</Text>
                    <Text style={{color: '#aaa', marginTop: 10, fontSize: 15, marginLeft: 10, letterSpacing: 1}}>{item.owner.id} </Text>
                </View>
                <View style={styles.buttonRow}>
                    <Button 
                        titleStyle={{fontSize: 10, marginLeft: 5, color: '#fff' }}
                        buttonStyle={{backgroundColor: '#4bd1d7'}}
                        icon={
                            <AntDesign
                              name="edit"
                              size={10}
                              color="#fff"
                            />
                          } 
                        style={styles.update} 
                        title="Update Info"
                        onPress={updateInfo}
                    ></Button>
                    <Button
                        titleStyle={{fontSize: 10, marginLeft: 5, color: '#4bd1d7' }}
                        buttonStyle={{borderColor: '#4bd1d7'}}
                        icon={
                            <AntDesign
                              name="delete"
                              size={10}
                              color="#4bd1d7"
                            />
                          } 
                        style={styles.delete} 
                        title="Delete Beneficiary"
                        type="outline"
                        onPress={deleteBen}
                    ></Button>
                </View>
            </View>
        </View>
    )
}

export default Beneficiary

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    },
    card: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#eee',
        shadowColor: '#ddd',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.1,
        shadowRadius: 7,
        
    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        fontSize: 12,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    label: {
        fontSize: 13,
        marginLeft: 10
    },
    copy: {
        fontSize: 17,
    }, 
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 45,
        marginBottom: 10
    },
    update: {
        fontSize: 12,
        backgroundColor: '#4bd1d7'
    }
})
