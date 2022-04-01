import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Header from '../component/Header';

export default class DogScreen extends React.Component {
    render() {
        return(
            <View style={{flex:1, backgroundColor: '#D2A470'}}>
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
                        onPress={()=> this.props.navigation.navigate("HomeScreen")}>
                        <Text 
                            style={{fontFamily: 'MyFont',
                            fontWeight: 'bold',
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
        fontWeight: 'bold',
        fontSize: 24
    },

    btnHolder:{
        width: '100%',
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    }
})