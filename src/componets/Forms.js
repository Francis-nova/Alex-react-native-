import React from 'react';
import {  View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

class FormsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>{'Register'.toUpperCase()}</Text>
                <View style={styles.formField}>
                    <Text style={styles.label}>First Name</Text>
                    <TextInput style={styles.input}></TextInput>
                </View>

                <View style={styles.formField}>
                    <Text style={styles.label}>Last Name</Text>
                    <TextInput style={styles.input}></TextInput>
                </View>

                <View style={styles.formField}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput style={styles.input}></TextInput>
                </View>

                <View style={styles.formField}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput style={styles.input}></TextInput>
                </View>

                <TouchableOpacity
                    style={styles.register}
                    onPress={() => this.props.navigation.navigate('Dashboard')}
                >
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ed4a75',
        color: '#fff',
        padding: 40,
        flex: 1
    },
    header: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 100,
    },
    formField: {
        marginTop: 40,
    
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#ddd',
        paddingVertical: 5,
        paddingHorizontal: 10,
        width: '100%'
    },
    label: {
        color: '#f0a9c9',
        fontSize: 13
    },
    register: {
        backgroundColor: "#fff",
        paddingHorizontal: 35,
        paddingVertical: 15,
        marginTop: 50,
        marginBottom: 10,
        borderRadius: 5,
        width: '35%'
        
    }

})

export default FormsScreen;