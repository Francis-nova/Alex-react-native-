import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const image = { uri: 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80' }

class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "Francis"
        }
    }

    componentDidMount() {
        console.log("name: ", this.state.name)
    }

    render() {
        return (

            <View style={styles.container}>
                <ImageBackground source={image} style={styles.image}>
                    <Text style={styles.header}>Welcome</Text>
                    <Text style={styles.caption}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, doloribus.</Text>
                    <TouchableOpacity
                        style={styles.formsButton}
                        onPress={() => this.props.navigation.navigate('getStarted')}>
                        <Text>Get Started</Text>
                    </TouchableOpacity>

                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    formsButton: {
        backgroundColor: "#ed4a75",
        paddingHorizontal: 35,
        paddingVertical: 15,
        borderRadius: 5,
        width: '40%',
        textAlign: 'center',
        marginVertical: 20,
        marginHorizontal: 'auto'
    },
    container: {
        flex: 1,
        flexDirection: 'column'
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
        color: '#fff'
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center'
    }
});

export default HomeScreen;