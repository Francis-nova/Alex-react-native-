import React, { useLayoutEffect, useState } from 'react';
import {  View, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Input, Switch } from 'react-native-elements';
import {AntDesign, Ionicons, MaterialIcons} from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native';
import { Keyboard } from 'react-native';
import { Platform } from 'react-native';
import { SafeAreaView } from 'react-native';
import { color } from 'react-native-reanimated';

const FormsScreen = ({navigation}) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Sign Up'
        })
       
    }, [navigation])

    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [businessName, setbusinessName] = useState('');
    const [pin, setpin] = useState('');
    const [confirmPin, setconfirmPin] = useState('');
    const [address, setaddress] = useState('');
    const [city, setcity] = useState('');
    const [state, setstate] = useState('');
    const [phoneNumber, setphoneNumber] = useState('');
    const [terms, setterms] = useState(false)



    const [personalDetails, setpersonalDetails] = useState(true)
    const [businessInfo, setbusinessInfo] = useState(false)
    const [createPin, setcreatePin] = useState(false)
    const [loginDetails, setloginDetails] = useState(false)



    const submit = () => {
        const details = {
            firstName,
            lastName,
            email,
            password
        }
        alert(details.lastName, details.email)
        navigation.replace('Dashboard')
    };
    const goToPersonal = () => {
        setpersonalDetails(true);
        setbusinessInfo(false);
        setcreatePin(false);
        setloginDetails(false)
    }

    const goToBiz = () => {
        setpersonalDetails(false);
        setbusinessInfo(true);
        setcreatePin(false);
        setloginDetails(false);
    }

    const goToCreate = () => {
        setbusinessInfo(false);
        setcreatePin(true);
        setloginDetails(false);
        setpersonalDetails(false);
    }

    const goToLoginDetails = () => {
        setcreatePin(false);
        setloginDetails(true);
        setbusinessInfo(false);
        setpersonalDetails(false);
    }
    
    return (
        <SafeAreaView  style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
              
                {personalDetails 
                
                && 
                
                <View>
                    
                    <Text style={styles.header}>{'Personal Details'.toUpperCase()}</Text>
                    <View style={styles.formField}>
                        <View style={{flexDirection: 'row', justifyContent: 'center', textAlign: 'center'}}>
                            <Ionicons name="person" style={styles.inputIcon} color="#4bd1d7"></Ionicons>
                            <Input 
                                style={styles.input} 
                                type="text"
                                value={lastName} 
                                placeholder="Last Name"
                                placeholderTextColor="#fff"
                                placeholderStyle={{fontSize: 10}}
                                onChangeText={(val) => setlastName(val)}>
                            </Input>
                        </View>
                    </View>

                    <View style={styles.formField}>
                        <View style={{flexDirection: 'row', justifyContent: 'center', textAlign: 'center'}}>
                            <Ionicons name="person" style={styles.inputIcon} color="#4bd1d7"></Ionicons>
                            <Input 
                                style={styles.input} 
                                type="number"
                                value={phoneNumber} 
                                placeholder="Phone Number"
                                placeholderTextColor="#fff"
                                placeholderStyle={{fontSize: 10}}
                                onChangeText={(val) => setphoneNumber(val)}>
                            </Input>
                        </View>
                    </View>

                    <View style={{flexDirection: 'row', marginTop: 160}}>
                        <TouchableOpacity activeOpacity={0.5} style={styles.backHome} onPress={() => navigation.replace('Home')}>
                            <AntDesign  style={styles.backHomeText} name="arrowleft" size={15} color="white"></AntDesign>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            style={styles.register}
                            onPress={goToBiz}
                        >
                            <Text style={styles.registerText}>Next <AntDesign name="arrowright" size={15}></AntDesign></Text>
                        </TouchableOpacity>
                    </View>
                </View>
                }
               

                {businessInfo 
                
                &&
                <View>

                    <Text style={styles.header}>{'Business Information'.toUpperCase()}</Text>
                    <View style={styles.formField}>
                        <View style={{flexDirection: 'row', justifyContent: 'center', textAlign: 'center'}}>
                            <Ionicons name="person" style={styles.inputIcon} color="#4bd1d7"></Ionicons>
                            <Input 
                                style={styles.input} 
                                type="text"
                                value={businessName} 
                                placeholder="Business Name"
                                placeholderTextColor="#fff"
                                placeholderStyle={{fontSize: 10}}
                                onChangeText={(val) => setbusinessName(val)}>
                            </Input>
                        </View>
                    </View>

                    <View style={styles.formField}>
                        <View style={{flexDirection: 'row', justifyContent: 'center', textAlign: 'center'}}>
                            <Ionicons name="person" style={styles.inputIcon} color="#4bd1d7"></Ionicons>
                            <Input 
                                multiline
                                style={styles.input} 
                                type="text"
                                value={address} 
                                placeholder="Address"
                                placeholderTextColor="#fff"
                                placeholderStyle={{fontSize: 10}}
                                onChangeText={(val) => setaddress(val)}>
                            </Input>
                        </View>
                    </View>

                    <View style={styles.formField}>
                        <View style={{flexDirection: 'row', justifyContent: 'center', textAlign: 'center'}}>
                            <Ionicons name="person" style={styles.inputIcon} color="#4bd1d7"></Ionicons>
                            <Input 
                                style={styles.input} 
                                type="text"
                                value={city} 
                                placeholder="City"
                                placeholderTextColor="#fff"
                                placeholderStyle={{fontSize: 10}}
                                onChangeText={(val) => setcity(val)}>
                            </Input>
                        </View>
                    </View>

                    <View style={styles.formField}>
                        <View style={{flexDirection: 'row', justifyContent: 'center', textAlign: 'center'}}>
                            <Ionicons name="person" style={styles.inputIcon} color="#4bd1d7"></Ionicons>
                            <Input 
                                style={styles.input} 
                                type="text"
                                value={state} 
                                placeholder="State"
                                placeholderTextColor="#fff"
                                placeholderStyle={{fontSize: 10}}
                                onChangeText={(val) => setstate(val)}>
                            </Input>
                        </View>
                    </View>

                    <View style={{flexDirection: 'row', marginTop: 50}}>
                        <TouchableOpacity activeOpacity={0.5} style={styles.backHome} onPress={goToPersonal}>
                            <AntDesign  style={styles.backHomeText} name="arrowleft" size={15} color="white"></AntDesign>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            style={styles.register}
                            onPress={goToCreate}
                        >
                            <Text style={styles.registerText}>Next <AntDesign name="arrowright" size={15}></AntDesign></Text>
                        </TouchableOpacity>
                    </View>
                </View>
                }

                {createPin 
                    &&

                    <View>

                    <Text style={styles.header}>{'Create your four digit pin'.toUpperCase()}</Text>
                    <View style={styles.formField}>
                        <View style={{flexDirection: 'row', justifyContent: 'center', textAlign: 'center'}}>
                            <MaterialIcons name="lock" style={styles.inputIcon} color="#4bd1d7"></MaterialIcons>
                            <Input 
                                style={styles.input} 
                                type="number"
                                value={pin} 
                                placeholder="Pin"
                                secureTextEntry
                                placeholderTextColor="#fff"
                                placeholderStyle={{fontSize: 10}}
                                onChangeText={(val) => setpin(val)}>
                            </Input>
                        </View>
                    </View>

                    <View style={styles.formField}>
                        <View style={{flexDirection: 'row', justifyContent: 'center', textAlign: 'center'}}>
                            <MaterialIcons name="lock" style={styles.inputIcon} color="#4bd1d7"></MaterialIcons>
                            <Input 
                                style={styles.input} 
                                type="number"
                                value={confirmPin} 
                                placeholder="Confirm Pin"
                                secureTextEntry
                                placeholderTextColor="#fff"
                                placeholderStyle={{fontSize: 10}}
                                onChangeText={(val) => setconfirmPin(val)}>
                            </Input>
                        </View>
                    </View>


                    <View style={{flexDirection: 'row', marginTop: 50}}>
                        <TouchableOpacity activeOpacity={0.5} style={styles.backHome} onPress={goToBiz}>
                            <AntDesign  style={styles.backHomeText} name="arrowleft" size={15} color="white"></AntDesign>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            style={styles.register}
                            onPress={goToLoginDetails}
                        >
                            <Text style={styles.registerText}>Next <AntDesign name="arrowright" size={15}></AntDesign></Text>
                        </TouchableOpacity>
                    </View>
                </View>   
                }

                {loginDetails
                &&
                <View>
                    <Text style={styles.header}>{'Log in details'.toUpperCase()}</Text>
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

                    <View style={{flexDirection: 'row', marginLeft: -15, marginTop: 50, justifyContent: 'center'}}>
                        <Switch value={terms} color="#0c4c4f" onValueChange={((terms) => setterms(terms))}/><Text style={{fontSize: 13, marginTop: 3}}>I have read and accept the terms and conditions</Text>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity activeOpacity={0.5} style={styles.backHome} onPress={goToCreate}>
                            <AntDesign  style={styles.backHomeText} name="arrowleft" size={15} color="white"></AntDesign>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            style={styles.register}
                            onPress={submit}
                        >
                            <Text style={styles.registerText}>Next <AntDesign name="arrowright" size={15}></AntDesign></Text>
                        </TouchableOpacity>
                    </View>
                </View>
                }

                <View style={{height: 100}}></View>
            </KeyboardAvoidingView>
        </SafeAreaView>
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
    label: {
        color: '#fff',
        fontSize: 13,
        marginLeft: 10
        
    },
    register: {
        backgroundColor: "#fff",
        paddingHorizontal: 35,
        paddingVertical: 15,
        marginTop: 50,
        marginBottom: 10,
        borderRadius: 5,
        width: 270,
        marginLeft: 10,
        justifyContent: 'center'
        
    },
    registerText: {
        textAlign: 'center'
    },
    backHome: {
        backgroundColor: "#0c4c4f",
        marginTop: 50,
        marginBottom: 10,
        borderRadius: 5,
        width: 50,
        marginLeft: -18,
        height: 60,
        justifyContent: 'center',
        textAlign: 'center'
    },
    backHomeText: {
        textAlign: 'center'
    }

})

export default FormsScreen;