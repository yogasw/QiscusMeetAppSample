/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {TextInput, StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native'
import QiscusMeet from 'arioki-qiscus-meet'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id_room: ''
        }
    }

    componentDidMount() {
    }

    launch() {
        QiscusMeet.launch(this.state.id_room)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Masukan ID ROOM {this.state.id_room}</Text>
                <TextInput
                    placeholder="masukan id room tanpa sepasi"
                    onChangeText={id_room => this.setState({id_room})}/>
                <View style={{width: "30%", backgroundColor:"#3D5AFE", alignContent:"center"}}>
                    <TouchableOpacity onPress={()=>{
                        if (this.state.id_room != ""){
                            this.launch()
                        }else {
                            Alert.alert("id room tidak boleh kosong")
                        }
                    }

                    }>
                        <Text style={{padding:10, textAlign:"center"}}>Join Room</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
