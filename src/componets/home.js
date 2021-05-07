import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

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
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity
                    style={styles.formsButton}
                    onPress={() => this.props.navigation.navigate('FormsScreen')}>
                    <Text>Forms</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.formsButton, { backgroundColor: 'green' }]}
                    onPress={() => this.props.navigation.navigate('Users')}
                >
                    <Text>Users</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    formsButton: {
        backgroundColor: "red",
        padding: 20,
        margin: 10
    }
});

export default HomeScreen;