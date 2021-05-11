import React from 'react';
import {  View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { color } from 'react-native-reanimated';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <View>
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
                        <View style={styles.cards}>
                            <Text style={styles.white}>Active Cards</Text>
                            <Text style={styles.white, styles.balanceAmount}>3</Text>
                        </View>
                        <View style={styles.editprofile}>
                            <TouchableOpacity 
                                style={styles.edit}
                                onPress={() => this.props.navigation.navigate('Profile')}>
                                <Text>Edit ID</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.cards}>
                        <View style={styles.cardOne}>
                            <View style={styles.cardDetail}>
                                <View>
                                    <Text style={styles.cardBalance}>Card Balance</Text>
                                    <Text style={styles.cardAmount}>$9,324</Text>
                                </View>
                                <View>
                                    <Text style={styles.companyName}>Company Name</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={styles.cardNumber}>**** **** **** ****</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
         );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ed4a75',
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
        color: '#d9d6d6',
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
        color: '#d9d6d6'
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
    cardOne: {
        backgroundColor: '#f0e8e8',
        borderRadius: 10,
        padding: 20,
        margin: 20,
        marginTop: 50,
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
        color: '#d96483'
    },
    cardNumber: {
        fontWeight: 'bold',
        letterSpacing: 4
    }, 
    companyName: {
        color: '#c7c5c5'
    }
});
 
export default Dashboard;