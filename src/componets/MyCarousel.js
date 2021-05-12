import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';
import HomeScreen from './home';
import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'

const slides = [
    {
      key: 1,
      title: 'Title 1',
      text: 'Description.\nSay something cool',
      image: img1,
      backgroundColor: '#59b2ab',
    },
    {
      key: 2,
      title: 'Title 2',
      text: 'Other cool stuff',
      image: img2,
      backgroundColor: '#febe29',
    },
    {
      key: 3,
      title: 'Rocket guy',
      text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
      image: img3,
      backgroundColor: '#22bcb5',
    }
  ];

  export default class App extends React.Component {
      constructor(props) {
          super(props)
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
    _onDone = () => {
      // User finished the introduction. Show real app through
      // navigation or simply by controlling state
      this.setState({ showRealApp: true });
    }
    render() {
      if (this.state.showRealApp) {
        return <App />;
      } else {
        return <AppIntroSlider renderItem={this._renderItem} data={slides} onDone={this._onDone}/>;
      }
    }
  }

  const styles = StyleSheet.create({

  })