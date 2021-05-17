import React, { useLayoutEffect, useState } from 'react';
import {  View, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Input } from 'react-native-elements';
import {AntDesign, Ionicons, MaterialIcons} from '@expo/vector-icons';

const Login = ({navigation}) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            title: ''
        })
       
    }, [navigation])

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const submit = () => {
        const details = {
            email,
            password
        }
        navigation.replace('Dashboard')
    };
    
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Text style={styles.header}>{'Sign In'.toUpperCase()}</Text>
            <View style={styles.formField}>
                <View style={{flexDirection: 'row', justifyContent: 'center', textAlign: 'center'}}>
                    <Ionicons name="person" style={styles.inputIcon} color="#4bd1d7"></Ionicons>
                    <Input 
                        style={styles.input} 
                        type="text"
                        value={email} 
                        placeholder="Email"
                        placeholderTextColor="#fff"
                        placeholderStyle={{fontSize: 10}}
                        onChangeText={(val) => setemail(val)}>
                    </Input>
                </View>
            </View>

            <View style={styles.formField}>
                <View style={{flexDirection: 'row', justifyContent: 'center', textAlign: 'center'}}>
                    <MaterialIcons name="lock" style={styles.inputIcon} color="#4bd1d7"></MaterialIcons>
                    <Input 
                        style={styles.input} 
                        type="password"
                        value={password} 
                        placeholder="Password"
                        secureTextEntry
                        placeholderTextColor="#fff"
                        placeholderStyle={{fontSize: 10}}
                        onChangeText={(val) => setpassword(val)}>
                    </Input>
                </View>
            </View>

            <TouchableOpacity
                activeOpacity={0.5}
                style={styles.login}
                onPress={submit}
            >
                <Text style={styles.loginText}>Sign in <AntDesign name="arrowright" size={15}></AntDesign></Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} style={styles.forgot}>
                <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.5} style={styles.create} onPress={() => navigation.navigate('Form')}>
                <Text style={styles.createText}>Create an account</Text>
            </TouchableOpacity>
            <View style={{height: 100}}></View>
        </KeyboardAvoidingView>
    );

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4bd1d7',
        color: '#fff',
        padding: 40,
        flex: 1
    },
    header: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'normal',
        fontFamily: 'OpenSans'
    },
    formField: {
        marginTop: 40,
        width: 300
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#fff',
        paddingVertical: 5,
        paddingHorizontal: 10,
        fontSize: 14,
        color: '#fff'
    },
    inputIcon: {
        height: 41,
        width: 30, 
        textAlign: 'center', 
        justifyContent:'center',
        alignContent: 'center',
        paddingTop: 14,
        borderRadius: 10, 
        backgroundColor: '#fff'
    },
    login: {
        backgroundColor: "#fff",
        marginTop: 50,
        marginBottom: 10,
        borderRadius: 5,
        width: '90%',
        marginLeft: 10,
        height: 60,
        justifyContent: 'center',
        textAlign: 'center'
    },
    loginText: {
        textAlign: 'center',
        fontSize: 15
    },
    forgot: {
        marginTop: 18
    },
    forgotText: {
        textAlign: 'center',
        color: '#fff'
    },
    create: {
        backgroundColor: "#0c4c4f",
        marginTop: 50,
        marginBottom: 10,
        borderRadius: 5,
        width: '90%',
        marginLeft: 10,
        height: 60,
        justifyContent: 'center',
        textAlign: 'center'
    },
    createText: {
        textAlign: 'center',
        fontSize: 15,
        color: '#fff'
    }
})

export default Login;