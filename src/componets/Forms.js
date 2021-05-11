import React, { useState } from 'react';
import {  View, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Input } from 'react-native-elements';

const FormsScreen = ({navigation}) => {
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const submit = () => {
        const details = {
            firstName,
            lastName,
            email,
            password
        }
        alert(details.firstName, details.lastName)
        navigation.replace('Dashboard')
    };
    
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Text style={styles.header}>{'Register'.toUpperCase()}</Text>
            <View style={styles.formField}>
                <Text style={styles.label}>First Name</Text>
                <Input 
                    style={styles.input} 
                    type="text"
                    autoFocus
                    value={firstName} 
                    onChangeText={(val) => setfirstName(val)}>
                </Input>
            </View>

            <View style={styles.formField}>
                <Text style={styles.label}>Last Name</Text>
                <Input 
                    style={styles.input} 
                    type="text"
                    value={lastName} 
                    onChangeText={(val) => setlastName(val)}>
                </Input>
            </View>

            <View style={styles.formField}>
                <Text style={styles.label}>Email</Text>
                <Input 
                    style={styles.input} 
                    type="email"
                    value={email} 
                    onChangeText={(val) => setemail(val)}>
                </Input>
            </View>

            <View style={styles.formField}>
                <Text style={styles.label}>Password</Text>
                <Input 
                    style={styles.input} 
                    type="password"
                    value={password} 
                    secureTextEntry
                    onChangeText={(val) => setpassword(val)}
                    onSubmitEditing={submit}>
                </Input>
            </View>

            <TouchableOpacity
                style={styles.register}
                onPress={submit}
            >
                <Text>Submit</Text>
            </TouchableOpacity>
            <View style={{height: 100}}></View>
        </KeyboardAvoidingView>
    );

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
        fontWeight: 'normal',
    },
    formField: {
        marginTop: 40,
    
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#ddd',
        paddingVertical: 5,
        paddingHorizontal: 10,
        width: '100%',
        marginLeft: -10
    },
    label: {
        color: '#f0a9c9',
        fontSize: 13,
    },
    register: {
        backgroundColor: "#fff",
        paddingHorizontal: 35,
        paddingVertical: 15,
        marginTop: 50,
        marginBottom: 10,
        borderRadius: 5,
        width: '38%'
        
    }

})

export default FormsScreen;