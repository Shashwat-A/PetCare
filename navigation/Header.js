import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Platform, StatusBar } from 'react-native-web';

export default class Header extends React.Component {
    render() {
        return(
            <View style={{alignSelf: 'center', justifyContent: 'top', backgroundColor: '#ff5465', width: '100%', height: 110, alignItems: 'center', justifyContent: 'center', borderRadius: 25, borderWidth:4, marginTop: 30}}>
                <Text style={{fontSize: 30, fontWeight: 'bold'}}>Mr. Pet Care</Text>
            </View>
        )
    }
}