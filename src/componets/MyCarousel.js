import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Carousel from 'react-native-snap-carousel';

const MyCarousel = ({entries}) => {
    _renderItem = ({item, index}) => {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>{ item.title }</Text>
            </View>
        );
    }

    return (
        <Carousel
              ref={(c) => { this._carousel = c; }}
              data={entries}
              renderItem={this._renderItem}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
            />
    )
}

export default MyCarousel

const styles = StyleSheet.create({})
