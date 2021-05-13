import React, { useLayoutEffect, useState } from 'react';
import {  View, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Input } from 'react-native-elements';
import {AntDesign, Ionicons, MaterialIcons} from '@expo/vector-icons';

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
        alert(details.firstName, details.lastName)
        navigation.replace('Dashboard')
    };
    const goToPersonal = () => {
        setpersonalDetails(true);
        setbusinessInfo(false);
    }

    const goToBiz = () => {
        setpersonalDetails(false);
        setbusinessInfo(true);
    }

    const goToCreate = () => {
        setbusinessInfo(false);
        setcreatePin(true);
    }

    const goToLoginDetails = () => {
        setcreatePin(false);
        setloginDetails(true);
    }
    
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
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
                        <Ionicons name="person" style={styles.inputIcon} color="#4bd1d7"></Ionicons>
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
                        <Ionicons name="person" style={styles.inputIcon} color="#4bd1d7"></Ionicons>
                        <Input 
                            style={styles.input} 
                            type="number"
                            value={confirmPin} 
                            placeholder="Address"
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
            </View>
            }

            {/* <View style={styles.formField}>
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
            </View> */}

            

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