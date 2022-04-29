import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Header from '../navigation/Header';

export default class MoreInformation extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,

                }}>
                <Header/>
                <View>
                    <Text  style={{marginTop: 20, fontSize: 20}}>More Information on the next version coming soon!!</Text>
                </View>
            </View>
        )
    }
}