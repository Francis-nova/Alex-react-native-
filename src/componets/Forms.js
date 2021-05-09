import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';


class FormsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    submit() {
        
    }

    getData(){
        console.log('erwfhuwbfh');
    }

    componentDidMount(){
        
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>{'Login'.toUpperCase()}</Text>
                <View style={styles.formField}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput style={styles.input} onChangeText={(email) => this.setState({ email })} placeholder={"Email"}></TextInput>
                </View>

                <View style={styles.formField}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput style={styles.input} onChangeText={(password) => this.setState({ password })} placeholder={"Password"}></TextInput>
                </View>

                <TouchableOpacity
                    style={styles.register}
                    onPress={() => this.submit()}
                >
                    <Text style={styles.submit}>Submit</Text>
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
        fontWeight: "100",
    },
    formField: {
        marginTop: 20,
    },
    input: {
        // width: ,
        height: 60,
        borderRadius: 5,
        paddingLeft: 20,
        fontSize: 16,
        backgroundColor: '#fff',
        color: 'grey',
        marginTop: 8,
        marginBottom: 8,
        // fontFamily: 'Montserrat-Medium',
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
        width: '100%'

    },
    submit: {
        textAlign: 'center',
    }
})

export default FormsScreen;