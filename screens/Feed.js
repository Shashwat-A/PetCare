import React, { Component } from 'react';
import { Text, View , StyleSheet} from 'react-native';
import Header from '../navigation/Header';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';


const font = {
    'MyFont' :  require('../assets/PlayfairDisplay-VariableFont_wght.ttf')
}

export default class Feed extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fontloaded : false
        }
    }

    async _loadFontAsync() {
        await Font.loadAsync(font);
        this.setState({fontloaded: true})
        console.log(this.state.fontloaded)
    }

    componentDidMount() {
        this._loadFontAsync();
    }
    
    render() {
        if (Object.keys.length === 0) {
            return(
                <Text>Loading...</Text>
            )
        } else {
            return (
                <View
                    style={{
                        flex: 1,
                        backgroundColor: '#fff2fe'
                    }}>
                    <Header/>
                    <View style={{marginTop: 20}}>
                        <Text style={styles.text}>This app was developed to help people with their pets so tht the pets as well as the owners are also happy. Mr.PetCare provides you with the basic information so that you are able to take care of your pets well. Thank you for installing our app, Enjoy!!</Text>
                    </View>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontFamily: 'MyFont'
    }
})