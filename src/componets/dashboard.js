import React from 'react';
import { ImageBackground } from 'react-native';
import {  View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';
import { FlatList } from 'react-native';
import img from '../img/vincent.jpg';
import { AntDesign } from '@expo/vector-icons';
import useFetch from './useFetch';

const Dashboard = ({navigation} ) => {

    const {error, loading, data} = useFetch();

    const viewItem = (id) => {
        var id = id;
    }
    
    return ( 
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>{'Dashboard'.toUpperCase()}</Text>
                    <Text style={styles.greeting}>Good Afternoon, Francis</Text>
                </View>
                <View style={styles.details}>
                    <View style={styles.balance}>
                        <Text style={styles.white}>Wallet Balance</Text>
                        <Text style={styles.white, styles.balanceAmount}>$9,324</Text>
                    </View>
                    <View>
                        <Text style={styles.white}>Active Cards</Text>
                        <Text style={styles.white, styles.balanceAmount}>3</Text>
                    </View>
                    <View style={styles.editprofile}>
                        <TouchableOpacity 
                            style={styles.edit}
                            onPress={() => navigation.navigate('Profile')}>
                            <Text>Edit ID</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.cards}>
                    <ImageBackground source={img} style={styles.background}>
                        <View style={styles.cardOne}>
                            <View style={styles.cardDetail}>
                                <View>
                                    <Text style={styles.cardBalance}>Card Balance</Text>
                                    <Text style={styles.cardAmount}>$9,322</Text>
                                </View>
                                <View>
                                    <Text style={styles.companyName}>Company Name</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={styles.cardNumber}>**** **** **** ****</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View style={{backgroundColor: '#fff', padding: 20}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 10}}>{'Beneficiaries'.toUpperCase()}</Text>
                    <FlatList 
                        numColumns={2}
                        keyExtractor={(item) => item.id}
                        data={data}
                        renderItem={({item}) => (
                            <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('BenDetails', {item})}>
                                <View style={styles.beneficiaries}>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                        <Text style={{fontSize: 10}}>{`${item.owner.title}`.toUpperCase()} {item.owner.firstName} {item.owner.lastName}</Text>
                                        <AntDesign name="edit" size={10} color='#4bd1d7' onPress={() => navigation.navigate('BenDetails', item)}></AntDesign>
                                    </View>
                                    <Text style={{fontSize: 10, color: '#888', marginTop: 10}}>{item.owner.email}</Text>
                                    <Text style={{fontSize: 10, color: '#888', marginTop: 10}}>Ref ID: <Text style={{fontSize: 8, color: '#555'}}>{item.owner.id}</Text></Text>
                                </View>

                            </TouchableOpacity>
                        )}
                    >
                    </FlatList>
                </View>
            </View>
        </ScrollView>
        );

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4bd1d7',
        // flex: 1
    },
    header: {
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        padding: 20,
    },
    headerText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
    },
    greeting: {
        fontSize: 13,
        color: '#4c838c',
        marginBottom: 20
    },
    details: {
        marginTop: 20,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    balance: {
        color: '#fff'
    },
    white: {
        color: '#4c838c'
    },
    balanceAmount: {
        fontSize: 30,
        color: '#fff'
    },
    edit: {
        backgroundColor: '#fff',
        paddingVertical: 15,
        paddingHorizontal: 35,
        borderRadius: 5
    },
    cardDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 80
    },
    cardBalance: {
        color: '#b6b4b4',
        fontSize: 12
    },
    cardAmount: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#2f9188'
    },
    cardNumber: {
        fontWeight: 'bold',
        letterSpacing: 4
    }, 
    companyName: {
        color: '#c7c5c5'
    },
    cards: {
        backgroundColor: '#f0e8e8',
        borderRadius: 10,
        margin: 20,
        marginTop: 50,
        overflow: 'hidden',
        height: 200
    },
    background: {
        resizeMode: 'cover',
       
    },
    cardOne: {
        backgroundColor: 'rgba(255,255,255,.8)',
        padding: 20,
        height: '100%'
    },
    beneficiaries: {
        backgroundColor: '#eee',
        padding: 10,
        margin: 10,
        marginLeft: 0,
        textTransform: 'capitalize',
        width: 170,
        height: 100
    }
});
 
export default Dashboard;