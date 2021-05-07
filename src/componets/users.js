import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

let customFonts = {
    'opensans-regular': require('./../fonts/OpenSans-Regular.ttf'),
};

class UsersScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fontsLoaded: false,
        }
    }

    async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
    }

    componentDidMount() {
        this._loadFontsAsync();
    }

    render() {

        if (this.state.fontsLoaded) {
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, corrupti blanditiis qui fugiat rerum repellat inventore in molestiae reprehenderit minus harum enim ea est natus, molestias aperiam, explicabo perspiciatis. Quo.</Text>
                </View>
            );
        } else {
            return <AppLoading />;
        }

    }
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'opensans-regular',
    }
});

export default UsersScreen;