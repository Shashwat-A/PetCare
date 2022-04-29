import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Header from '../navigation/Header';
import * as Font from 'expo-font';


const font = {
    'MyFont' :  require('../assets/PlayfairDisplay-VariableFont_wght.ttf')
}

export default class CatScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fontloaded : false
        }
    }

    async _loadFontAsync() {
        await Font.loadAsync(font);
        this.setState({fontloaded: true})
        console.log(this.state)
    }

    componentDidMount() {
        this._loadFontAsync();
    }

    render() {
        return(
            <View style={{flex:1, backgroundColor: '#fff2fe'}}>
                <Header/>
                <View>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>Deit 'coming soon!'</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>Hair Growth 'coming soon!'</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>Important Behaviour/Body Changes 'coming soon!'</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'flex-start'}}>
                    <TouchableOpacity 
                        style={styles.backBtn}
                        onPress={()=> this.props.navigation.navigate("Home1")}>
                        <Text 
                            style={{fontFamily: 'MyFont',
                            fontSize: 20}}> 
                            Back</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    btn: {
        width: '80%',
        height: 80,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: "#B7FCEA",
        borderRadius: 25,
        borderWidth: 3,
    },

    backBtn: {
        width: 70,
        height: 60,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#B7FCEA",
        borderRadius: 25,
        borderWidth: 3,
    },


    btnText: {
        fontFamily: 'MyFont',
        fontSize: 24
    },

    btnHolder:{
        width: '100%',
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    }
})