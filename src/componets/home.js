import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import MyCarousel from './MyCarousel';


const image = {uri: 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80'}

class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "Francis"
        }
    }

    render() {
        return (

            <View style={styles.container}>
                {/* <ImageBackground source={image} style={styles.image}>
                    <Text style={styles.header}>Welcome</Text>
                    <Text style={styles.caption}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, doloribus.</Text>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={styles.formsButton}
                        onPress={() => this.props.navigation.navigate('Form')}>
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>

                </ImageBackground> */}

                <MyCarousel></MyCarousel>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    formsButton: {
        backgroundColor: "#ed4a75",
        borderRadius: 5,
        width: 200
    },
    container: {
        flex: 1,
    },
    header: {
        fontSize: 40,
        color: '#fff',
        fontWeight: 'bold',
        marginTop: 100,
        textAlign: 'center'
    },
    caption: {
        fontSize: 14,
        textAlign: 'center',
        color: '#dadcde',
        marginBottom: 10
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        textAlign: 'center',
        paddingHorizontal: 30,
        paddingVertical: 15,
        color: '#fff'
    }
});

export default HomeScreen;