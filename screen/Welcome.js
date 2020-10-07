import React,{Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity,Image,ImageBackground, Button} from 'react-native';





export default class Welcome extends Component

{
    render(){

        const { navigate } = this.props.navigation;
        return(

            <ImageBackground source={require('../assets/back1.png')}
            style={styles.container}>
                <Image
                     style={styles.welcome}
                     source={require('../assets/welcome.png')}/>
            <View style={styles.inner}>
                <Text>Welcome to my movie world!</Text>
            </View>

                <View style={styles.container}>
                    <Button title='Sign-Up'
                            onPress={() =>navigate('Sign-Up')}
                    />
                </View>

                <View style={styles.container}>
                    <Button title='Sign-Up'
                            onPress={() =>navigate('Sign-In')}
                    />
                </View>

            </ImageBackground>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer:{
        margin:10,
    },
    inner: {
        marginBottom: 60,
        width: '80%',
        height: '80%',
        },

    welcome: {

        resizeMode: "contain",
        width: 200


    }
});
