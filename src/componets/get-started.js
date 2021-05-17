import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
    {
        key: 1,
        title: 'Title 1',
        text: 'Description.\nSay something cool',
        image: require('./../images/screens-01.jpg'),
        backgroundColor: '#59b2ab',
    },
    {
        key: 2,
        title: 'Title 2',
        text: 'Other cool stuff',
        image: require('./../images/screens-02.jpg'),
        backgroundColor: '#febe29',
    }
];

class getStarted extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showRealApp: false
        }
    }

    _renderItem = ({ item }) => {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>{item.title}</Text>
                <Image source={item.image} />
                <Text style={styles.text}>{item.text}</Text>
            </View>
        );
    }

    render() {
        return (
            <AppIntroSlider renderItem={this._renderItem} data={slides} onDone={this._onDone} />
        );
    }
}

const styles = StyleSheet.create({
    slide: {

    },
    title: {

    },
    text: {

    }
});

export default getStarted;